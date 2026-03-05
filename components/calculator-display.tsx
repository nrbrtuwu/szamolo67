"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/lib/theme-context"
import { formatNumberLocale } from "@/lib/translations"

interface CalculatorDisplayProps {
  value: string
  expression: string
  memory: number
  hasError: boolean
}

export function CalculatorDisplay({ value, expression, memory, hasError }: CalculatorDisplayProps) {
  const displayRef = useRef<HTMLDivElement>(null)
  const { theme, t } = useTheme()
  const d = theme.display

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth
    }
  }, [value])

  // Format number display value with locale-specific formatting
  const displayValue = hasError ? value : (() => {
    // Only format if the value looks like a final numeric result (no operators, functions etc.)
    const isNumeric = /^-?\d+\.?\d*$/.test(value) || /^-?\d+\.?\d*e[+-]?\d+$/i.test(value)
    if (isNumeric && !value.endsWith(".")) {
      return formatNumberLocale(value, t)
    }
    return value
  })()

  const fontSize =
    displayValue.length > 16
      ? "text-xl"
      : displayValue.length > 12
        ? "text-2xl"
        : displayValue.length > 8
          ? "text-3xl"
          : "text-4xl"

  return (
    <div
      className="relative rounded-lg overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label={t.ariaDisplay}
    >
      {/* Bezel */}
      <div
        className="p-1 rounded-lg"
        style={{
          background: d.bezelBg,
          boxShadow: d.bezelShadow,
        }}
      >
        {/* Screen */}
        <div
          className="rounded-md px-4 py-3 min-h-[110px] flex flex-col justify-end relative overflow-hidden"
          style={{
            background: d.screenBg,
            boxShadow: d.screenShadow,
          }}
        >
          {/* Optional scanlines overlay */}
          {d.scanlines && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
              }}
            />
          )}

          {/* Status indicators */}
          <div className="flex items-center justify-between mb-2 relative z-10">
            <div className="flex items-center gap-3">
              {memory !== 0 && (
                <span
                  className="text-[10px] font-mono font-bold tracking-wider"
                  style={{ color: d.memoryColor }}
                >
                  {t.memory}
                </span>
              )}
            </div>
            {expression && !hasError && (
              <div
                className="text-[11px] font-mono truncate max-w-[200px] text-right"
                style={{ color: d.expressionColor }}
                aria-label={`${expression}`}
              >
                {expression}
              </div>
            )}
          </div>

          {/* Main value */}
          <div
            ref={displayRef}
            className={`font-mono font-bold text-right overflow-x-auto whitespace-nowrap scrollbar-hide relative z-10 ${fontSize} ${hasError ? "animate-pulse" : ""}`}
            style={{
              color: hasError ? d.errorColor : d.textColor,
              textShadow: d.textShadow,
              letterSpacing: "-0.02em",
            }}
          >
            {displayValue}
          </div>
        </div>
      </div>
    </div>
  )
}
