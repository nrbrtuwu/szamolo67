// ============================================================
// Calculator Theme System
// Each theme defines every visual property needed to render
// the calculator body, display, and all button variants.
// Add new themes by extending the `themes` record below.
// ============================================================

export type ThemeId = "classic" | "school" | "retro" | "modern" | "neon" | "custom"

export interface ButtonStyle {
  bg: string
  bgActive: string
  text: string
  shadow: string
  border: string
  radius?: string
}

export interface CalcTheme {
  id: ThemeId
  name: string
  description: string
  preview: {
    bodyBg: string
    displayBg: string
    accentColor: string
  }

  // --- Page background ---
  pageBg: string
  pageBgDark: string

  // --- Calculator body ---
  body: {
    bg: string
    bgDark: string
    shadow: string
    borderRadius: string
    border?: string
  }

  // --- Branding strip ---
  branding: {
    dotColor: string
    dotGlow: string
    nameColor: string
    modelColor: string
    brandName: string
    modelName: string
  }

  // --- Solar panel ---
  solar: {
    show: boolean
    cellBg: string
    cellHighlight: string
  }

  // --- Mode toggle ---
  modeToggle: {
    bg: string
    activeBg: string
    activeText: string
    inactiveText: string
    indicatorColor: string
  }

  // --- Display / LCD ---
  display: {
    bezelBg: string
    bezelShadow: string
    screenBg: string
    screenShadow: string
    textColor: string
    textShadow: string
    expressionColor: string
    memoryColor: string
    errorColor: string
    scanlines?: boolean
    pixelGrid?: boolean
  }

  // --- Button variants ---
  buttons: {
    number: ButtonStyle
    operator: ButtonStyle
    function: ButtonStyle
    equals: ButtonStyle
    clear: ButtonStyle
    memory: ButtonStyle
  }

  // --- Footer ---
  footer: {
    color: string
    text: string
  }

  // --- Custom extras (used by custom theme editor) ---
  numberGlow?: boolean
  fontFamily?: string
}

// ============================================================
// THEME: Classic Scientific (dark, Casio-inspired)
// ============================================================
const classicTheme: CalcTheme = {
  id: "classic",
  name: "Classic Scientific",
  description: "Dark Casio fx-inspired scientific calculator",
  preview: { bodyBg: "#32324e", displayBg: "#c8d8b5", accentColor: "#e07a3a" },

  pageBg: "#12121f",
  pageBgDark: "#0a0a15",

  body: {
    bg: "linear-gradient(165deg, #32324e 0%, #2b2b42 30%, #252540 70%, #1e1e34 100%)",
    bgDark: "linear-gradient(165deg, #28283e 0%, #202034 30%, #1a1a30 70%, #141428 100%)",
    shadow: "0 25px 60px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
    borderRadius: "1.5rem",
  },

  branding: {
    dotColor: "#4a90d9",
    dotGlow: "0 0 6px rgba(74,144,217,0.4)",
    nameColor: "#6a6a8e",
    modelColor: "#4a4a68",
    brandName: "CalcPro",
    modelName: "fx-500",
  },

  solar: {
    show: true,
    cellBg: "linear-gradient(180deg, #1a1a40 0%, #252550 50%, #1a1a40 100%)",
    cellHighlight: "inset 0 1px 1px rgba(255,255,255,0.05)",
  },

  modeToggle: {
    bg: "#1a1a30",
    activeBg: "#3a3a5c",
    activeText: "#e8e8f0",
    inactiveText: "#5a5a78",
    indicatorColor: "#e07a3a",
  },

  display: {
    bezelBg: "linear-gradient(145deg, #1a1a2c, #252540)",
    bezelShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 -1px 2px rgba(255,255,255,0.05)",
    screenBg: "linear-gradient(180deg, #b8c9a3 0%, #c8d8b5 40%, #d0dfc0 100%)",
    screenShadow: "inset 0 1px 4px rgba(0,0,0,0.15)",
    textColor: "#1a2a10",
    textShadow: "0 1px 0 rgba(200,220,180,0.5)",
    expressionColor: "#5a7a48",
    memoryColor: "#3a5a28",
    errorColor: "#8a2020",
  },

  buttons: {
    number: {
      bg: "#3d3d5c", bgActive: "#4d4d6c", text: "#e8e8f0",
      shadow: "0 4px 0 #2a2a40, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.06)",
    },
    operator: {
      bg: "#e07a3a", bgActive: "#f08a4a", text: "#ffffff",
      shadow: "0 4px 0 #b05a20, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    function: {
      bg: "#4a4a6a", bgActive: "#5a5a7a", text: "#c0c0d8",
      shadow: "0 4px 0 #36364e, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.05)",
    },
    equals: {
      bg: "#d94040", bgActive: "#e95050", text: "#ffffff",
      shadow: "0 4px 0 #a02828, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    clear: {
      bg: "#d94040", bgActive: "#e95050", text: "#ffffff",
      shadow: "0 4px 0 #a02828, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    memory: {
      bg: "#35355a", bgActive: "#45456a", text: "#9090b0",
      shadow: "0 3px 0 #25253e, 0 5px 6px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.04)",
    },
  },

  footer: { color: "#3a3a58", text: "Scientific Calculator" },
}

// ============================================================
// THEME: School Calculator (light, basic, Casio SL style)
// ============================================================
const schoolTheme: CalcTheme = {
  id: "school",
  name: "School Basic",
  description: "Light beige school calculator with simple buttons",
  preview: { bodyBg: "#e8e0d0", displayBg: "#d4e8c0", accentColor: "#2e7d32" },

  pageBg: "#d5cec0",
  pageBgDark: "#3a3530",

  body: {
    bg: "linear-gradient(175deg, #f0e8d8 0%, #e8e0d0 40%, #ddd6c6 100%)",
    bgDark: "linear-gradient(175deg, #4a4540 0%, #3a3530 40%, #302c28 100%)",
    shadow: "0 20px 50px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.08)",
    borderRadius: "1.25rem",
    border: "1px solid rgba(0,0,0,0.08)",
  },

  branding: {
    dotColor: "#2e7d32",
    dotGlow: "0 0 4px rgba(46,125,50,0.3)",
    nameColor: "#6b6255",
    modelColor: "#9a9080",
    brandName: "CalcPro",
    modelName: "SL-100",
  },

  solar: {
    show: true,
    cellBg: "linear-gradient(180deg, #1a1a30 0%, #282840 50%, #1a1a30 100%)",
    cellHighlight: "inset 0 1px 1px rgba(255,255,255,0.08)",
  },

  modeToggle: {
    bg: "#cfc7b8",
    activeBg: "#b8b0a0",
    activeText: "#3a3428",
    inactiveText: "#8a8070",
    indicatorColor: "#2e7d32",
  },

  display: {
    bezelBg: "linear-gradient(145deg, #b0a898, #c8c0b0)",
    bezelShadow: "inset 0 2px 6px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(255,255,255,0.4)",
    screenBg: "linear-gradient(180deg, #c0daa8 0%, #d0e8b8 40%, #d8f0c4 100%)",
    screenShadow: "inset 0 1px 3px rgba(0,0,0,0.12)",
    textColor: "#1a2a10",
    textShadow: "0 1px 0 rgba(210,240,190,0.5)",
    expressionColor: "#5a8a40",
    memoryColor: "#3a6a20",
    errorColor: "#c02020",
  },

  buttons: {
    number: {
      bg: "#ffffff", bgActive: "#f0f0f0", text: "#2a2a2a",
      shadow: "0 3px 0 #c8c0b0, 0 4px 6px rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.08)",
      radius: "0.5rem",
    },
    operator: {
      bg: "#2e7d32", bgActive: "#388e3c", text: "#ffffff",
      shadow: "0 3px 0 #1b5e20, 0 4px 6px rgba(0,0,0,0.12)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    function: {
      bg: "#e0d8c8", bgActive: "#d0c8b8", text: "#4a4438",
      shadow: "0 3px 0 #b8b0a0, 0 4px 6px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.06)",
      radius: "0.5rem",
    },
    equals: {
      bg: "#d32f2f", bgActive: "#e53935", text: "#ffffff",
      shadow: "0 3px 0 #b71c1c, 0 4px 6px rgba(0,0,0,0.12)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    clear: {
      bg: "#d32f2f", bgActive: "#e53935", text: "#ffffff",
      shadow: "0 3px 0 #b71c1c, 0 4px 6px rgba(0,0,0,0.12)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    memory: {
      bg: "#d8d0c0", bgActive: "#c8c0b0", text: "#6a6258",
      shadow: "0 2px 0 #b0a898, 0 3px 4px rgba(0,0,0,0.08)",
      border: "1px solid rgba(0,0,0,0.05)",
      radius: "0.5rem",
    },
  },

  footer: { color: "#9a9080", text: "School Calculator" },
}

// ============================================================
// THEME: Retro 90s (bright teal/magenta, chunky plastic)
// ============================================================
const retroTheme: CalcTheme = {
  id: "retro",
  name: "Retro 90s",
  description: "Bright colors and chunky plastic 90s vibes",
  preview: { bodyBg: "#2a8a8a", displayBg: "#b8d8d0", accentColor: "#e83080" },

  pageBg: "#1a6868",
  pageBgDark: "#0a3838",

  body: {
    bg: "linear-gradient(170deg, #38a0a0 0%, #2a8a8a 40%, #208080 100%)",
    bgDark: "linear-gradient(170deg, #1a5858 0%, #124848 40%, #0e3a3a 100%)",
    shadow: "0 20px 50px rgba(0,0,0,0.35), 0 8px 16px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)",
    borderRadius: "1.75rem",
    border: "3px solid rgba(255,255,255,0.1)",
  },

  branding: {
    dotColor: "#e83080",
    dotGlow: "0 0 8px rgba(232,48,128,0.5)",
    nameColor: "#c0f0e8",
    modelColor: "#80c8c0",
    brandName: "CalcPro",
    modelName: "RX-90",
  },

  solar: {
    show: false,
    cellBg: "",
    cellHighlight: "",
  },

  modeToggle: {
    bg: "#1a6868",
    activeBg: "#e83080",
    activeText: "#ffffff",
    inactiveText: "#80c8c0",
    indicatorColor: "#e83080",
  },

  display: {
    bezelBg: "linear-gradient(145deg, #1a5858, #206868)",
    bezelShadow: "inset 0 3px 8px rgba(0,0,0,0.5), inset 0 -1px 2px rgba(255,255,255,0.08)",
    screenBg: "linear-gradient(180deg, #a0d0c8 0%, #b8e0d8 40%, #c8e8e0 100%)",
    screenShadow: "inset 0 2px 4px rgba(0,0,0,0.15)",
    textColor: "#0a2820",
    textShadow: "0 1px 0 rgba(200,240,230,0.4)",
    expressionColor: "#408070",
    memoryColor: "#286058",
    errorColor: "#c02020",
    scanlines: true,
  },

  buttons: {
    number: {
      bg: "#f8f0e0", bgActive: "#fff8ec", text: "#1a3a30",
      shadow: "0 5px 0 #c8c0a8, 0 7px 10px rgba(0,0,0,0.25)",
      border: "2px solid rgba(0,0,0,0.06)",
      radius: "0.75rem",
    },
    operator: {
      bg: "#e83080", bgActive: "#f04090", text: "#ffffff",
      shadow: "0 5px 0 #b01858, 0 7px 10px rgba(0,0,0,0.25)",
      border: "2px solid rgba(255,255,255,0.15)",
      radius: "0.75rem",
    },
    function: {
      bg: "#ffd740", bgActive: "#ffe060", text: "#2a1a00",
      shadow: "0 5px 0 #c8a020, 0 7px 10px rgba(0,0,0,0.25)",
      border: "2px solid rgba(0,0,0,0.06)",
      radius: "0.75rem",
    },
    equals: {
      bg: "#e83080", bgActive: "#f04090", text: "#ffffff",
      shadow: "0 5px 0 #b01858, 0 7px 10px rgba(0,0,0,0.25)",
      border: "2px solid rgba(255,255,255,0.15)",
      radius: "0.75rem",
    },
    clear: {
      bg: "#ff5722", bgActive: "#ff7043", text: "#ffffff",
      shadow: "0 5px 0 #c43e18, 0 7px 10px rgba(0,0,0,0.25)",
      border: "2px solid rgba(255,255,255,0.15)",
      radius: "0.75rem",
    },
    memory: {
      bg: "#80d0c8", bgActive: "#90e0d8", text: "#0a3028",
      shadow: "0 4px 0 #58a8a0, 0 6px 8px rgba(0,0,0,0.2)",
      border: "2px solid rgba(0,0,0,0.06)",
      radius: "0.75rem",
    },
  },

  footer: { color: "#80c8c0", text: "Retro Calculator" },
}

// ============================================================
// THEME: Modern Minimal (clean, flat, monochrome)
// ============================================================
const modernTheme: CalcTheme = {
  id: "modern",
  name: "Modern Minimal",
  description: "Clean flat design with subtle shadows",
  preview: { bodyBg: "#ffffff", displayBg: "#f0f0f2", accentColor: "#1a1a1a" },

  pageBg: "#e8e8ec",
  pageBgDark: "#18181b",

  body: {
    bg: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
    bgDark: "linear-gradient(180deg, #27272a 0%, #1f1f22 100%)",
    shadow: "0 20px 60px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.04)",
    borderRadius: "2rem",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  branding: {
    dotColor: "#1a1a1a",
    dotGlow: "none",
    nameColor: "#a0a0a8",
    modelColor: "#c0c0c8",
    brandName: "CalcPro",
    modelName: "M1",
  },

  solar: { show: false, cellBg: "", cellHighlight: "" },

  modeToggle: {
    bg: "#f0f0f2",
    activeBg: "#1a1a1a",
    activeText: "#ffffff",
    inactiveText: "#a0a0a8",
    indicatorColor: "#1a1a1a",
  },

  display: {
    bezelBg: "#f0f0f2",
    bezelShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
    screenBg: "#f8f8fa",
    screenShadow: "none",
    textColor: "#1a1a1a",
    textShadow: "none",
    expressionColor: "#a0a0a8",
    memoryColor: "#70707a",
    errorColor: "#e53935",
  },

  buttons: {
    number: {
      bg: "#f0f0f2", bgActive: "#e4e4e8", text: "#1a1a1a",
      shadow: "0 1px 2px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.04)",
      radius: "1rem",
    },
    operator: {
      bg: "#1a1a1a", bgActive: "#333336", text: "#ffffff",
      shadow: "0 1px 2px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.05)",
      radius: "1rem",
    },
    function: {
      bg: "#e4e4e8", bgActive: "#d8d8dc", text: "#4a4a50",
      shadow: "0 1px 2px rgba(0,0,0,0.05)",
      border: "1px solid rgba(0,0,0,0.04)",
      radius: "1rem",
    },
    equals: {
      bg: "#1a1a1a", bgActive: "#333336", text: "#ffffff",
      shadow: "0 1px 2px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.05)",
      radius: "1rem",
    },
    clear: {
      bg: "#e53935", bgActive: "#ef5350", text: "#ffffff",
      shadow: "0 1px 2px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.08)",
      radius: "1rem",
    },
    memory: {
      bg: "#e8e8ec", bgActive: "#dcdce0", text: "#70707a",
      shadow: "0 1px 2px rgba(0,0,0,0.04)",
      border: "1px solid rgba(0,0,0,0.04)",
      radius: "1rem",
    },
  },

  footer: { color: "#c0c0c8", text: "Minimal Calculator" },
}

// ============================================================
// THEME: Futuristic Neon (dark, glowing neon edges)
// ============================================================
const neonTheme: CalcTheme = {
  id: "neon",
  name: "Futuristic Neon",
  description: "Dark with glowing cyan and magenta neon accents",
  preview: { bodyBg: "#0a0a18", displayBg: "#0d1a2a", accentColor: "#00e5ff" },

  pageBg: "#060610",
  pageBgDark: "#020208",

  body: {
    bg: "linear-gradient(170deg, #10102a 0%, #0a0a18 50%, #080816 100%)",
    bgDark: "linear-gradient(170deg, #08081a 0%, #050510 50%, #030308 100%)",
    shadow: "0 0 40px rgba(0,229,255,0.08), 0 0 80px rgba(0,229,255,0.04), 0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,229,255,0.1)",
    borderRadius: "1.5rem",
    border: "1px solid rgba(0,229,255,0.15)",
  },

  branding: {
    dotColor: "#00e5ff",
    dotGlow: "0 0 10px rgba(0,229,255,0.6), 0 0 20px rgba(0,229,255,0.3)",
    nameColor: "#00e5ff",
    modelColor: "#4a90d9",
    brandName: "CalcPro",
    modelName: "NEO-X",
  },

  solar: { show: false, cellBg: "", cellHighlight: "" },

  modeToggle: {
    bg: "rgba(0,229,255,0.05)",
    activeBg: "rgba(0,229,255,0.12)",
    activeText: "#00e5ff",
    inactiveText: "#2a5a6a",
    indicatorColor: "#00e5ff",
  },

  display: {
    bezelBg: "linear-gradient(145deg, #0a1020, #0d1828)",
    bezelShadow: "inset 0 2px 8px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,229,255,0.04), 0 0 1px rgba(0,229,255,0.2)",
    screenBg: "linear-gradient(180deg, #081018 0%, #0a1420 40%, #0c1828 100%)",
    screenShadow: "inset 0 0 20px rgba(0,229,255,0.05)",
    textColor: "#00e5ff",
    textShadow: "0 0 8px rgba(0,229,255,0.5), 0 0 16px rgba(0,229,255,0.2)",
    expressionColor: "#1a6878",
    memoryColor: "#00e5ff",
    errorColor: "#ff1744",
    scanlines: true,
  },

  buttons: {
    number: {
      bg: "rgba(0,229,255,0.06)", bgActive: "rgba(0,229,255,0.14)", text: "#b0e8f0",
      shadow: "0 0 8px rgba(0,229,255,0.06), 0 2px 4px rgba(0,0,0,0.4)",
      border: "1px solid rgba(0,229,255,0.12)",
      radius: "0.5rem",
    },
    operator: {
      bg: "rgba(0,229,255,0.12)", bgActive: "rgba(0,229,255,0.22)", text: "#00e5ff",
      shadow: "0 0 12px rgba(0,229,255,0.12), 0 2px 4px rgba(0,0,0,0.4)",
      border: "1px solid rgba(0,229,255,0.25)",
      radius: "0.5rem",
    },
    function: {
      bg: "rgba(0,229,255,0.04)", bgActive: "rgba(0,229,255,0.1)", text: "#4aa8b8",
      shadow: "0 0 6px rgba(0,229,255,0.04), 0 2px 4px rgba(0,0,0,0.3)",
      border: "1px solid rgba(0,229,255,0.08)",
      radius: "0.5rem",
    },
    equals: {
      bg: "rgba(255,23,68,0.15)", bgActive: "rgba(255,23,68,0.25)", text: "#ff1744",
      shadow: "0 0 12px rgba(255,23,68,0.12), 0 2px 4px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,23,68,0.25)",
      radius: "0.5rem",
    },
    clear: {
      bg: "rgba(255,23,68,0.12)", bgActive: "rgba(255,23,68,0.22)", text: "#ff1744",
      shadow: "0 0 10px rgba(255,23,68,0.1), 0 2px 4px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,23,68,0.2)",
      radius: "0.5rem",
    },
    memory: {
      bg: "rgba(0,229,255,0.03)", bgActive: "rgba(0,229,255,0.08)", text: "#2a7888",
      shadow: "0 0 4px rgba(0,229,255,0.04), 0 1px 3px rgba(0,0,0,0.3)",
      border: "1px solid rgba(0,229,255,0.06)",
      radius: "0.5rem",
    },
  },

  footer: { color: "#1a4858", text: "Neon Calculator" },
}

// ============================================================
// THEME: Custom (user-editable, starts as a dark neutral base)
// ============================================================
export const defaultCustomTheme: CalcTheme = {
  id: "custom",
  name: "Custom",
  description: "Your own personalized theme",
  preview: { bodyBg: "#1e1e2e", displayBg: "#0d1117", accentColor: "#58a6ff" },

  pageBg: "#111118",
  pageBgDark: "#0a0a10",

  body: {
    bg: "linear-gradient(170deg, #24243a 0%, #1e1e2e 50%, #181828 100%)",
    bgDark: "linear-gradient(170deg, #1a1a2a 0%, #141422 50%, #10101a 100%)",
    shadow: "0 25px 60px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
    borderRadius: "1.5rem",
    border: "1px solid rgba(255,255,255,0.06)",
  },

  branding: {
    dotColor: "#58a6ff",
    dotGlow: "0 0 8px rgba(88,166,255,0.4)",
    nameColor: "#7a7a9e",
    modelColor: "#5a5a78",
    brandName: "CalcPro",
    modelName: "CUSTOM",
  },

  solar: { show: false, cellBg: "", cellHighlight: "" },

  modeToggle: {
    bg: "#16162a",
    activeBg: "#2a2a44",
    activeText: "#e0e0f0",
    inactiveText: "#5a5a78",
    indicatorColor: "#58a6ff",
  },

  display: {
    bezelBg: "linear-gradient(145deg, #14142a, #1a1a30)",
    bezelShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 -1px 2px rgba(255,255,255,0.04)",
    screenBg: "linear-gradient(180deg, #0d1117 0%, #101820 40%, #141e28 100%)",
    screenShadow: "inset 0 1px 4px rgba(0,0,0,0.3)",
    textColor: "#e0e0f0",
    textShadow: "none",
    expressionColor: "#5a7a98",
    memoryColor: "#58a6ff",
    errorColor: "#f85149",
  },

  buttons: {
    number: {
      bg: "#2a2a44", bgActive: "#3a3a54", text: "#e0e0f0",
      shadow: "0 4px 0 #1a1a30, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.06)",
      radius: "0.5rem",
    },
    operator: {
      bg: "#58a6ff", bgActive: "#70b8ff", text: "#ffffff",
      shadow: "0 4px 0 #3070b0, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    function: {
      bg: "#35355a", bgActive: "#45456a", text: "#a0a0c0",
      shadow: "0 4px 0 #25253e, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.04)",
      radius: "0.5rem",
    },
    equals: {
      bg: "#d94040", bgActive: "#e95050", text: "#ffffff",
      shadow: "0 4px 0 #a02828, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    clear: {
      bg: "#d94040", bgActive: "#e95050", text: "#ffffff",
      shadow: "0 4px 0 #a02828, 0 6px 8px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
      radius: "0.5rem",
    },
    memory: {
      bg: "#25254a", bgActive: "#35355a", text: "#7a7a9e",
      shadow: "0 3px 0 #18183a, 0 5px 6px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.04)",
      radius: "0.5rem",
    },
  },

  footer: { color: "#3a3a58", text: "" },
  numberGlow: false,
  fontFamily: "JetBrains Mono",
}

// ============================================================
// Theme registry -- add new themes here
// ============================================================
export const themes: Record<ThemeId, CalcTheme> = {
  classic: classicTheme,
  school: schoolTheme,
  retro: retroTheme,
  modern: modernTheme,
  neon: neonTheme,
  custom: defaultCustomTheme,
}

export const themeIds: ThemeId[] = ["classic", "school", "retro", "modern", "neon", "custom"]
