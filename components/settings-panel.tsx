"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/lib/theme-context"
import { themes, themeIds, type ThemeId, type CalcTheme } from "@/lib/calculator-themes"
import { localeIds, translations, type LocaleId } from "@/lib/translations"

// ============================================================
// Country flag map -- using emoji flags for each locale
// ============================================================
const localeFlags: Record<LocaleId, string> = {
  en: "\u{1F1FA}\u{1F1F8}",  // US
  es: "\u{1F1EA}\u{1F1F8}",  // Spain
  fr: "\u{1F1EB}\u{1F1F7}",  // France
  de: "\u{1F1E9}\u{1F1EA}",  // Germany
  pt: "\u{1F1E7}\u{1F1F7}",  // Brazil
  it: "\u{1F1EE}\u{1F1F9}",  // Italy
  nl: "\u{1F1F3}\u{1F1F1}",  // Netherlands
  ru: "\u{1F1F7}\u{1F1FA}",  // Russia
  zh: "\u{1F1E8}\u{1F1F3}",  // China
  ja: "\u{1F1EF}\u{1F1F5}",  // Japan
  ko: "\u{1F1F0}\u{1F1F7}",  // South Korea
  ar: "\u{1F1F8}\u{1F1E6}",  // Saudi Arabia
  hi: "\u{1F1EE}\u{1F1F3}",  // India
  tr: "\u{1F1F9}\u{1F1F7}",  // Turkey
  pl: "\u{1F1F5}\u{1F1F1}",  // Poland
  vi: "\u{1F1FB}\u{1F1F3}",  // Vietnam
  th: "\u{1F1F9}\u{1F1ED}",  // Thailand
  sw: "\u{1F1F0}\u{1F1EA}",  // Kenya
  hu: "\u{1F1ED}\u{1F1FA}",  // Hungary
  uk: "\u{1F1FA}\u{1F1E6}",  // Ukraine
}

interface SettingsPanelProps {
  open: boolean
  onClose: () => void
}

export function SettingsPanel({ open, onClose }: SettingsPanelProps) {
  const {
    themeId,
    setThemeId,
    t,
    localeId,
    setLocaleId,
    customTheme,
    updateCustomTheme,
    resetCustomTheme,
  } = useTheme()
  const panelRef = useRef<HTMLDivElement>(null)
  const customEditorRef = useRef<HTMLDivElement>(null)
  const previousThemeRef = useRef<ThemeId>(themeId)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onClose])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    const timer = setTimeout(() => window.addEventListener("mousedown", handler), 10)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousedown", handler)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      previousThemeRef.current = themeId
      return
    }

    const switchedToCustom = previousThemeRef.current !== "custom" && themeId === "custom"
    previousThemeRef.current = themeId

    if (!switchedToCustom) return

    requestAnimationFrame(() => {
      customEditorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [themeId, open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-in fade-in duration-200"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-[400px] max-h-[85vh] overflow-y-auto rounded-2xl p-6 animate-in zoom-in-95 fade-in duration-200 scrollbar-hide"
        style={{
          background: "#1a1a2e",
          boxShadow: "0 25px 60px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        role="dialog"
        aria-label={t.ariaSettings}
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-lg font-semibold tracking-wide"
            style={{ color: "#e0e0e8" }}
          >
            {t.settings}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg transition-colors hover:opacity-70 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#8888a0",
            }}
            aria-label={t.ariaCloseSettings}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Language selector */}
        <div className="mb-6">
          <label
            className="text-xs font-semibold uppercase tracking-wider mb-3 block"
            style={{ color: "#8888a0" }}
          >
            {t.language}
          </label>
          <LanguageSelector
            localeId={localeId}
            setLocaleId={setLocaleId}
          />
        </div>

        {/* Theme picker */}
        <div>
          <label
            className="text-xs font-semibold uppercase tracking-wider mb-3 block"
            style={{ color: "#8888a0" }}
          >
            {t.calculatorStyle}
          </label>
          <div className="flex flex-col gap-2.5">
            {themeIds.map((id) => {
              const thm = id === "custom" ? customTheme : themes[id]
              const isActive = themeId === id
              return (
                <ThemeCard
                  key={id}
                  id={id}
                  theme={thm}
                  isActive={isActive}
                  onSelect={setThemeId}
                />
              )
            })}
          </div>
        </div>

        {themeId === "custom" && (
          <div ref={customEditorRef}>
            <CustomThemeEditor
              isActive={themeId === "custom"}
              theme={customTheme}
              onActivateCustom={() => setThemeId("custom")}
              onUpdateTheme={updateCustomTheme}
              onReset={resetCustomTheme}
            />
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// Language Selector Dropdown with Flags
// ============================================================
function LanguageSelector({
  localeId,
  setLocaleId,
}: {
  localeId: LocaleId
  setLocaleId: (id: LocaleId) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const currentLocale = translations[localeId]
  const currentFlag = localeFlags[localeId]

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    window.addEventListener("mousedown", handler)
    return () => window.removeEventListener("mousedown", handler)
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#e0e0e8",
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg leading-none" role="img" aria-label={currentLocale.langNameEn}>
            {currentFlag}
          </span>
          <span>{currentLocale.langName}</span>
          <span style={{ color: "#5a5a70" }} className="text-xs">
            ({currentLocale.langNameEn})
          </span>
        </div>
        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform"
          style={{
            color: "#5a5a70",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute z-50 top-full left-0 right-0 mt-1 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
          style={{
            background: "#1e1e30",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
            maxHeight: "280px",
            overflowY: "auto",
          }}
          role="listbox"
          aria-activedescendant={`lang-${localeId}`}
        >
          {localeIds.map((id) => {
            const loc = translations[id]
            const flag = localeFlags[id]
            const isActive = localeId === id
            return (
              <button
                key={id}
                id={`lang-${id}`}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLocaleId(id)
                  setIsOpen(false)
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors cursor-pointer"
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                  color: "#e0e0e8",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = isActive
                    ? "rgba(255,255,255,0.08)"
                    : "transparent"
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base leading-none" role="img" aria-label={loc.langNameEn}>
                    {flag}
                  </span>
                  <span className="text-sm font-medium" dir={loc.dir}>
                    {loc.langName}
                  </span>
                  <span className="text-xs" style={{ color: "#5a5a70" }}>
                    {loc.langNameEn}
                  </span>
                </div>
                {isActive && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#4a90d9", flexShrink: 0 }}>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ============================================================
// Theme Card
// ============================================================
function ThemeCard({
  id,
  theme,
  isActive,
  onSelect,
}: {
  id: ThemeId
  theme: (typeof themes)[ThemeId]
  isActive: boolean
  onSelect: (id: ThemeId) => void
}) {
  const { t } = useTheme()
  const themeCustomName = t.themeCustomName || "Custom"
  const themeCustomDesc = t.themeCustomDesc || "Your own personalized theme"

  const nameMap: Record<ThemeId, string> = {
    classic: t.themeClassicName,
    school: t.themeSchoolName,
    retro: t.themeRetroName,
    modern: t.themeModernName,
    neon: t.themeNeonName,
    custom: themeCustomName,
  }
  const descMap: Record<ThemeId, string> = {
    classic: t.themeClassicDesc,
    school: t.themeSchoolDesc,
    retro: t.themeRetroDesc,
    modern: t.themeModernDesc,
    neon: t.themeNeonDesc,
    custom: themeCustomDesc,
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className="flex items-center gap-4 p-3 rounded-xl text-left transition-all cursor-pointer"
      style={{
        background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
        border: `2px solid ${
          isActive
            ? theme.preview.accentColor
            : "rgba(255,255,255,0.04)"
        }`,
      }}
      aria-pressed={isActive}
    >
      {/* Mini calculator preview */}
      <div
        className="flex-shrink-0 w-14 h-18 rounded-lg p-1.5 flex flex-col gap-1"
        style={{
          background: theme.preview.bodyBg,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="rounded-sm h-5 flex items-end justify-end px-1"
          style={{ background: theme.preview.displayBg }}
        >
          <span
            className="text-[7px] font-mono font-bold"
            style={{ color: theme.display.textColor }}
          >
            42
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[2px] flex-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[2px]"
              style={{
                background:
                  i % 3 === 2
                    ? theme.preview.accentColor
                    : theme.buttons.number.bg,
              }}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-semibold"
            style={{ color: "#e0e0e8" }}
          >
            {nameMap[id]}
          </span>
          {isActive && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{
                background: `${theme.preview.accentColor}20`,
                color: theme.preview.accentColor,
              }}
            >
              {t.active}
            </span>
          )}
        </div>
        <span
          className="text-xs mt-0.5 block"
          style={{ color: "#6a6a80" }}
        >
          {descMap[id]}
        </span>
      </div>
    </button>
  )
}

const fontOptions = ["JetBrains Mono", "Inter", "Arial", "Courier New", "Georgia", "Trebuchet MS", "system-ui"]

function CustomThemeEditor({
  isActive,
  theme,
  onActivateCustom,
  onUpdateTheme,
  onReset,
}: {
  isActive: boolean
  theme: CalcTheme
  onActivateCustom: () => void
  onUpdateTheme: (updater: (prev: CalcTheme) => CalcTheme) => void
  onReset: () => void
}) {
  const { t } = useTheme()
  const customEditorLabel = t.customEditor || "Theme Editor"
  const resetDefaultsLabel = t.customResetDefaults || "Reset to Defaults"
  const numberBtnsLabel = t.customNumberBtns || "Number Buttons"
  const operatorBtnsLabel = t.customOperatorBtns || "Operator Buttons"
  const scientificBtnsLabel = t.customScientificBtns || "Scientific Buttons"
  const equalBtnLabel = t.customEqualBtn || "Equals Button"
  const clearBtnLabel = t.customClearBtn || "Clear Button"
  const displayBgLabel = t.customDisplayBg || "Display Background"
  const displayTextLabel = t.customDisplayText || "Display Text"
  const fontLabel = t.customFont || "Font"

  return (
    <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-between mb-4">
        <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#8888a0" }}>
          {customEditorLabel}
        </label>
        <button
          type="button"
          onClick={() => {
            onReset()
            onActivateCustom()
          }}
          className="text-[11px] px-2 py-1 rounded-md transition-all hover:opacity-80 cursor-pointer"
          style={{ background: "rgba(255,255,255,0.08)", color: "#b0b0c8" }}
        >
          {resetDefaultsLabel}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <ColorField
          label={numberBtnsLabel}
          value={theme.buttons.number.bg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                number: { ...prev.buttons.number, bg: value, bgActive: value },
              },
            }))
          }}
        />
        <ColorField
          label={`${numberBtnsLabel} (${displayTextLabel})`}
          value={theme.buttons.number.text}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                number: { ...prev.buttons.number, text: value },
              },
            }))
          }}
        />

        <ColorField
          label={operatorBtnsLabel}
          value={theme.buttons.operator.bg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              preview: { ...prev.preview, accentColor: value },
              buttons: {
                ...prev.buttons,
                operator: { ...prev.buttons.operator, bg: value, bgActive: value },
              },
              modeToggle: {
                ...prev.modeToggle,
                indicatorColor: value,
              },
            }))
          }}
        />
        <ColorField
          label={`${operatorBtnsLabel} (${displayTextLabel})`}
          value={theme.buttons.operator.text}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                operator: { ...prev.buttons.operator, text: value },
              },
            }))
          }}
        />

        <ColorField
          label={scientificBtnsLabel}
          value={theme.buttons.function.bg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                function: { ...prev.buttons.function, bg: value, bgActive: value },
              },
            }))
          }}
        />
        <ColorField
          label={`${scientificBtnsLabel} (${displayTextLabel})`}
          value={theme.buttons.function.text}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                function: { ...prev.buttons.function, text: value },
              },
            }))
          }}
        />

        <ColorField
          label={equalBtnLabel}
          value={theme.buttons.equals.bg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                equals: { ...prev.buttons.equals, bg: value, bgActive: value },
              },
            }))
          }}
        />
        <ColorField
          label={clearBtnLabel}
          value={theme.buttons.clear.bg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              buttons: {
                ...prev.buttons,
                clear: { ...prev.buttons.clear, bg: value, bgActive: value },
              },
            }))
          }}
        />

        <ColorField
          label={displayBgLabel}
          value={theme.display.screenBg}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              preview: { ...prev.preview, displayBg: value },
              display: { ...prev.display, screenBg: value },
            }))
          }}
        />
        <ColorField
          label={displayTextLabel}
          value={theme.display.textColor}
          onChange={(value) => {
            onActivateCustom()
            onUpdateTheme((prev) => ({
              ...prev,
              display: { ...prev.display, textColor: value },
            }))
          }}
        />
      </div>

      <div className="mt-3 space-y-3">
        <label className="flex flex-col gap-1 text-xs font-medium" style={{ color: "#d0d0e0" }}>
          {fontLabel}
          <select
            value={theme.fontFamily ?? "JetBrains Mono"}
            onChange={(e) => {
              onActivateCustom()
              const value = e.currentTarget.value
              onUpdateTheme((prev) => ({ ...prev, fontFamily: value }))
            }}
            className="rounded-lg px-3 py-2 text-sm"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e0e0e8" }}
          >
            {fontOptions.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
      </div>

      {!isActive && (
        <button
          type="button"
          onClick={onActivateCustom}
          className="mt-3 w-full text-xs font-semibold tracking-wider px-3 py-2 rounded-lg transition-all hover:opacity-90 cursor-pointer"
          style={{ background: "rgba(88,166,255,0.2)", color: "#9bc2ff", border: "1px solid rgba(88,166,255,0.35)" }}
        >
          {t.themeCustomName}
        </button>
      )}
    </div>
  )
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  const safeValue = toHexColor(value)

  return (
    <label className="flex flex-col gap-1 text-[11px] font-medium" style={{ color: "#b6b6cc" }}>
      <span>{label}</span>
      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <input
          type="color"
          value={safeValue}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="h-7 w-9 cursor-pointer bg-transparent"
        />
        <span className="text-[11px] uppercase tracking-wide" style={{ color: "#d4d4ea" }}>
          {safeValue}
        </span>
      </div>
    </label>
  )
}

function toHexColor(value: string): string {
  const directHex = value.trim().match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  if (directHex) {
    const hex = directHex[0]
    if (hex.length === 4) {
      return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`.toLowerCase()
    }
    return hex.toLowerCase()
  }

  const rgbMatch = value.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i)
  if (rgbMatch) {
    const r = Number(rgbMatch[1]).toString(16).padStart(2, "0")
    const g = Number(rgbMatch[2]).toString(16).padStart(2, "0")
    const b = Number(rgbMatch[3]).toString(16).padStart(2, "0")
    return `#${r}${g}${b}`
  }

  return "#58a6ff"
}
