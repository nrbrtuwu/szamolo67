"use client"

import { CalculatorButton } from "./calculator-button"
import { useTheme } from "@/lib/theme-context"

interface QuadraticPanelProps {
  a: string
  b: string
  c: string
  activeField: "a" | "b" | "c"
  result: string | null
  onUpdateField: (field: "a" | "b" | "c", value: string) => void
  onSetActiveField: (field: "a" | "b" | "c") => void
  onSolve: () => void
  onClear: () => void
}

export function QuadraticPanel({
  a,
  b,
  c,
  activeField,
  result,
  onUpdateField,
  onSetActiveField,
  onSolve,
  onClear,
}: QuadraticPanelProps) {
  const { theme, t } = useTheme()
  const d = theme.display

  const handleDigit = (digit: string) => {
    const currentValue = activeField === "a" ? a : activeField === "b" ? b : c
    if (digit === "." && currentValue.includes(".")) return
    if (digit === "-" && currentValue.includes("-")) return
    const newValue = currentValue === "" && digit !== "-" && digit !== "." ? digit : currentValue + digit
    onUpdateField(activeField, newValue)
  }

  const handleBackspace = () => {
    const currentValue = activeField === "a" ? a : activeField === "b" ? b : c
    onUpdateField(activeField, currentValue.slice(0, -1))
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Equation display */}
      <div
        className="rounded-lg px-4 py-3"
        style={{ background: d.bezelBg, boxShadow: d.bezelShadow }}
      >
        <div
          className="rounded-md px-4 py-4 relative overflow-hidden"
          style={{ background: d.screenBg, boxShadow: d.screenShadow }}
        >
          {/* Scanlines */}
          {d.scanlines && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
              }}
            />
          )}

          {/* Label */}
          <div className="text-center mb-3 relative z-10">
            <span className="font-mono text-xs font-bold tracking-wider" style={{ color: d.expressionColor }}>
              {t.quadLabel}
            </span>
          </div>

          {/* Coefficient fields */}
          <div className="flex items-center justify-center gap-2 mb-3 relative z-10">
            {(["a", "b", "c"] as const).map((field) => (
              <button
                key={field}
                type="button"
                onClick={() => onSetActiveField(field)}
                className={`flex flex-col items-center px-3 py-2 rounded-md transition-all cursor-pointer ${
                  activeField === field ? "ring-2" : ""
                }`}
                style={{
                  background: activeField === field ? `${d.expressionColor}22` : "transparent",
                  ringColor: activeField === field ? d.expressionColor : "transparent",
                }}
                aria-label={`${t.inputField} ${field}`}
              >
                <span className="font-mono text-[10px] font-bold" style={{ color: d.expressionColor }}>
                  {field}
                </span>
                <span
                  className="font-mono text-lg font-bold min-w-[40px] text-center"
                  style={{ color: d.textColor }}
                >
                  {field === "a" ? a || "_" : field === "b" ? b || "_" : c || "_"}
                </span>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="text-center font-mono text-sm relative z-10" style={{ color: d.memoryColor }}>
            {`${a || "a"}x\u00B2 ${b ? (parseFloat(b) >= 0 ? `+ ${b}` : `\u2212 ${Math.abs(parseFloat(b))}`) : "+ b"}x ${c ? (parseFloat(c) >= 0 ? `+ ${c}` : `\u2212 ${Math.abs(parseFloat(c))}`) : "+ c"} = 0`}
          </div>

          {/* Result */}
          {result && (
            <div
              className="mt-3 pt-3 font-mono text-sm whitespace-pre-line relative z-10"
              style={{
                color: result.startsWith("Error") || result.startsWith(t.error) ? d.errorColor : d.textColor,
                borderTop: `1px solid ${d.expressionColor}33`,
              }}
            >
              {result}
            </div>
          )}
        </div>
      </div>

      {/* Number pad */}
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "DEL"].map((key) => (
          <CalculatorButton
            key={key}
            variant={key === "DEL" ? "function" : "number"}
            onClick={() => (key === "DEL" ? handleBackspace() : handleDigit(key))}
            ariaLabel={key === "DEL" ? t.btnBackspace : key}
          >
            {key === "DEL" ? "\u232B" : key}
          </CalculatorButton>
        ))}
        {["4", "5", "6", "a"].map((key) => (
          <CalculatorButton
            key={key}
            variant={key === "a" ? "function" : "number"}
            onClick={() => (key === "a" ? onSetActiveField("a") : handleDigit(key))}
          >
            {key}
          </CalculatorButton>
        ))}
        {["1", "2", "3", "b"].map((key) => (
          <CalculatorButton
            key={key}
            variant={key === "b" ? "function" : "number"}
            onClick={() => (key === "b" ? onSetActiveField("b") : handleDigit(key))}
          >
            {key}
          </CalculatorButton>
        ))}
        <CalculatorButton variant="number" onClick={() => handleDigit("0")}>
          0
        </CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleDigit(".")}>
          .
        </CalculatorButton>
        <CalculatorButton variant="number" onClick={() => handleDigit("-")}>
          +/{"\u2212"}
        </CalculatorButton>
        <CalculatorButton variant="function" onClick={() => onSetActiveField("c")}>
          c
        </CalculatorButton>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-2">
        <CalculatorButton variant="clear" onClick={onClear}>
          {t.btnClearQuad}
        </CalculatorButton>
        <CalculatorButton variant="equals" onClick={onSolve}>
          {t.btnSolve}
        </CalculatorButton>
      </div>
    </div>
  )
}
