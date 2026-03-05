"use client"

import { useState, useCallback } from "react"
import type { TranslationSet } from "@/lib/translations"

export type CalculatorMode = "standard" | "quadratic" | "blackjack"

interface CalculatorState {
  display: string
  expression: string
  previousResult: string | null
  memory: number
  hasError: boolean
  justEvaluated: boolean
}

interface QuadraticState {
  a: string
  b: string
  c: string
  activeField: "a" | "b" | "c"
  result: string | null
}

export type BlackjackSuit = "♠" | "♥" | "♦" | "♣"
export type BlackjackRank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K"

export interface BlackjackCard {
  rank: BlackjackRank
  suit: BlackjackSuit
}

export interface BlackjackState {
  balance: number
  betInput: string
  currentBet: number
  playerHand: BlackjackCard[]
  dealerHand: BlackjackCard[]
  deck: BlackjackCard[]
  roundActive: boolean
  dealerRevealed: boolean
  canDouble: boolean
  botEnabled: boolean
  botInProgress: boolean
  botAutoPlay: boolean
  botActivationNotice: string | null
  botRoundNotice: string | null
  message: string
}

const SUITS: BlackjackSuit[] = ["♠", "♥", "♦", "♣"]
const RANKS: BlackjackRank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function createShuffledDeck(): BlackjackCard[] {
  const deck: BlackjackCard[] = []
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ rank, suit })
    }
  }

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }

  return deck
}

function drawCard(deck: BlackjackCard[]): BlackjackCard {
  const card = deck.shift()
  if (!card) {
    const refill = createShuffledDeck()
    const next = refill.shift()
    if (!next) throw new Error("Deck generation failed")
    deck.push(...refill)
    return next
  }
  return card
}

function handValue(hand: BlackjackCard[]): number {
  let total = 0
  let aces = 0

  for (const card of hand) {
    if (card.rank === "A") {
      aces += 1
      total += 11
    } else if (["K", "Q", "J"].includes(card.rank)) {
      total += 10
    } else {
      total += Number(card.rank)
    }
  }

  while (total > 21 && aces > 0) {
    total -= 10
    aces -= 1
  }

  return total
}

function isBlackjack(hand: BlackjackCard[]): boolean {
  return hand.length === 2 && handValue(hand) === 21
}

function createInitialBlackjackState(): BlackjackState {
  return {
    balance: 1000,
    betInput: "50",
    currentBet: 0,
    playerHand: [],
    dealerHand: [],
    deck: createShuffledDeck(),
    roundActive: false,
    dealerRevealed: false,
    canDouble: false,
    botEnabled: false,
    botInProgress: false,
    botAutoPlay: false,
    botActivationNotice: null,
    botRoundNotice: null,
    message: "Enter a bet and press Deal.",
  }
}

function formatMoneyAmount(value: number): string {
  const rounded = Math.round(value * 100) / 100
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/\.00$/, "")
}

function createBotRoundNotice(botEnabled: boolean, outcome: "won" | "lost" | "push", amount: number): string | null {
  if (!botEnabled) return null
  if (outcome === "push" || amount <= 0) return null
  if (outcome === "won") return `Sigeon Bot: Won ${formatMoneyAmount(amount)}$`
  if (outcome === "lost") return `Sigeon Bot: Lost ${formatMoneyAmount(amount)}$`
  return null
}

export function useCalculator(t?: TranslationSet) {
  const [mode, setMode] = useState<CalculatorMode>("standard")
  const [state, setState] = useState<CalculatorState>({
    display: "0",
    expression: "",
    previousResult: null,
    memory: 0,
    hasError: false,
    justEvaluated: false,
  })
  const [quadratic, setQuadratic] = useState<QuadraticState>({
    a: "",
    b: "",
    c: "",
    activeField: "a",
    result: null,
  })
  const [blackjack, setBlackjack] = useState<BlackjackState>(createInitialBlackjackState)

  const clearAll = useCallback(() => {
    setState({
      display: "0",
      expression: "",
      previousResult: null,
      memory: 0,
      hasError: false,
      justEvaluated: false,
    })
  }, [])

  const clearDisplay = useCallback(() => {
    setState((prev) => ({
      ...prev,
      display: "0",
      hasError: false,
    }))
  }, [])

  const backspace = useCallback(() => {
    setState((prev) => {
      if (prev.hasError || prev.justEvaluated) {
        return { ...prev, display: "0", hasError: false, justEvaluated: false }
      }
      const newDisplay = prev.display.length > 1 ? prev.display.slice(0, -1) : "0"
      return { ...prev, display: newDisplay }
    })
  }, [])

  const safeEval = (expr: string): number => {
    const sanitized = expr
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/π/g, String(Math.PI))
      .replace(/e(?![x])/g, String(Math.E))

    // Handle implicit multiplication before parentheses
    const withMultiply = sanitized.replace(/(\d)\(/g, "$1*(").replace(/\)(\d)/g, ")*$1")

    // Custom function replacements
    const withFunctions = withMultiply
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/abs\(/g, "Math.abs(")
      .replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, "Math.pow($1,$2)")

    // Validate: only allow safe characters
    if (!/^[0-9+\-*/().Math,sqrtsincoantlgbpowe\s]+$/.test(withFunctions)) {
      throw new Error("Invalid expression")
    }

    // eslint-disable-next-line no-eval
    const result = Function(`"use strict"; return (${withFunctions})`)()

    if (typeof result !== "number" || !isFinite(result)) {
      throw new Error("Invalid result")
    }

    return result
  }

  const inputDigit = useCallback((digit: string) => {
    setState((prev) => {
      if (prev.hasError) {
        return { ...prev, display: digit, hasError: false, justEvaluated: false }
      }
      if (prev.justEvaluated) {
        return { ...prev, display: digit, expression: "", justEvaluated: false }
      }
      if (prev.display === "0" && digit !== ".") {
        return { ...prev, display: digit }
      }
      // Prevent multiple decimals 
      if (digit === "." && prev.display.split(/[+\-×÷]/).pop()?.includes(".")) {
        return prev
      }
      return { ...prev, display: prev.display + digit }
    })
  }, [])

  const inputOperator = useCallback((operator: string) => {
    setState((prev) => {
      if (prev.hasError) return prev
      const lastChar = prev.display.slice(-1)
      // Replace last operator if one exists
      if (["+", "−", "×", "÷"].includes(lastChar)) {
        return { ...prev, display: prev.display.slice(0, -1) + operator, justEvaluated: false }
      }
      return { ...prev, display: prev.display + operator, justEvaluated: false }
    })
  }, [])

  const inputParenthesis = useCallback((paren: string) => {
    setState((prev) => {
      if (prev.hasError) {
        return { ...prev, display: paren, hasError: false, justEvaluated: false }
      }
      if (prev.justEvaluated && paren === "(") {
        return { ...prev, display: paren, expression: "", justEvaluated: false }
      }
      if (prev.display === "0" && paren === "(") {
        return { ...prev, display: paren }
      }
      return { ...prev, display: prev.display + paren }
    })
  }, [])

  const inputFunction = useCallback((fn: string) => {
    setState((prev) => {
      if (prev.hasError) {
        return { ...prev, display: fn + "(", hasError: false, justEvaluated: false }
      }
      if (prev.justEvaluated) {
        return { ...prev, display: fn + "(" + prev.display + ")", justEvaluated: false }
      }
      if (prev.display === "0") {
        return { ...prev, display: fn + "(" }
      }
      return { ...prev, display: prev.display + fn + "(" }
    })
  }, [])

  const toggleSign = useCallback(() => {
    setState((prev) => {
      if (prev.hasError) return prev
      if (prev.display.startsWith("-")) {
        return { ...prev, display: prev.display.slice(1) }
      }
      if (prev.display === "0") return prev
      return { ...prev, display: "-" + prev.display }
    })
  }, [])

  const squareRoot = useCallback(() => {
    setState((prev) => {
      try {
        const value = safeEval(prev.display)
        if (value < 0) {
          return { ...prev, display: t?.negativeSqrt ?? "Error: Negative sqrt", hasError: true }
        }
        const result = Math.sqrt(value)
        return {
          ...prev,
          display: formatResult(result),
          expression: `sqrt(${prev.display})`,
          justEvaluated: true,
        }
      } catch {
        return { ...prev, display: "Error", hasError: true }
      }
    })
  }, [])

  const power = useCallback(() => {
    setState((prev) => {
      if (prev.hasError) return prev
      return { ...prev, display: prev.display + "^", justEvaluated: false }
    })
  }, [])

  const percentage = useCallback(() => {
    setState((prev) => {
      try {
        const value = safeEval(prev.display)
        const result = value / 100
        return {
          ...prev,
          display: formatResult(result),
          justEvaluated: true,
        }
      } catch {
        return { ...prev, display: "Error", hasError: true }
      }
    })
  }, [])

  const memoryStore = useCallback(() => {
    setState((prev) => {
      try {
        const value = safeEval(prev.display)
        return { ...prev, memory: value }
      } catch {
        return prev
      }
    })
  }, [])

  const memoryRecall = useCallback(() => {
    setState((prev) => ({
      ...prev,
      display: formatResult(prev.memory),
      justEvaluated: true,
    }))
  }, [])

  const memoryClear = useCallback(() => {
    setState((prev) => ({ ...prev, memory: 0 }))
  }, [])

  const memoryAdd = useCallback(() => {
    setState((prev) => {
      try {
        const value = safeEval(prev.display)
        return { ...prev, memory: prev.memory + value }
      } catch {
        return prev
      }
    })
  }, [])

  const evaluate = useCallback(() => {
    setState((prev) => {
      try {
        const result = safeEval(prev.display)
        return {
          ...prev,
          display: formatResult(result),
          expression: prev.display,
          previousResult: formatResult(result),
          justEvaluated: true,
          hasError: false,
        }
      } catch {
        return {
          ...prev,
          display: "Error",
          hasError: true,
          justEvaluated: true,
        }
      }
    })
  }, [])

  const enterBlackjackMode = useCallback(() => {
    setMode("blackjack")
    setBlackjack((prev) => ({
      ...prev,
      message: "🎰 Lucky 21! Welcome to Blackjack.",
      dealerRevealed: prev.roundActive ? prev.dealerRevealed : false,
      botInProgress: false,
    }))
  }, [])

  const stopBlackjackBot = useCallback(() => {
    setBlackjack((prev) => ({
      ...prev,
      botAutoPlay: false,
      botInProgress: false,
      message: prev.roundActive ? "Bot stopped. Continue manually." : "Bot stopped.",
    }))
  }, [])

  const dismissBlackjackBotNotice = useCallback(() => {
    setBlackjack((prev) => ({ ...prev, botActivationNotice: null }))
  }, [])

  const dismissBlackjackRoundNotice = useCallback(() => {
    setBlackjack((prev) => ({ ...prev, botRoundNotice: null }))
  }, [])

  const exitBlackjackMode = useCallback(() => {
    setMode("standard")
    setState((prev) => ({
      ...prev,
      display: "0",
      expression: "",
      hasError: false,
      justEvaluated: false,
    }))
  }, [])

  const setBlackjackBetInput = useCallback((value: string) => {
    const sanitized = value.replace(/[^0-9]/g, "")
    setBlackjack((prev) => ({ ...prev, betInput: sanitized }))
  }, [])

  const resolveDealerRound = (base: BlackjackState): BlackjackState => {
    const deck = [...base.deck]
    const playerTotal = handValue(base.playerHand)
    const dealerHand = [...base.dealerHand]
    const dealerShouldThrow = base.botEnabled && base.botAutoPlay && playerTotal <= 21

    while (handValue(dealerHand) < 17) {
      dealerHand.push(drawCard(deck))
    }

    let dealerTotal = handValue(dealerHand)

    if (dealerShouldThrow) {
      while (dealerTotal <= 21 && dealerTotal >= playerTotal) {
        dealerHand.push(drawCard(deck))
        dealerTotal = handValue(dealerHand)
      }
    }

    if (dealerTotal > 21) {
      const nextBalance = base.balance + base.currentBet * 2
      return {
        ...base,
        deck,
        dealerHand,
        roundActive: false,
        dealerRevealed: true,
        canDouble: false,
        botInProgress: false,
        balance: nextBalance,
        botRoundNotice: createBotRoundNotice(base.botEnabled, "won", base.currentBet * 2),
        message: "Dealer busts. You win!",
      }
    }

    if (playerTotal > dealerTotal) {
      const nextBalance = base.balance + base.currentBet * 2
      return {
        ...base,
        deck,
        dealerHand,
        roundActive: false,
        dealerRevealed: true,
        canDouble: false,
        botInProgress: false,
        balance: nextBalance,
        botRoundNotice: createBotRoundNotice(base.botEnabled, "won", base.currentBet * 2),
        message: "You win!",
      }
    }

    if (playerTotal < dealerTotal) {
      return {
        ...base,
        deck,
        dealerHand,
        roundActive: false,
        dealerRevealed: true,
        canDouble: false,
        botInProgress: false,
        botRoundNotice: createBotRoundNotice(base.botEnabled, "lost", base.currentBet),
        message: "Dealer wins.",
      }
    }

    const nextBalance = base.balance + base.currentBet
    return {
      ...base,
      deck,
      dealerHand,
      roundActive: false,
      dealerRevealed: true,
      canDouble: false,
      botInProgress: false,
      balance: nextBalance,
      botRoundNotice: createBotRoundNotice(base.botEnabled, "push", 0),
      message: "Push.",
    }
  }

  const startBlackjackRound = useCallback(() => {
    setBlackjack((prev) => {
      if (prev.roundActive) return prev

      const bet = Number(prev.betInput)
      if (!Number.isFinite(bet) || bet <= 0) {
        return { ...prev, message: "Enter a valid bet above 0." }
      }
      if (bet > prev.balance) {
        return { ...prev, message: "Insufficient balance for that bet." }
      }

      const isActivationBet = bet === 67 && !prev.botEnabled
      const botEnabled = prev.botEnabled || bet === 67
      const botAutoPlay = isActivationBet ? true : prev.botAutoPlay

      const deck = prev.deck.length < 15 ? createShuffledDeck() : [...prev.deck]
      const balanceAfterBet = prev.balance - bet

      if (botEnabled && botAutoPlay) {
        const roll = Math.random()

        const favoredOpenings: Array<{ playerHand: BlackjackCard[]; dealerHand: BlackjackCard[] }> = [
          {
            playerHand: [
              { rank: "10", suit: "♠" },
              { rank: "9", suit: "♣" },
            ],
            dealerHand: [
              { rank: "6", suit: "♦" },
              { rank: "7", suit: "♥" },
            ],
          },
          {
            playerHand: [
              { rank: "9", suit: "♣" },
              { rank: "8", suit: "♠" },
            ],
            dealerHand: [
              { rank: "10", suit: "♦" },
              { rank: "6", suit: "♥" },
            ],
          },
          {
            playerHand: [
              { rank: "8", suit: "♣" },
              { rank: "7", suit: "♠" },
            ],
            dealerHand: [
              { rank: "9", suit: "♦" },
              { rank: "7", suit: "♥" },
            ],
          },
        ]

        const scenario = roll < 0.6 ? favoredOpenings[0] : roll < 0.85 ? favoredOpenings[1] : favoredOpenings[2]

        return {
          ...prev,
          deck,
          playerHand: scenario.playerHand,
          dealerHand: scenario.dealerHand,
          currentBet: bet,
          balance: balanceAfterBet,
          roundActive: true,
          dealerRevealed: false,
          canDouble: balanceAfterBet >= bet,
          botEnabled,
          botAutoPlay,
          botInProgress: false,
          botActivationNotice: isActivationBet ? "Sigeon Bot has been activated!" : prev.botActivationNotice,
          message: "Round started. Hit or Stand.",
        }
      }

      const playerHand = [drawCard(deck), drawCard(deck)]
      const dealerHand = [drawCard(deck), drawCard(deck)]

      const playerBJ = isBlackjack(playerHand)
      const dealerBJ = isBlackjack(dealerHand)

      if (playerBJ && dealerBJ) {
        const nextBalance = balanceAfterBet + bet
        return {
          ...prev,
          deck,
          playerHand,
          dealerHand,
          currentBet: bet,
          balance: nextBalance,
          roundActive: false,
          dealerRevealed: true,
          canDouble: false,
          botEnabled,
          botInProgress: false,
          botAutoPlay,
          botActivationNotice: isActivationBet ? "Sigeon Bot has been activated!" : prev.botActivationNotice,
          botRoundNotice: createBotRoundNotice(botEnabled, "push", 0),
          message: "Push. Both have Blackjack.",
        }
      }

      if (playerBJ) {
        const nextBalance = balanceAfterBet + bet * 2.5
        return {
          ...prev,
          deck,
          playerHand,
          dealerHand,
          currentBet: bet,
          balance: nextBalance,
          roundActive: false,
          dealerRevealed: true,
          canDouble: false,
          botEnabled,
          botInProgress: false,
          botAutoPlay,
          botActivationNotice: isActivationBet ? "Sigeon Bot has been activated!" : prev.botActivationNotice,
          botRoundNotice: createBotRoundNotice(botEnabled, "won", bet * 2.5),
          message: "Blackjack! You win 3:2.",
        }
      }

      if (dealerBJ) {
        const nextBalance = balanceAfterBet
        return {
          ...prev,
          deck,
          playerHand,
          dealerHand,
          currentBet: bet,
          balance: nextBalance,
          roundActive: false,
          dealerRevealed: true,
          canDouble: false,
          botEnabled,
          botInProgress: false,
          botAutoPlay,
          botActivationNotice: isActivationBet ? "Sigeon Bot has been activated!" : prev.botActivationNotice,
          botRoundNotice: createBotRoundNotice(botEnabled, "lost", bet),
          message: "Dealer Blackjack. You lose.",
        }
      }

      return {
        ...prev,
        deck,
        playerHand,
        dealerHand,
        currentBet: bet,
        balance: balanceAfterBet,
        roundActive: true,
        dealerRevealed: false,
        canDouble: balanceAfterBet >= bet,
        botEnabled,
        botInProgress: false,
        botAutoPlay,
        botActivationNotice: isActivationBet ? "Sigeon Bot has been activated!" : prev.botActivationNotice,
        botRoundNotice: null,
        message: isActivationBet
          ? "🤖 Bot unlocked! Round started."
          : "Round started. Hit or Stand.",
      }
    })
  }, [])

  const blackjackHit = useCallback(() => {
    setBlackjack((prev) => {
      if (!prev.roundActive) return prev

      const deck = [...prev.deck]
      const playerHand = [...prev.playerHand, drawCard(deck)]
      const total = handValue(playerHand)

      if (total > 21) {
        return {
          ...prev,
          deck,
          playerHand,
          roundActive: false,
          dealerRevealed: true,
          canDouble: false,
          botInProgress: false,
          botRoundNotice: createBotRoundNotice(prev.botEnabled, "lost", prev.currentBet),
          message: "Bust! Dealer wins.",
        }
      }

      if (total === 21) {
        return resolveDealerRound({
          ...prev,
          deck,
          playerHand,
          canDouble: false,
          message: "21! Auto-stand...",
        })
      }

      return {
        ...prev,
        deck,
        playerHand,
        canDouble: false,
        botInProgress: false,
        message: "Hit or Stand.",
      }
    })
  }, [])

  const blackjackStand = useCallback(() => {
    setBlackjack((prev) => {
      if (!prev.roundActive) return prev
      return resolveDealerRound(prev)
    })
  }, [])

  const blackjackDouble = useCallback(() => {
    setBlackjack((prev) => {
      if (!prev.roundActive || !prev.canDouble || prev.playerHand.length !== 2) {
        return prev
      }

      if (prev.balance < prev.currentBet) {
        return { ...prev, message: "Not enough balance to double." }
      }

      const deck = [...prev.deck]
      const playerHand = [...prev.playerHand, drawCard(deck)]
      const doubledBet = prev.currentBet * 2
      const base: BlackjackState = {
        ...prev,
        deck,
        playerHand,
        currentBet: doubledBet,
        balance: prev.balance - prev.currentBet,
        canDouble: false,
      }

      if (handValue(playerHand) > 21) {
        return {
          ...base,
          roundActive: false,
          dealerRevealed: true,
          botInProgress: false,
          botRoundNotice: createBotRoundNotice(prev.botEnabled, "lost", base.currentBet),
          message: "Bust after double. Dealer wins.",
        }
      }

      return resolveDealerRound(base)
    })
  }, [])

  const fallbackBotDecision = (current: BlackjackState): "hit" | "stand" | "double" => {
    const total = handValue(current.playerHand)
    const dealerUp = current.dealerHand[1] ?? current.dealerHand[0]
    const dealerUpValue = dealerUp
      ? dealerUp.rank === "A"
        ? 11
        : ["K", "Q", "J"].includes(dealerUp.rank)
          ? 10
          : Number(dealerUp.rank)
      : 10

    if (current.canDouble && current.playerHand.length === 2 && (total === 10 || total === 11) && dealerUpValue < 10) {
      return "double"
    }
    if (total >= 17) return "stand"
    if (total <= 11) return "hit"
    if (dealerUpValue >= 7) return "hit"
    return "stand"
  }

  const blackjackBotStep = useCallback(async () => {
    if (!blackjack.botEnabled || !blackjack.botAutoPlay || !blackjack.roundActive || blackjack.botInProgress) return

    setBlackjack((prev) => {
      if (!prev.botEnabled || !prev.botAutoPlay || !prev.roundActive || prev.botInProgress) return prev
      return { ...prev, botInProgress: true, message: "🤖 Bot is thinking..." }
    })

    const botUrl = process.env.NEXT_PUBLIC_BLACKJACK_BOT_URL || "/api/bot/decision"
    const dealerUpCard = blackjack.dealerHand[1] ?? blackjack.dealerHand[0]

    let action: "hit" | "stand" | "double" = fallbackBotDecision(blackjack)

    if (dealerUpCard) {
      try {
        const response = await fetch(botUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            player_hand: blackjack.playerHand,
            dealer_upcard: dealerUpCard,
            can_double: blackjack.canDouble && blackjack.playerHand.length === 2,
            current_bet: blackjack.currentBet,
            balance: blackjack.balance,
          }),
        })

        if (response.ok) {
          const data = (await response.json()) as { action?: "hit" | "stand" | "double" }
          if (data.action === "hit" || data.action === "stand" || data.action === "double") {
            action = data.action
          }
        }
      } catch {
        action = fallbackBotDecision(blackjack)
      }
    }

    if (action === "double" && blackjack.canDouble && blackjack.playerHand.length === 2) {
      blackjackDouble()
      return
    }

    if (action === "stand") {
      blackjackStand()
      return
    }

    blackjackHit()
  }, [blackjack, blackjackDouble, blackjackHit, blackjackStand])

  // Quadratic equation solver
  const solveQuadratic = useCallback(() => {
    const a = parseFloat(quadratic.a)
    const b = parseFloat(quadratic.b)
    const c = parseFloat(quadratic.c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setQuadratic((prev) => ({ ...prev, result: `${t?.error ?? "Error"}: ${t?.enterValid ?? "Please enter valid numbers for a, b, and c"}` }))
      return
    }

    if (a === 0) {
      if (b === 0) {
        setQuadratic((prev) => ({
          ...prev,
          result: c === 0
            ? (t?.infiniteSolutions ?? "Infinite solutions (0 = 0)")
            : (t?.noSolution ?? "No solution (equation is inconsistent)"),
        }))
      } else {
        const x = -c / b
        setQuadratic((prev) => ({
          ...prev,
          result: `${t?.linearEq ?? "Linear equation:"} x = ${formatResult(x)}`,
        }))
      }
      return
    }

    const discriminant = b * b - 4 * a * c

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
      setQuadratic((prev) => ({
        ...prev,
        result: `${t?.twoReal ?? "Two real solutions:"}\nx\u2081 = ${formatResult(x1)}\nx\u2082 = ${formatResult(x2)}\n\u0394 = ${formatResult(discriminant)}`,
      }))
    } else if (discriminant === 0) {
      const x = -b / (2 * a)
      setQuadratic((prev) => ({
        ...prev,
        result: `${t?.oneRepeated ?? "One repeated solution:"}\nx = ${formatResult(x)}\n\u0394 = 0`,
      }))
    } else {
      const realPart = -b / (2 * a)
      const imagPart = Math.sqrt(-discriminant) / (2 * a)
      setQuadratic((prev) => ({
        ...prev,
        result: `${t?.twoComplex ?? "Two complex solutions:"}\nx\u2081 = ${formatResult(realPart)} + ${formatResult(imagPart)}i\nx\u2082 = ${formatResult(realPart)} \u2212 ${formatResult(imagPart)}i\n\u0394 = ${formatResult(discriminant)}`,
      }))
    }
  }, [quadratic.a, quadratic.b, quadratic.c])

  const updateQuadraticField = useCallback((field: "a" | "b" | "c", value: string) => {
    setQuadratic((prev) => ({ ...prev, [field]: value, result: null }))
  }, [])

  const setActiveQuadraticField = useCallback((field: "a" | "b" | "c") => {
    setQuadratic((prev) => ({ ...prev, activeField: field }))
  }, [])

  const clearQuadratic = useCallback(() => {
    setQuadratic({ a: "", b: "", c: "", activeField: "a", result: null })
  }, [])

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "standard" ? "quadratic" : "standard"))
  }, [])

  return {
    mode,
    state,
    quadratic,
    blackjack,
    toggleMode,
    clearAll,
    clearDisplay,
    backspace,
    inputDigit,
    inputOperator,
    inputParenthesis,
    inputFunction,
    toggleSign,
    squareRoot,
    power,
    percentage,
    memoryStore,
    memoryRecall,
    memoryClear,
    memoryAdd,
    evaluate,
    enterBlackjackMode,
    exitBlackjackMode,
    setBlackjackBetInput,
    startBlackjackRound,
    blackjackHit,
    blackjackStand,
    blackjackDouble,
    blackjackBotStep,
    stopBlackjackBot,
    dismissBlackjackBotNotice,
    dismissBlackjackRoundNotice,
    solveQuadratic,
    updateQuadraticField,
    setActiveQuadraticField,
    clearQuadratic,
  }
}

function formatResult(num: number): string {
  if (Number.isInteger(num) && Math.abs(num) < 1e15) {
    return num.toString()
  }
  // Show up to 10 significant digits
  const formatted = parseFloat(num.toPrecision(10))
  if (Math.abs(formatted) < 0.0001 || Math.abs(formatted) >= 1e10) {
    return formatted.toExponential(6)
  }
  return formatted.toString()
}
