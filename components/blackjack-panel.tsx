"use client"

import type { BlackjackCard, BlackjackState } from "@/hooks/use-calculator"
import { useTheme } from "@/lib/theme-context"
import type { ThemeId } from "@/lib/calculator-themes"

interface BlackjackPanelProps {
  state: BlackjackState
  onBetChange: (value: string) => void
  onDeal: () => void
  onStopBot: () => void
  onHit: () => void
  onStand: () => void
  onDouble: () => void
  onExit: () => void
}

interface BlackjackPalette {
  panelBg: string
  panelBorder: string
  panelShadow: string
  tableBg: string
  tableBorder: string
  tableInset: string
  stripe: string
  heading: string
  text: string
  chipBg: string
  chipBorder: string
  chipText: string
  inputBg: string
  inputBorder: string
  inputText: string
  statusBg: string
  statusBorder: string
  cardBackBg: string
  cardBackBorder: string
  cardBackShadow: string
}

const paletteByTheme: Record<Exclude<ThemeId, "custom">, BlackjackPalette> = {
  classic: {
    panelBg: "linear-gradient(180deg, #053022 0%, #04271c 100%)",
    panelBorder: "#0f6548",
    panelShadow: "inset 0 0 0 1px rgba(255,255,255,0.03), 0 10px 24px rgba(0,0,0,0.45)",
    tableBg: "radial-gradient(circle at 30% 20%, #0f5a40 0%, #083726 55%, #06261b 100%)",
    tableBorder: "rgba(241,196,15,0.35)",
    tableInset: "inset 0 0 35px rgba(0,0,0,0.35)",
    stripe: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.015) 12px, rgba(255,255,255,0.015) 24px)",
    heading: "#f6d66a",
    text: "#f7f2da",
    chipBg: "rgba(0,0,0,0.22)",
    chipBorder: "rgba(246,214,106,0.35)",
    chipText: "#f6d66a",
    inputBg: "#031e16",
    inputBorder: "#0f6548",
    inputText: "#f7f2da",
    statusBg: "rgba(0,0,0,0.22)",
    statusBorder: "rgba(255,255,255,0.08)",
    cardBackBg: "linear-gradient(135deg, #123e6d, #0b2a4a)",
    cardBackBorder: "rgba(255,255,255,0.3)",
    cardBackShadow: "0 4px 10px rgba(0,0,0,0.28)",
  },
  school: {
    panelBg: "linear-gradient(180deg, #b9ab90 0%, #9f9177 100%)",
    panelBorder: "#7b6e57",
    panelShadow: "inset 0 0 0 1px rgba(255,255,255,0.22), 0 8px 20px rgba(0,0,0,0.2)",
    tableBg: "radial-gradient(circle at 30% 20%, #c7b89b 0%, #b3a485 55%, #9e8f72 100%)",
    tableBorder: "rgba(30,94,40,0.42)",
    tableInset: "inset 0 0 30px rgba(0,0,0,0.18)",
    stripe: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.035) 12px, rgba(0,0,0,0.035) 24px)",
    heading: "#1f5c2c",
    text: "#211b11",
    chipBg: "rgba(255,255,255,0.3)",
    chipBorder: "rgba(30,94,40,0.38)",
    chipText: "#1f5c2c",
    inputBg: "#e5d9c0",
    inputBorder: "#86785f",
    inputText: "#221c12",
    statusBg: "rgba(255,255,255,0.28)",
    statusBorder: "rgba(0,0,0,0.14)",
    cardBackBg: "linear-gradient(135deg, #67819c, #4b6179)",
    cardBackBorder: "rgba(255,255,255,0.55)",
    cardBackShadow: "0 4px 10px rgba(0,0,0,0.22)",
  },
  retro: {
    panelBg: "linear-gradient(180deg, #1e7f7f 0%, #156262 100%)",
    panelBorder: "#ffcf40",
    panelShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.35)",
    tableBg: "radial-gradient(circle at 30% 20%, #2ca0a0 0%, #1f7b7b 55%, #175f5f 100%)",
    tableBorder: "rgba(232,48,128,0.45)",
    tableInset: "inset 0 0 35px rgba(0,0,0,0.28)",
    stripe: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.03) 12px, rgba(255,255,255,0.03) 24px)",
    heading: "#ffd740",
    text: "#fef8ea",
    chipBg: "rgba(0,0,0,0.18)",
    chipBorder: "rgba(255,215,64,0.45)",
    chipText: "#ffd740",
    inputBg: "#0f5151",
    inputBorder: "#ffcf40",
    inputText: "#fff8ec",
    statusBg: "rgba(0,0,0,0.18)",
    statusBorder: "rgba(255,255,255,0.16)",
    cardBackBg: "linear-gradient(135deg, #ff6ea8, #ca2f72)",
    cardBackBorder: "rgba(255,255,255,0.4)",
    cardBackShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },
  modern: {
    panelBg: "linear-gradient(180deg, #d5d7de 0%, #c3c7d1 100%)",
    panelBorder: "#8f95a5",
    panelShadow: "inset 0 0 0 1px rgba(255,255,255,0.45), 0 8px 18px rgba(0,0,0,0.12)",
    tableBg: "radial-gradient(circle at 30% 20%, #dde1ea 0%, #ced3de 55%, #bec4d1 100%)",
    tableBorder: "rgba(17,24,39,0.22)",
    tableInset: "inset 0 0 26px rgba(0,0,0,0.12)",
    stripe: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.025) 12px, rgba(0,0,0,0.025) 24px)",
    heading: "#111827",
    text: "#1f2937",
    chipBg: "rgba(255,255,255,0.45)",
    chipBorder: "rgba(17,24,39,0.25)",
    chipText: "#111827",
    inputBg: "#eef1f6",
    inputBorder: "#9aa1b2",
    inputText: "#111827",
    statusBg: "rgba(255,255,255,0.45)",
    statusBorder: "rgba(0,0,0,0.12)",
    cardBackBg: "linear-gradient(135deg, #7f8694, #616776)",
    cardBackBorder: "rgba(255,255,255,0.5)",
    cardBackShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  neon: {
    panelBg: "linear-gradient(180deg, #051624 0%, #03101b 100%)",
    panelBorder: "#00e5ff",
    panelShadow: "inset 0 0 0 1px rgba(0,229,255,0.15), 0 12px 24px rgba(0,0,0,0.45), 0 0 20px rgba(0,229,255,0.08)",
    tableBg: "radial-gradient(circle at 30% 20%, #0b2336 0%, #071a29 55%, #04111b 100%)",
    tableBorder: "rgba(255,23,68,0.45)",
    tableInset: "inset 0 0 35px rgba(0,0,0,0.45)",
    stripe: "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,229,255,0.04) 12px, rgba(0,229,255,0.04) 24px)",
    heading: "#00e5ff",
    text: "#dcf9ff",
    chipBg: "rgba(0,0,0,0.25)",
    chipBorder: "rgba(0,229,255,0.35)",
    chipText: "#00e5ff",
    inputBg: "#020b12",
    inputBorder: "#00e5ff",
    inputText: "#dcf9ff",
    statusBg: "rgba(0,0,0,0.24)",
    statusBorder: "rgba(0,229,255,0.2)",
    cardBackBg: "linear-gradient(135deg, #1d4c88, #12315a)",
    cardBackBorder: "rgba(0,229,255,0.45)",
    cardBackShadow: "0 4px 12px rgba(0,0,0,0.35)",
  },
}

export function BlackjackPanel({
  state,
  onBetChange,
  onDeal,
  onStopBot,
  onHit,
  onStand,
  onDouble,
  onExit,
}: BlackjackPanelProps) {
  const { themeId } = useTheme()
  const playerTotal = handValue(state.playerHand)
  const dealerVisibleTotal = state.dealerRevealed
    ? handValue(state.dealerHand)
    : handValue(state.dealerHand.slice(1))
  const inRound = state.roundActive
  const currentBetValue = state.currentBet || Number(state.betInput || 0)
  const palette = themeId === "custom" ? paletteByTheme.classic : paletteByTheme[themeId]

  return (
    <div className="h-full grid grid-rows-[1fr_auto_auto] gap-2.5">
      <div
        className="rounded-lg px-3 py-3 border animate-in fade-in zoom-in-95 duration-300 min-h-0"
        style={{
          background: palette.panelBg,
          borderColor: palette.panelBorder,
          boxShadow: palette.panelShadow,
        }}
      >
        <div
          className="rounded-md px-3 py-3 relative overflow-hidden border h-full flex flex-col"
          style={{
            background: palette.tableBg,
            borderColor: palette.tableBorder,
            boxShadow: palette.tableInset,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: palette.stripe,
            }}
          />

          <div className="mb-2 flex items-center justify-between text-[13px] font-semibold font-mono relative z-10" style={{ color: palette.heading }}>
            <span>Balance: ${state.balance}</span>
            <span>Bet: ${currentBetValue}</span>
          </div>

          <section className="mb-2 relative z-10 flex-1 min-h-0 flex flex-col">
            <div className="mb-1 text-[11px] font-semibold tracking-wider" style={{ color: palette.heading }}>
              DEALER ({dealerVisibleTotal})
            </div>
            <div className="flex flex-wrap gap-1.5 min-h-[76px] content-start justify-center">
              {state.dealerHand.length === 0 ? (
                <CardBack themeId={themeId} />
              ) : (
                state.dealerHand.map((card, i) => (
                  <CardView
                    key={`d-${i}`}
                    card={card}
                    hidden={!state.dealerRevealed && i === 0 && state.roundActive}
                    delay={i * 70}
                    themeId={themeId}
                  />
                ))
              )}
            </div>
          </section>

          <section className="mb-2 relative z-10 flex-1 min-h-0 flex flex-col">
            <div className="mb-1 text-[11px] font-semibold tracking-wider" style={{ color: palette.heading }}>
              YOU ({playerTotal || 0})
            </div>
            <div className="flex flex-wrap gap-1.5 min-h-[76px] content-start justify-center">
              {state.playerHand.length === 0
                ? <CardBack themeId={themeId} />
                : state.playerHand.map((card, i) => <CardView key={`p-${i}`} card={card} delay={i * 70} themeId={themeId} />)}
            </div>
          </section>

          <div
            className="text-[11px] font-mono min-h-[20px] relative z-10 animate-in fade-in duration-200 px-2 py-1 rounded"
            style={{ color: palette.text, background: palette.statusBg, border: `1px solid ${palette.statusBorder}` }}
          >
            {state.message}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <div className="col-span-2 rounded-md px-2 py-2 border" style={{ background: palette.statusBg, borderColor: palette.inputBorder }}>
          <label className="text-[10px] block mb-1 font-semibold tracking-wider" style={{ color: palette.heading }}>
            BET
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={state.betInput}
            onChange={(e) => onBetChange(e.currentTarget.value)}
            className="w-full rounded px-2 py-1.5 text-sm"
            style={{
              background: palette.inputBg,
              color: palette.inputText,
              border: `1px solid ${palette.inputBorder}`,
            }}
          />
          <div className="mt-1.5 flex gap-1.5">
            {[25, 50, 100, 250].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => onBetChange(String(chip))}
                className="text-[10px] px-1.5 py-0.5 rounded border transition-all hover:brightness-110"
                style={{
                  color: palette.chipText,
                  borderColor: palette.chipBorder,
                  background: palette.chipBg,
                }}
              >
                ${chip}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onBetChange(String(state.balance))}
              className="text-[10px] px-1.5 py-0.5 rounded border font-bold transition-all hover:brightness-110"
              style={{
                color: palette.chipText,
                borderColor: palette.chipBorder,
                background: palette.chipBg,
              }}
            >
              MAX!
            </button>
          </div>
        </div>
        <BlackjackActionButton onClick={onExit} tone="danger" themeId={themeId}>
          Exit
        </BlackjackActionButton>
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        {state.botAutoPlay ? (
          <BlackjackActionButton onClick={onStopBot} tone="danger" themeId={themeId}>
            Stop
          </BlackjackActionButton>
        ) : (
          <BlackjackActionButton onClick={onDeal} tone="gold" disabled={inRound} themeId={themeId}>
            Deal
          </BlackjackActionButton>
        )}
        <BlackjackActionButton onClick={onHit} tone="green" disabled={!inRound || state.botAutoPlay} themeId={themeId}>
          Hit
        </BlackjackActionButton>
        <BlackjackActionButton onClick={onStand} tone="green" disabled={!inRound || state.botAutoPlay} themeId={themeId}>
          Stand
        </BlackjackActionButton>
        <BlackjackActionButton onClick={onDouble} tone="blue" disabled={!inRound || !state.canDouble || state.botAutoPlay} themeId={themeId}>
          Double
        </BlackjackActionButton>
      </div>
    </div>
  )
}

function CardView({ card, hidden = false, delay = 0, themeId }: { card: BlackjackCard; hidden?: boolean; delay?: number; themeId: ThemeId }) {
  if (hidden) return <CardBack themeId={themeId} />

  const red = card.suit === "♥" || card.suit === "♦"

  return (
    <div
      className="w-11 h-16 rounded-md flex flex-col items-center justify-center text-xs font-bold border animate-in slide-in-from-bottom-2 fade-in duration-300 hover:-translate-y-0.5 transition-transform"
      style={{
        animationDelay: `${delay}ms`,
        background: "rgba(255,255,255,0.96)",
        color: red ? "#c62828" : "#1a1a1a",
        borderColor: "rgba(0,0,0,0.18)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.28)",
      }}
    >
      <span>{card.rank}</span>
      <span>{card.suit}</span>
    </div>
  )
}

function CardBack({ themeId }: { themeId?: ThemeId }) {
  const palette = !themeId || themeId === "custom" ? paletteByTheme.classic : paletteByTheme[themeId]
  return (
    <div
      className="w-11 h-16 rounded-md border animate-in fade-in zoom-in-95 duration-300"
      style={{
        background: palette.cardBackBg,
        borderColor: palette.cardBackBorder,
        boxShadow: palette.cardBackShadow,
      }}
    />
  )
}

function BlackjackActionButton({
  children,
  onClick,
  tone,
  themeId,
  disabled = false,
}: {
  children: React.ReactNode
  onClick: () => void
  tone: "gold" | "green" | "blue" | "danger"
  themeId: ThemeId
  disabled?: boolean
}) {
  const basePalette = {
    gold: { bg: "#b9891a", text: "#15110a", border: "#f3cc6b" },
    green: { bg: "#1f8f58", text: "#eafff2", border: "#66d8a3" },
    blue: { bg: "#1f5f99", text: "#edf6ff", border: "#79b7f2" },
    danger: { bg: "#9c2d2d", text: "#ffecec", border: "#ef8b8b" },
  }

  const softerPaletteByTheme: Record<ThemeId, typeof basePalette> = {
    classic: basePalette,
    custom: basePalette,
    neon: {
      gold: { bg: "#8b6a20", text: "#fff7dc", border: "#d1a64a" },
      green: { bg: "#176b44", text: "#ddffef", border: "#49a779" },
      blue: { bg: "#1a4f7d", text: "#e7f4ff", border: "#5d95c8" },
      danger: { bg: "#7f2a34", text: "#ffe9ed", border: "#c96674" },
    },
    retro: {
      gold: { bg: "#8f6c1d", text: "#fff6d8", border: "#d4ac44" },
      green: { bg: "#1b6f47", text: "#e6fff1", border: "#55b184" },
      blue: { bg: "#23527a", text: "#edf7ff", border: "#77a9d3" },
      danger: { bg: "#8b2f3a", text: "#ffedf0", border: "#d27984" },
    },
    school: {
      gold: { bg: "#7b6123", text: "#fff4d2", border: "#b8995a" },
      green: { bg: "#2d6136", text: "#ecfff1", border: "#5f9a69" },
      blue: { bg: "#3b5c77", text: "#edf6ff", border: "#7897b2" },
      danger: { bg: "#743636", text: "#ffefef", border: "#b57f7f" },
    },
    modern: {
      gold: { bg: "#7a662f", text: "#f8f2de", border: "#a9986a" },
      green: { bg: "#2e5f4a", text: "#e8fff4", border: "#6d9c89" },
      blue: { bg: "#36546f", text: "#e9f2fb", border: "#7190ad" },
      danger: { bg: "#6f3737", text: "#ffecec", border: "#a97a7a" },
    },
  }

  const palette = softerPaletteByTheme[themeId][tone]

  const themedDisabledBg = themeId === "modern" ? "#d0d0d6" : themeId === "school" ? "#bdb39d" : "#26453a"
  const themedDisabledText = themeId === "modern" ? "#666" : "#9bb7aa"
  const themedDisabledBorder = themeId === "modern" ? "#9aa1b2" : themeId === "school" ? "#8a7d63" : "#3e6a5a"

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-md text-base font-semibold py-3 transition-all duration-200 active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:brightness-110"
      style={{
        background: disabled ? themedDisabledBg : palette.bg,
        color: disabled ? themedDisabledText : palette.text,
        border: `1px solid ${disabled ? themedDisabledBorder : palette.border}`,
        boxShadow: disabled ? "none" : "0 3px 0 rgba(0,0,0,0.25), 0 0 16px rgba(0,0,0,0.18)",
      }}
    >
      {children}
    </button>
  )
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
