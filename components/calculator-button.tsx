"use client"

import { type ReactNode, useCallback, useRef, useState } from "react"
import { useTheme } from "@/lib/theme-context"
import type { ButtonStyle } from "@/lib/calculator-themes"

export type ButtonVariant = "number" | "operator" | "function" | "equals" | "clear" | "memory"

interface CalculatorButtonProps {
  children: ReactNode
  onClick: () => void
  variant?: ButtonVariant
  className?: string
  ariaLabel?: string
  span?: 2
}

export function CalculatorButton({
  children,
  onClick,
  variant = "number",
  className = "",
  ariaLabel,
  span,
}: CalculatorButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
  const { theme } = useTheme()

  const style: ButtonStyle = theme.buttons[variant]

  const handlePress = useCallback(() => {
    setIsPressed(true)
    onClick()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsPressed(false), 120)
  }, [onClick])

  return (
    <button
      type="button"
      onPointerDown={handlePress}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      className={`
        relative select-none cursor-pointer
        font-sans font-semibold
        transition-all duration-75 ease-out
        active:scale-[0.97]
        ${variant === "memory" ? "text-xs py-2" : "text-base py-3"}
        ${span === 2 ? "col-span-2" : ""}
        ${className}
      `}
      style={{
        background: isPressed ? style.bgActive : style.bg,
        color: style.text,
        boxShadow: isPressed
          ? `0 1px 0 rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.2)`
          : style.shadow,
        border: style.border,
        borderRadius: style.radius || "0.5rem",
        transform: isPressed ? "translateY(2px)" : "translateY(0)",
      }}
    >
      {children}
    </button>
  )
}
