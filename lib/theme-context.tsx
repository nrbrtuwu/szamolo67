"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { defaultCustomTheme, themes, type ThemeId, type CalcTheme } from "./calculator-themes"
import { translations, type LocaleId, type TranslationSet } from "./translations"

const STORAGE_KEYS = {
  themeId: "calc.themeId",
  localeId: "calc.localeId",
  customTheme: "calc.customTheme",
} as const

function readStoredThemeId(): ThemeId {
  if (typeof window === "undefined") return "classic"
  const stored = window.localStorage.getItem(STORAGE_KEYS.themeId)
  if (stored && stored in themes) return stored as ThemeId
  return "classic"
}

function readStoredLocaleId(): LocaleId {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(STORAGE_KEYS.localeId)
  if (stored && stored in translations) return stored as LocaleId
  return "en"
}

function readStoredCustomTheme(): CalcTheme {
  if (typeof window === "undefined") return defaultCustomTheme
  const stored = window.localStorage.getItem(STORAGE_KEYS.customTheme)
  if (!stored) return defaultCustomTheme

  try {
    const parsed = JSON.parse(stored) as CalcTheme
    return {
      ...defaultCustomTheme,
      ...parsed,
      id: "custom",
      preview: {
        ...defaultCustomTheme.preview,
        ...parsed.preview,
      },
      body: {
        ...defaultCustomTheme.body,
        ...parsed.body,
      },
      branding: {
        ...defaultCustomTheme.branding,
        ...parsed.branding,
      },
      solar: {
        ...defaultCustomTheme.solar,
        ...parsed.solar,
      },
      modeToggle: {
        ...defaultCustomTheme.modeToggle,
        ...parsed.modeToggle,
      },
      display: {
        ...defaultCustomTheme.display,
        ...parsed.display,
      },
      buttons: {
        number: {
          ...defaultCustomTheme.buttons.number,
          ...parsed.buttons?.number,
        },
        operator: {
          ...defaultCustomTheme.buttons.operator,
          ...parsed.buttons?.operator,
        },
        function: {
          ...defaultCustomTheme.buttons.function,
          ...parsed.buttons?.function,
        },
        equals: {
          ...defaultCustomTheme.buttons.equals,
          ...parsed.buttons?.equals,
        },
        clear: {
          ...defaultCustomTheme.buttons.clear,
          ...parsed.buttons?.clear,
        },
        memory: {
          ...defaultCustomTheme.buttons.memory,
          ...parsed.buttons?.memory,
        },
      },
      footer: {
        ...defaultCustomTheme.footer,
        ...parsed.footer,
        text: defaultCustomTheme.footer.text,
      },
    }
  } catch {
    return defaultCustomTheme
  }
}

interface ThemeContextValue {
  theme: CalcTheme
  themeId: ThemeId
  isDark: true
  setThemeId: (id: ThemeId) => void
  customTheme: CalcTheme
  updateCustomTheme: (updater: (prev: CalcTheme) => CalcTheme) => void
  resetCustomTheme: () => void
  locale: TranslationSet
  localeId: LocaleId
  setLocaleId: (id: LocaleId) => void
  t: TranslationSet
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>("classic")
  const [localeId, setLocaleId] = useState<LocaleId>("en")
  const [customTheme, setCustomTheme] = useState<CalcTheme>(defaultCustomTheme)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setThemeId(readStoredThemeId())
    setLocaleId(readStoredLocaleId())
    setCustomTheme(readStoredCustomTheme())
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (!initialized) return
    window.localStorage.setItem(STORAGE_KEYS.themeId, themeId)
  }, [themeId, initialized])

  useEffect(() => {
    if (!initialized) return
    window.localStorage.setItem(STORAGE_KEYS.localeId, localeId)
  }, [localeId, initialized])

  useEffect(() => {
    if (!initialized) return
    window.localStorage.setItem(STORAGE_KEYS.customTheme, JSON.stringify(customTheme))
  }, [customTheme, initialized])

  const theme = themeId === "custom" ? customTheme : themes[themeId]
  const locale = translations[localeId]

  const updateCustomTheme = (updater: (prev: CalcTheme) => CalcTheme) => {
    setCustomTheme((prev) => ({ ...updater(prev), id: "custom" }))
  }

  const resetCustomTheme = () => {
    setCustomTheme(defaultCustomTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeId,
        isDark: true,
        setThemeId,
        customTheme,
        updateCustomTheme,
        resetCustomTheme,
        locale,
        localeId,
        setLocaleId,
        t: locale,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
