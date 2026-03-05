"use client"

import { useEffect, useState } from "react"
import { useCalculator } from "@/hooks/use-calculator"
import { toast } from "@/hooks/use-toast"
import { useTheme } from "@/lib/theme-context"
import { CalculatorDisplay } from "./calculator-display"
import { CalculatorButton } from "./calculator-button"
import { QuadraticPanel } from "./quadratic-panel"
import { BlackjackPanel } from "./blackjack-panel"
import { SettingsPanel } from "./settings-panel"

export function Calculator() {
  const { theme, isDark, t } = useTheme()
  const calc = useCalculator(t)
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (calc.mode !== "standard") return

      const key = e.key
      if (/^[0-9.]$/.test(key)) {
        e.preventDefault()
        calc.inputDigit(key)
      } else if (key === "+") {
        e.preventDefault()
        calc.inputOperator("+")
      } else if (key === "-") {
        e.preventDefault()
        calc.inputOperator("\u2212")
      } else if (key === "*") {
        e.preventDefault()
        calc.inputOperator("\u00D7")
      } else if (key === "/") {
        e.preventDefault()
        calc.inputOperator("\u00F7")
      } else if (key === "Enter" || key === "=") {
        e.preventDefault()
        if (calc.state.display.trim() === "21") {
          calc.enterBlackjackMode()
        } else {
          calc.evaluate()
        }
      } else if (key === "Backspace") {
        e.preventDefault()
        calc.backspace()
      } else if (key === "Escape" || key === "Delete") {
        e.preventDefault()
        calc.clearAll()
      } else if (key === "(" || key === ")") {
        e.preventDefault()
        calc.inputParenthesis(key)
      } else if (key === "%") {
        e.preventDefault()
        calc.percentage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [calc])

  useEffect(() => {
    if (calc.mode !== "blackjack") return
    if (!calc.blackjack.botEnabled || !calc.blackjack.botAutoPlay) return

    const interactionDelayMs = 1000 + Math.floor(Math.random() * 2001)

    const timer = window.setTimeout(() => {
      if (calc.blackjack.roundActive) {
        if (!calc.blackjack.botInProgress) {
          void calc.blackjackBotStep()
        }
        return
      }

      if (calc.blackjack.balance > 0) {
        calc.startBlackjackRound()
      } else {
        calc.stopBlackjackBot()
      }
    }, interactionDelayMs)

    return () => window.clearTimeout(timer)
  }, [calc])

  useEffect(() => {
    const notice = calc.blackjack.botActivationNotice
    if (!notice) return

    toast({
      variant: "destructive",
      title: "Sigeon Bot",
      description: notice,
      duration: 4500,
      className: "sm:max-w-[460px] min-h-[110px] p-6 text-base border-2 border-red-300 shadow-2xl",
    })

    calc.dismissBlackjackBotNotice()
  }, [calc])

  useEffect(() => {
    const notice = calc.blackjack.botRoundNotice
    if (!notice) return

    const isLoss = notice.includes("Lost")
    toast({
      variant: isLoss ? "destructive" : "default",
      title: "Sigeon Bot",
      description: notice,
      duration: 2600,
      className: isLoss
        ? "sm:max-w-[420px] min-h-[86px] p-5 text-base border-2 border-red-300 shadow-2xl"
        : "sm:max-w-[420px] min-h-[86px] p-5 text-base border shadow-xl !bg-green-500 !text-white !border-green-300",
    })

    calc.dismissBlackjackRoundNotice()
  }, [calc])

  const thm = theme

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 transition-colors duration-500"
      style={{ background: isDark ? thm.pageBgDark : thm.pageBg }}
    >
      {/* Calculator body */}
      <div
        className="w-full max-w-[380px] h-[740px] p-5 relative transition-all duration-500 flex flex-col"
        style={{
          background: isDark ? thm.body.bgDark : thm.body.bg,
          boxShadow: thm.body.shadow,
          borderRadius: thm.body.borderRadius,
          border: thm.body.border || "none",
          fontFamily: thm.fontFamily || undefined,
        }}
        role="application"
        aria-label={t.ariaCalc}
      >
        {/* Settings gear button */}
        <div className="flex justify-end mb-4 px-1">
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            className="p-1 rounded-md transition-all hover:opacity-80 cursor-pointer"
            aria-label={t.ariaSettings}
            style={{ color: thm.branding.modelColor }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Solar panel (conditionally shown) */}
        {thm.solar.show && (
          <div className="flex gap-[2px] mb-4 mx-auto w-[60%] justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-[6px] flex-1 rounded-[1px] transition-all duration-500"
                style={{
                  background: thm.solar.cellBg,
                  boxShadow: thm.solar.cellHighlight,
                }}
              />
            ))}
          </div>
        )}

        {/* Mode toggle */}
        {calc.mode !== "blackjack" && (
          <div
            className="flex mb-4 rounded-lg overflow-hidden transition-colors duration-500"
            style={{ background: thm.modeToggle.bg }}
          >
            <button
              type="button"
              onClick={calc.toggleMode}
              className="flex-1 py-2 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                background: calc.mode === "standard" ? thm.modeToggle.activeBg : "transparent",
                color: calc.mode === "standard" ? thm.modeToggle.activeText : thm.modeToggle.inactiveText,
                boxShadow: calc.mode === "standard" ? `inset 0 -2px 0 ${thm.modeToggle.indicatorColor}` : "none",
              }}
              aria-pressed={calc.mode === "standard"}
            >
              {t.standard}
            </button>
            <button
              type="button"
              onClick={calc.toggleMode}
              className="flex-1 py-2 text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                background: calc.mode === "quadratic" ? thm.modeToggle.activeBg : "transparent",
                color: calc.mode === "quadratic" ? thm.modeToggle.activeText : thm.modeToggle.inactiveText,
                boxShadow: calc.mode === "quadratic" ? `inset 0 -2px 0 ${thm.modeToggle.indicatorColor}` : "none",
              }}
              aria-pressed={calc.mode === "quadratic"}
            >
              {t.quadratic}
            </button>
          </div>
        )}

        <div className="flex-1 min-h-0">
          {calc.mode === "standard" ? (
            <StandardMode calc={calc} />
          ) : calc.mode === "quadratic" ? (
            <QuadraticPanel
              a={calc.quadratic.a}
              b={calc.quadratic.b}
              c={calc.quadratic.c}
              activeField={calc.quadratic.activeField}
              result={calc.quadratic.result}
              onUpdateField={calc.updateQuadraticField}
              onSetActiveField={calc.setActiveQuadraticField}
              onSolve={calc.solveQuadratic}
              onClear={calc.clearQuadratic}
            />
          ) : (
            <BlackjackPanel
              state={calc.blackjack}
              onBetChange={calc.setBlackjackBetInput}
              onDeal={calc.startBlackjackRound}
              onStopBot={calc.stopBlackjackBot}
              onHit={calc.blackjackHit}
              onStand={calc.blackjackStand}
              onDouble={calc.blackjackDouble}
              onExit={calc.exitBlackjackMode}
            />
          )}
        </div>

      </div>

      {/* Settings panel overlay */}
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}

function StandardMode({ calc }: { calc: ReturnType<typeof useCalculator> }) {
  const { t } = useTheme()
  const handleEquals = () => {
    if (calc.state.display.trim() === "21") {
      calc.enterBlackjackMode()
      return
    }
    calc.evaluate()
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Display */}
      <CalculatorDisplay
        value={calc.state.display}
        expression={calc.state.expression}
        memory={calc.state.memory}
        hasError={calc.state.hasError}
      />

      {/* Memory row */}
      <div className="grid grid-cols-5 gap-1.5">
        <CalculatorButton variant="memory" onClick={calc.memoryClear} ariaLabel={t.btnMC}>
          {t.btnMC}
        </CalculatorButton>
        <CalculatorButton variant="memory" onClick={calc.memoryRecall} ariaLabel={t.btnMR}>
          {t.btnMR}
        </CalculatorButton>
        <CalculatorButton variant="memory" onClick={calc.memoryAdd} ariaLabel={t.btnMPlus}>
          {t.btnMPlus}
        </CalculatorButton>
        <CalculatorButton variant="memory" onClick={calc.memoryStore} ariaLabel={t.btnMS}>
          {t.btnMS}
        </CalculatorButton>
        <CalculatorButton variant="memory" onClick={calc.percentage} ariaLabel={t.fnPercent}>
          %
        </CalculatorButton>
      </div>

      {/* Function row */}
      <div className="grid grid-cols-5 gap-1.5">
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("sin")} ariaLabel={t.fnSin}>
          sin
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("cos")} ariaLabel={t.fnCos}>
          cos
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("tan")} ariaLabel={t.fnTan}>
          tan
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("log")} ariaLabel={t.fnLog}>
          log
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("ln")} ariaLabel={t.fnLn}>
          ln
        </CalculatorButton>
      </div>

      {/* Secondary function row */}
      <div className="grid grid-cols-5 gap-1.5">
        <CalculatorButton variant="function" onClick={calc.squareRoot} ariaLabel={t.fnSqrt}>
          {"\u221A"}
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={calc.power} ariaLabel={t.fnPower}>
          {"x\u02B8"}
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputParenthesis("(")} ariaLabel={t.fnOpenParen}>
          (
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputParenthesis(")")} ariaLabel={t.fnCloseParen}>
          )
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => calc.inputFunction("abs")} ariaLabel={t.fnAbs}>
          |x|
        </CalculatorButton>
      </div>

      {/* Main grid: numbers + operators */}
      <div className="grid grid-cols-4 gap-2">
        {/* Row 1 */}
        <CalculatorButton variant="clear" onClick={calc.clearAll} ariaLabel={t.btnClear}>
          {t.btnClear}
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={calc.clearDisplay} ariaLabel={t.btnClearEntry}>
          {t.btnClearEntry}
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={calc.backspace} ariaLabel={t.btnBackspace}>
          {t.btnBackspace}
        </CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => calc.inputOperator("\u00F7")} ariaLabel={t.fnDivide}>
          {"\u00F7"}
        </CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => calc.inputDigit("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("9")}>9</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => calc.inputOperator("\u00D7")} ariaLabel={t.fnMultiply}>
          {"\u00D7"}
        </CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => calc.inputDigit("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("6")}>6</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => calc.inputOperator("\u2212")} ariaLabel={t.fnSubtract}>
          {"\u2212"}
        </CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={() => calc.inputDigit("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("3")}>3</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => calc.inputOperator("+")} ariaLabel={t.fnAdd}>
          +
        </CalculatorButton>

        {/* Row 5 */}
        <CalculatorButton onClick={calc.toggleSign} ariaLabel={t.fnToggleSign}>
          +/{"\u2212"}
        </CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit("0")}>0</CalculatorButton>
        <CalculatorButton onClick={() => calc.inputDigit(".")}>.</CalculatorButton>
        <CalculatorButton variant="equals" onClick={handleEquals} ariaLabel={t.btnEquals}>
          {t.btnEquals}
        </CalculatorButton>
      </div>
    </div>
  )
}
