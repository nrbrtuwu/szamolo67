// ============================================================
// Localization System
// Structured translation records for 20 languages.
// To add a new language: add a new LocaleId, create a
// TranslationSet, and register it in `translations`.
// ============================================================

export type LocaleId =
  | "en" | "es" | "fr" | "de" | "pt" | "it" | "nl" | "ru"
  | "zh" | "ja" | "ko" | "ar" | "hi" | "tr" | "pl" | "vi"
  | "th" | "sw" | "hu" | "uk"

export interface TranslationSet {
  // Meta
  langName: string        // native name shown in selector
  langNameEn: string      // English name for fallback display
  dir: "ltr" | "rtl"

  // Number formatting
  decimalSep: string
  thousandsSep: string
  numberLocale: string    // BCP 47 tag for Intl.NumberFormat

  // Settings panel
  settings: string
  appearance: string
  light: string
  dark: string
  calculatorStyle: string
  language: string
  active: string

  // Mode toggle
  standard: string
  quadratic: string

  // Display
  memory: string
  error: string

  // Button labels (the rendered text on keys)
  btnClear: string
  btnClearEntry: string
  btnBackspace: string
  btnEquals: string
  btnSolve: string
  btnClearQuad: string

  // Memory buttons
  btnMC: string
  btnMR: string
  btnMPlus: string
  btnMS: string

  // Quadratic panel
  quadLabel: string       // "QUADRATIC: ax^2 + bx + c = 0"
  inputField: string      // "Input field"
  twoReal: string         // "Two real solutions:"
  oneRepeated: string     // "One repeated solution:"
  twoComplex: string      // "Two complex solutions:"
  linearEq: string        // "Linear equation:"
  infiniteSolutions: string
  noSolution: string
  enterValid: string      // "Please enter valid numbers for a, b, and c"

  // Errors
  divisionByZero: string
  invalidExpression: string
  negativeSqrt: string
  invalidResult: string

  // Footer / branding
  footerClassic: string
  footerSchool: string
  footerRetro: string
  footerModern: string
  footerNeon: string

  // Theme names & descriptions
  themeClassicName: string
  themeClassicDesc: string
  themeSchoolName: string
  themeSchoolDesc: string
  themeRetroName: string
  themeRetroDesc: string
  themeModernName: string
  themeModernDesc: string
  themeNeonName: string
  themeNeonDesc: string
  themeCustomName: string
  themeCustomDesc: string

  // Custom theme editor labels
  customEditor: string
  customNumberBtns: string
  customOperatorBtns: string
  customScientificBtns: string
  customEqualBtn: string
  customClearBtn: string
  customDisplayBg: string
  customDisplayText: string
  customNumberGlow: string
  customFont: string
  customResetDefaults: string
  footerCustom: string

  // Aria / accessibility
  ariaCalc: string
  ariaDisplay: string
  ariaSettings: string
  ariaCloseSettings: string

  // Function labels
  fnSin: string
  fnCos: string
  fnTan: string
  fnLog: string
  fnLn: string
  fnSqrt: string
  fnPower: string
  fnAbs: string
  fnPercent: string
  fnOpenParen: string
  fnCloseParen: string
  fnToggleSign: string
  fnAdd: string
  fnSubtract: string
  fnMultiply: string
  fnDivide: string
}

// ============================================================
// ENGLISH
// ============================================================
const en: TranslationSet = {
  langName: "English", langNameEn: "English", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "en-US",
  settings: "Settings", appearance: "Appearance", light: "Light", dark: "Dark",
  calculatorStyle: "Calculator Style", language: "Language", active: "Active",
  standard: "STANDARD", quadratic: "QUADRATIC (ax\u00B2+bx+c)",
  memory: "M", error: "Error",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Solve", btnClearQuad: "Clear",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "QUADRATIC: ax\u00B2 + bx + c = 0",
  inputField: "Input field",
  twoReal: "Two real solutions:", oneRepeated: "One repeated solution:",
  twoComplex: "Two complex solutions:", linearEq: "Linear equation:",
  infiniteSolutions: "Infinite solutions (0 = 0)",
  noSolution: "No solution (equation is inconsistent)",
  enterValid: "Please enter valid numbers for a, b, and c",
  divisionByZero: "Division by zero", invalidExpression: "Invalid expression",
  negativeSqrt: "Negative sqrt", invalidResult: "Invalid result",
  footerClassic: "Scientific Calculator", footerSchool: "School Calculator",
  footerRetro: "Retro Calculator", footerModern: "Minimal Calculator",
  footerNeon: "Neon Calculator",
  themeClassicName: "Classic Scientific", themeClassicDesc: "Dark Casio fx-inspired scientific calculator",
  themeSchoolName: "School Basic", themeSchoolDesc: "Light beige school calculator with simple buttons",
  themeRetroName: "Retro 90s", themeRetroDesc: "Bright colors and chunky plastic 90s vibes",
  themeModernName: "Modern Minimal", themeModernDesc: "Clean flat design with subtle shadows",
  themeNeonName: "Futuristic Neon", themeNeonDesc: "Dark with glowing cyan and magenta neon accents",
  themeCustomName: "Custom", themeCustomDesc: "Your own personalized theme",
  customEditor: "Theme Editor", customNumberBtns: "Number Buttons", customOperatorBtns: "Operator Buttons",
  customScientificBtns: "Scientific Buttons", customEqualBtn: "Equals Button", customClearBtn: "Clear Button",
  customDisplayBg: "Display Background", customDisplayText: "Display Text",
  customNumberGlow: "Number Glow", customFont: "Font", customResetDefaults: "Reset to Defaults",
  footerCustom: "Custom Calculator",
  ariaCalc: "Scientific Calculator", ariaDisplay: "Calculator display",
  ariaSettings: "Open settings", ariaCloseSettings: "Close settings",
  fnSin: "Sine", fnCos: "Cosine", fnTan: "Tangent", fnLog: "Log base 10",
  fnLn: "Natural log", fnSqrt: "Square root", fnPower: "Power",
  fnAbs: "Absolute value", fnPercent: "Percentage",
  fnOpenParen: "Open parenthesis", fnCloseParen: "Close parenthesis",
  fnToggleSign: "Toggle sign", fnAdd: "Add", fnSubtract: "Subtract",
  fnMultiply: "Multiply", fnDivide: "Divide",
}

// ============================================================
// SPANISH
// ============================================================
const es: TranslationSet = {
  langName: "Espa\u00F1ol", langNameEn: "Spanish", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "es-ES",
  settings: "Ajustes", appearance: "Apariencia", light: "Claro", dark: "Oscuro",
  calculatorStyle: "Estilo de calculadora", language: "Idioma", active: "Activo",
  standard: "EST\u00C1NDAR", quadratic: "CUADR\u00C1TICA (ax\u00B2+bx+c)",
  memory: "M", error: "Error",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Resolver", btnClearQuad: "Borrar",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "CUADR\u00C1TICA: ax\u00B2 + bx + c = 0",
  inputField: "Campo de entrada",
  twoReal: "Dos soluciones reales:", oneRepeated: "Una soluci\u00F3n repetida:",
  twoComplex: "Dos soluciones complejas:", linearEq: "Ecuaci\u00F3n lineal:",
  infiniteSolutions: "Soluciones infinitas (0 = 0)",
  noSolution: "Sin soluci\u00F3n (ecuaci\u00F3n inconsistente)",
  enterValid: "Ingrese n\u00FAmeros v\u00E1lidos para a, b y c",
  divisionByZero: "Divisi\u00F3n por cero", invalidExpression: "Expresi\u00F3n inv\u00E1lida",
  negativeSqrt: "Ra\u00EDz negativa", invalidResult: "Resultado inv\u00E1lido",
  footerClassic: "Calculadora Cient\u00EDfica", footerSchool: "Calculadora Escolar",
  footerRetro: "Calculadora Retro", footerModern: "Calculadora Minimalista",
  footerNeon: "Calculadora Ne\u00F3n",
  themeClassicName: "Cient\u00EDfica Cl\u00E1sica", themeClassicDesc: "Calculadora cient\u00EDfica estilo Casio fx",
  themeSchoolName: "Escolar B\u00E1sica", themeSchoolDesc: "Calculadora escolar color beige claro",
  themeRetroName: "Retro 90s", themeRetroDesc: "Colores brillantes y estilo pl\u00E1stico de los 90",
  themeModernName: "Minimalista Moderna", themeModernDesc: "Dise\u00F1o plano con sombras sutiles",
  themeNeonName: "Ne\u00F3n Futurista", themeNeonDesc: "Oscuro con acentos de ne\u00F3n cian y magenta",
  themeCustomName: "Personalizado", themeCustomDesc: "Tu tema personalizado",
  customEditor: "Editor de tema", customNumberBtns: "Botones num\u00E9ricos", customOperatorBtns: "Botones de operadores",
  customScientificBtns: "Botones cient\u00EDficos", customEqualBtn: "Bot\u00F3n igual", customClearBtn: "Bot\u00F3n borrar",
  customDisplayBg: "Fondo de pantalla", customDisplayText: "Texto de pantalla",
  customNumberGlow: "Brillo num\u00E9rico", customFont: "Fuente", customResetDefaults: "Restablecer valores",
  footerCustom: "Calculadora personalizada",
  ariaCalc: "Calculadora Cient\u00EDfica", ariaDisplay: "Pantalla de calculadora",
  ariaSettings: "Abrir ajustes", ariaCloseSettings: "Cerrar ajustes",
  fnSin: "Seno", fnCos: "Coseno", fnTan: "Tangente", fnLog: "Logaritmo base 10",
  fnLn: "Logaritmo natural", fnSqrt: "Ra\u00EDz cuadrada", fnPower: "Potencia",
  fnAbs: "Valor absoluto", fnPercent: "Porcentaje",
  fnOpenParen: "Abrir par\u00E9ntesis", fnCloseParen: "Cerrar par\u00E9ntesis",
  fnToggleSign: "Cambiar signo", fnAdd: "Sumar", fnSubtract: "Restar",
  fnMultiply: "Multiplicar", fnDivide: "Dividir",
}

// ============================================================
// FRENCH
// ============================================================
const fr: TranslationSet = {
  langName: "Fran\u00E7ais", langNameEn: "French", dir: "ltr",
  decimalSep: ",", thousandsSep: "\u00A0", numberLocale: "fr-FR",
  settings: "Param\u00E8tres", appearance: "Apparence", light: "Clair", dark: "Sombre",
  calculatorStyle: "Style de calculatrice", language: "Langue", active: "Actif",
  standard: "STANDARD", quadratic: "QUADRATIQUE (ax\u00B2+bx+c)",
  memory: "M", error: "Erreur",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "R\u00E9soudre", btnClearQuad: "Effacer",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "QUADRATIQUE: ax\u00B2 + bx + c = 0",
  inputField: "Champ de saisie",
  twoReal: "Deux solutions r\u00E9elles :", oneRepeated: "Une solution r\u00E9p\u00E9t\u00E9e :",
  twoComplex: "Deux solutions complexes :", linearEq: "\u00C9quation lin\u00E9aire :",
  infiniteSolutions: "Solutions infinies (0 = 0)",
  noSolution: "Aucune solution (\u00E9quation incoh\u00E9rente)",
  enterValid: "Veuillez entrer des nombres valides pour a, b et c",
  divisionByZero: "Division par z\u00E9ro", invalidExpression: "Expression invalide",
  negativeSqrt: "Racine n\u00E9gative", invalidResult: "R\u00E9sultat invalide",
  footerClassic: "Calculatrice Scientifique", footerSchool: "Calculatrice Scolaire",
  footerRetro: "Calculatrice R\u00E9tro", footerModern: "Calculatrice Minimaliste",
  footerNeon: "Calculatrice N\u00E9on",
  themeClassicName: "Scientifique Classique", themeClassicDesc: "Calculatrice scientifique inspir\u00E9e de Casio fx",
  themeSchoolName: "Scolaire Basique", themeSchoolDesc: "Calculatrice scolaire beige clair",
  themeRetroName: "R\u00E9tro 90s", themeRetroDesc: "Couleurs vives et plastique style ann\u00E9es 90",
  themeModernName: "Minimaliste Moderne", themeModernDesc: "Design \u00E9pur\u00E9 avec ombres subtiles",
  themeNeonName: "N\u00E9on Futuriste", themeNeonDesc: "Sombre avec accents n\u00E9on cyan et magenta",
  themeCustomName: "Personnalis\u00E9", themeCustomDesc: "Votre th\u00E8me personnalis\u00E9",
  customEditor: "\u00C9diteur de th\u00E8me", customNumberBtns: "Boutons num\u00E9riques", customOperatorBtns: "Boutons op\u00E9rateurs",
  customScientificBtns: "Boutons scientifiques", customEqualBtn: "Bouton \u00E9gal", customClearBtn: "Bouton effacer",
  customDisplayBg: "Fond d'\u00E9cran", customDisplayText: "Texte d'\u00E9cran",
  customNumberGlow: "Lueur des chiffres", customFont: "Police", customResetDefaults: "R\u00E9initialiser",
  footerCustom: "Calculatrice personnalis\u00E9e",
  ariaCalc: "Calculatrice Scientifique", ariaDisplay: "Affichage de la calculatrice",
  ariaSettings: "Ouvrir les param\u00E8tres", ariaCloseSettings: "Fermer les param\u00E8tres",
  fnSin: "Sinus", fnCos: "Cosinus", fnTan: "Tangente", fnLog: "Logarithme base 10",
  fnLn: "Logarithme naturel", fnSqrt: "Racine carr\u00E9e", fnPower: "Puissance",
  fnAbs: "Valeur absolue", fnPercent: "Pourcentage",
  fnOpenParen: "Ouvrir parenth\u00E8se", fnCloseParen: "Fermer parenth\u00E8se",
  fnToggleSign: "Changer signe", fnAdd: "Additionner", fnSubtract: "Soustraire",
  fnMultiply: "Multiplier", fnDivide: "Diviser",
}

// ============================================================
// GERMAN
// ============================================================
const de: TranslationSet = {
  langName: "Deutsch", langNameEn: "German", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "de-DE",
  settings: "Einstellungen", appearance: "Darstellung", light: "Hell", dark: "Dunkel",
  calculatorStyle: "Taschenrechner-Stil", language: "Sprache", active: "Aktiv",
  standard: "STANDARD", quadratic: "QUADRATISCH (ax\u00B2+bx+c)",
  memory: "M", error: "Fehler",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "L\u00F6sen", btnClearQuad: "L\u00F6schen",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "QUADRATISCH: ax\u00B2 + bx + c = 0",
  inputField: "Eingabefeld",
  twoReal: "Zwei reelle L\u00F6sungen:", oneRepeated: "Eine doppelte L\u00F6sung:",
  twoComplex: "Zwei komplexe L\u00F6sungen:", linearEq: "Lineare Gleichung:",
  infiniteSolutions: "Unendlich viele L\u00F6sungen (0 = 0)",
  noSolution: "Keine L\u00F6sung (Gleichung inkonsistent)",
  enterValid: "Bitte geben Sie g\u00FCltige Zahlen f\u00FCr a, b und c ein",
  divisionByZero: "Division durch Null", invalidExpression: "Ung\u00FCltiger Ausdruck",
  negativeSqrt: "Negative Wurzel", invalidResult: "Ung\u00FCltiges Ergebnis",
  footerClassic: "Wissenschaftlicher Rechner", footerSchool: "Schulrechner",
  footerRetro: "Retro-Rechner", footerModern: "Minimalistischer Rechner",
  footerNeon: "Neon-Rechner",
  themeClassicName: "Klassisch Wissenschaftlich", themeClassicDesc: "Dunkler Casio fx-Stil Taschenrechner",
  themeSchoolName: "Schule Einfach", themeSchoolDesc: "Heller Schulrechner in Beige",
  themeRetroName: "Retro 90er", themeRetroDesc: "Knallige Farben im 90er-Jahre-Stil",
  themeModernName: "Modern Minimal", themeModernDesc: "Klares Design mit dezenten Schatten",
  themeNeonName: "Futuristisch Neon", themeNeonDesc: "Dunkel mit leuchtenden Cyan- und Magenta-Akzenten",
  themeCustomName: "Benutzerdefiniert", themeCustomDesc: "Ihr eigenes personalisiertes Thema",
  customEditor: "Thema-Editor", customNumberBtns: "Zahlentasten", customOperatorBtns: "Operatortasten",
  customScientificBtns: "Wissenschaftliche Tasten", customEqualBtn: "Gleich-Taste", customClearBtn: "L\u00F6sch-Taste",
  customDisplayBg: "Display-Hintergrund", customDisplayText: "Display-Text",
  customNumberGlow: "Zahlenleuchten", customFont: "Schriftart", customResetDefaults: "Zur\u00FCcksetzen",
  footerCustom: "Benutzerdefinierter Rechner",
  ariaCalc: "Wissenschaftlicher Rechner", ariaDisplay: "Taschenrechner-Anzeige",
  ariaSettings: "Einstellungen \u00F6ffnen", ariaCloseSettings: "Einstellungen schlie\u00DFen",
  fnSin: "Sinus", fnCos: "Kosinus", fnTan: "Tangens", fnLog: "Logarithmus Basis 10",
  fnLn: "Nat\u00FCrlicher Logarithmus", fnSqrt: "Quadratwurzel", fnPower: "Potenz",
  fnAbs: "Absolutwert", fnPercent: "Prozent",
  fnOpenParen: "Klammer auf", fnCloseParen: "Klammer zu",
  fnToggleSign: "Vorzeichen wechseln", fnAdd: "Addieren", fnSubtract: "Subtrahieren",
  fnMultiply: "Multiplizieren", fnDivide: "Dividieren",
}

// ============================================================
// PORTUGUESE
// ============================================================
const pt: TranslationSet = {
  langName: "Portugu\u00EAs", langNameEn: "Portuguese", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "pt-BR",
  settings: "Configura\u00E7\u00F5es", appearance: "Apar\u00EAncia", light: "Claro", dark: "Escuro",
  calculatorStyle: "Estilo da calculadora", language: "Idioma", active: "Ativo",
  standard: "PADR\u00C3O", quadratic: "QUADR\u00C1TICA (ax\u00B2+bx+c)",
  memory: "M", error: "Erro",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Resolver", btnClearQuad: "Limpar",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "QUADR\u00C1TICA: ax\u00B2 + bx + c = 0",
  inputField: "Campo de entrada",
  twoReal: "Duas solu\u00E7\u00F5es reais:", oneRepeated: "Uma solu\u00E7\u00E3o repetida:",
  twoComplex: "Duas solu\u00E7\u00F5es complexas:", linearEq: "Equa\u00E7\u00E3o linear:",
  infiniteSolutions: "Solu\u00E7\u00F5es infinitas (0 = 0)",
  noSolution: "Sem solu\u00E7\u00E3o (equa\u00E7\u00E3o inconsistente)",
  enterValid: "Insira n\u00FAmeros v\u00E1lidos para a, b e c",
  divisionByZero: "Divis\u00E3o por zero", invalidExpression: "Express\u00E3o inv\u00E1lida",
  negativeSqrt: "Raiz negativa", invalidResult: "Resultado inv\u00E1lido",
  footerClassic: "Calculadora Cient\u00EDfica", footerSchool: "Calculadora Escolar",
  footerRetro: "Calculadora Retro", footerModern: "Calculadora Minimalista",
  footerNeon: "Calculadora Neon",
  themeClassicName: "Cient\u00EDfica Cl\u00E1ssica", themeClassicDesc: "Calculadora cient\u00EDfica estilo Casio fx",
  themeSchoolName: "Escolar B\u00E1sica", themeSchoolDesc: "Calculadora escolar bege claro",
  themeRetroName: "Retro 90s", themeRetroDesc: "Cores vibrantes e pl\u00E1stico estilo anos 90",
  themeModernName: "Minimalista Moderna", themeModernDesc: "Design limpo com sombras sutis",
  themeNeonName: "Neon Futurista", themeNeonDesc: "Escuro com acentos neon ciano e magenta",
  themeCustomName: "Personalizado", themeCustomDesc: "Seu tema personalizado",
  customEditor: "Editor de tema", customNumberBtns: "Bot\u00F5es num\u00E9ricos", customOperatorBtns: "Bot\u00F5es de operadores",
  customScientificBtns: "Bot\u00F5es cient\u00EDficos", customEqualBtn: "Bot\u00E3o igual", customClearBtn: "Bot\u00E3o limpar",
  customDisplayBg: "Fundo da tela", customDisplayText: "Texto da tela",
  customNumberGlow: "Brilho num\u00E9rico", customFont: "Fonte", customResetDefaults: "Redefinir padr\u00F5es",
  footerCustom: "Calculadora personalizada",
  ariaCalc: "Calculadora Cient\u00EDfica", ariaDisplay: "Tela da calculadora",
  ariaSettings: "Abrir configura\u00E7\u00F5es", ariaCloseSettings: "Fechar configura\u00E7\u00F5es",
  fnSin: "Seno", fnCos: "Cosseno", fnTan: "Tangente", fnLog: "Logaritmo base 10",
  fnLn: "Logaritmo natural", fnSqrt: "Raiz quadrada", fnPower: "Pot\u00EAncia",
  fnAbs: "Valor absoluto", fnPercent: "Porcentagem",
  fnOpenParen: "Abrir par\u00EAntese", fnCloseParen: "Fechar par\u00EAntese",
  fnToggleSign: "Trocar sinal", fnAdd: "Somar", fnSubtract: "Subtrair",
  fnMultiply: "Multiplicar", fnDivide: "Dividir",
}

// ============================================================
// ITALIAN
// ============================================================
const it: TranslationSet = {
  langName: "Italiano", langNameEn: "Italian", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "it-IT",
  settings: "Impostazioni", appearance: "Aspetto", light: "Chiaro", dark: "Scuro",
  calculatorStyle: "Stile calcolatrice", language: "Lingua", active: "Attivo",
  standard: "STANDARD", quadratic: "QUADRATICA (ax\u00B2+bx+c)",
  memory: "M", error: "Errore",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Risolvi", btnClearQuad: "Cancella",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "QUADRATICA: ax\u00B2 + bx + c = 0",
  inputField: "Campo di input",
  twoReal: "Due soluzioni reali:", oneRepeated: "Una soluzione ripetuta:",
  twoComplex: "Due soluzioni complesse:", linearEq: "Equazione lineare:",
  infiniteSolutions: "Soluzioni infinite (0 = 0)",
  noSolution: "Nessuna soluzione (equazione inconsistente)",
  enterValid: "Inserisci numeri validi per a, b e c",
  divisionByZero: "Divisione per zero", invalidExpression: "Espressione non valida",
  negativeSqrt: "Radice negativa", invalidResult: "Risultato non valido",
  footerClassic: "Calcolatrice Scientifica", footerSchool: "Calcolatrice Scolastica",
  footerRetro: "Calcolatrice Retro", footerModern: "Calcolatrice Minimalista",
  footerNeon: "Calcolatrice Neon",
  themeClassicName: "Scientifica Classica", themeClassicDesc: "Calcolatrice scientifica stile Casio fx",
  themeSchoolName: "Scolastica Base", themeSchoolDesc: "Calcolatrice scolastica beige chiaro",
  themeRetroName: "Retro Anni 90", themeRetroDesc: "Colori vivaci e plastica stile anni 90",
  themeModernName: "Minimalista Moderna", themeModernDesc: "Design pulito con ombre sottili",
  themeNeonName: "Neon Futuristico", themeNeonDesc: "Scuro con accenti neon ciano e magenta",
  themeCustomName: "Personalizzato", themeCustomDesc: "Il tuo tema personalizzato",
  customEditor: "Editor tema", customNumberBtns: "Tasti numerici", customOperatorBtns: "Tasti operatori",
  customScientificBtns: "Tasti scientifici", customEqualBtn: "Tasto uguale", customClearBtn: "Tasto cancella",
  customDisplayBg: "Sfondo display", customDisplayText: "Testo display",
  customNumberGlow: "Bagliore numeri", customFont: "Carattere", customResetDefaults: "Ripristina predefiniti",
  footerCustom: "Calcolatrice personalizzata",
  ariaCalc: "Calcolatrice Scientifica", ariaDisplay: "Display della calcolatrice",
  ariaSettings: "Apri impostazioni", ariaCloseSettings: "Chiudi impostazioni",
  fnSin: "Seno", fnCos: "Coseno", fnTan: "Tangente", fnLog: "Logaritmo base 10",
  fnLn: "Logaritmo naturale", fnSqrt: "Radice quadrata", fnPower: "Potenza",
  fnAbs: "Valore assoluto", fnPercent: "Percentuale",
  fnOpenParen: "Apri parentesi", fnCloseParen: "Chiudi parentesi",
  fnToggleSign: "Cambia segno", fnAdd: "Sommare", fnSubtract: "Sottrarre",
  fnMultiply: "Moltiplicare", fnDivide: "Dividere",
}

// ============================================================
// DUTCH
// ============================================================
const nl: TranslationSet = {
  langName: "Nederlands", langNameEn: "Dutch", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "nl-NL",
  settings: "Instellingen", appearance: "Weergave", light: "Licht", dark: "Donker",
  calculatorStyle: "Rekenmachine-stijl", language: "Taal", active: "Actief",
  standard: "STANDAARD", quadratic: "KWADRATISCH (ax\u00B2+bx+c)",
  memory: "M", error: "Fout",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Oplossen", btnClearQuad: "Wissen",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "KWADRATISCH: ax\u00B2 + bx + c = 0",
  inputField: "Invoerveld",
  twoReal: "Twee re\u00EBle oplossingen:", oneRepeated: "E\u00E9n herhaalde oplossing:",
  twoComplex: "Twee complexe oplossingen:", linearEq: "Lineaire vergelijking:",
  infiniteSolutions: "Oneindig veel oplossingen (0 = 0)",
  noSolution: "Geen oplossing (vergelijking inconsistent)",
  enterValid: "Voer geldige getallen in voor a, b en c",
  divisionByZero: "Deling door nul", invalidExpression: "Ongeldige uitdrukking",
  negativeSqrt: "Negatieve wortel", invalidResult: "Ongeldig resultaat",
  footerClassic: "Wetenschappelijke Rekenmachine", footerSchool: "Schoolrekenmachine",
  footerRetro: "Retro Rekenmachine", footerModern: "Minimalistische Rekenmachine",
  footerNeon: "Neon Rekenmachine",
  themeClassicName: "Klassiek Wetenschappelijk", themeClassicDesc: "Donkere Casio fx-stijl rekenmachine",
  themeSchoolName: "School Basis", themeSchoolDesc: "Lichte beige schoolrekenmachine",
  themeRetroName: "Retro 90s", themeRetroDesc: "Felle kleuren en dikke plastic stijl",
  themeModernName: "Modern Minimaal", themeModernDesc: "Strak design met subtiele schaduwen",
  themeNeonName: "Futuristisch Neon", themeNeonDesc: "Donker met gloeiende cyaan en magenta accenten",
  themeCustomName: "Aangepast", themeCustomDesc: "Uw eigen gepersonaliseerd thema",
  customEditor: "Thema-editor", customNumberBtns: "Cijfertoetsen", customOperatorBtns: "Operatortoetsen",
  customScientificBtns: "Wetenschappelijke toetsen", customEqualBtn: "Gelijk-toets", customClearBtn: "Wis-toets",
  customDisplayBg: "Display-achtergrond", customDisplayText: "Display-tekst",
  customNumberGlow: "Cijfergloed", customFont: "Lettertype", customResetDefaults: "Standaardinstellingen herstellen",
  footerCustom: "Aangepaste rekenmachine",
  ariaCalc: "Wetenschappelijke Rekenmachine", ariaDisplay: "Rekenmachine-display",
  ariaSettings: "Instellingen openen", ariaCloseSettings: "Instellingen sluiten",
  fnSin: "Sinus", fnCos: "Cosinus", fnTan: "Tangens", fnLog: "Logaritme basis 10",
  fnLn: "Natuurlijke logaritme", fnSqrt: "Vierkantswortel", fnPower: "Macht",
  fnAbs: "Absolute waarde", fnPercent: "Percentage",
  fnOpenParen: "Haakje openen", fnCloseParen: "Haakje sluiten",
  fnToggleSign: "Teken wisselen", fnAdd: "Optellen", fnSubtract: "Aftrekken",
  fnMultiply: "Vermenigvuldigen", fnDivide: "Delen",
}

// ============================================================
// RUSSIAN
// ============================================================
const ru: TranslationSet = {
  langName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", langNameEn: "Russian", dir: "ltr",
  decimalSep: ",", thousandsSep: "\u00A0", numberLocale: "ru-RU",
  settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", appearance: "\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434", light: "\u0421\u0432\u0435\u0442\u043B\u044B\u0439", dark: "\u0422\u0451\u043C\u043D\u044B\u0439",
  calculatorStyle: "\u0421\u0442\u0438\u043B\u044C \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430", language: "\u042F\u0437\u044B\u043A", active: "\u0410\u043A\u0442\u0438\u0432",
  standard: "\u0421\u0422\u0410\u041D\u0414\u0410\u0420\u0422", quadratic: "\u041A\u0412\u0410\u0414\u0420\u0410\u0422\u041D\u041E\u0415 (ax\u00B2+bx+c)",
  memory: "M", error: "\u041E\u0448\u0438\u0431\u043A\u0430",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u0420\u0435\u0448\u0438\u0442\u044C", btnClearQuad: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u041A\u0412\u0410\u0414\u0420\u0410\u0422\u041D\u041E\u0415: ax\u00B2 + bx + c = 0",
  inputField: "\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430",
  twoReal: "\u0414\u0432\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u044F:", oneRepeated: "\u041E\u0434\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435:",
  twoComplex: "\u0414\u0432\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u044F:", linearEq: "\u041B\u0438\u043D\u0435\u0439\u043D\u043E\u0435 \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435:",
  infiniteSolutions: "\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E \u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u0439 (0 = 0)",
  noSolution: "\u041D\u0435\u0442 \u0440\u0435\u0448\u0435\u043D\u0438\u044F (\u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E)",
  enterValid: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0434\u043B\u044F a, b \u0438 c",
  divisionByZero: "\u0414\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043D\u043E\u043B\u044C", invalidExpression: "\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  negativeSqrt: "\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C", invalidResult: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
  footerClassic: "\u041D\u0430\u0443\u0447\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", footerSchool: "\u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  footerRetro: "\u0420\u0435\u0442\u0440\u043E \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", footerModern: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  footerNeon: "\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  themeClassicName: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0443\u0447\u043D\u044B\u0439", themeClassicDesc: "\u0422\u0451\u043C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0432 \u0441\u0442\u0438\u043B\u0435 Casio fx",
  themeSchoolName: "\u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u0437\u043E\u0432\u044B\u0439", themeSchoolDesc: "\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0431\u0435\u0436\u0435\u0432\u044B\u0439 \u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  themeRetroName: "\u0420\u0435\u0442\u0440\u043E 90-\u0435", themeRetroDesc: "\u042F\u0440\u043A\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0439 \u0441\u0442\u0438\u043B\u044C 90-\u0445",
  themeModernName: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439", themeModernDesc: "\u0427\u0438\u0441\u0442\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0441 \u0442\u043E\u043D\u043A\u0438\u043C\u0438 \u0442\u0435\u043D\u044F\u043C\u0438",
  themeNeonName: "\u0424\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0435\u043E\u043D", themeNeonDesc: "\u0422\u0451\u043C\u043D\u044B\u0439 \u0441 \u043D\u0435\u043E\u043D\u043E\u0432\u044B\u043C\u0438 \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C\u0438",
  themeCustomName: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F", themeCustomDesc: "\u0412\u0430\u0448\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
  customEditor: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0442\u0435\u043C\u044B", customNumberBtns: "\u0426\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438", customOperatorBtns: "\u041A\u043D\u043E\u043F\u043A\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432",
  customScientificBtns: "\u041D\u0430\u0443\u0447\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438", customEqualBtn: "\u041A\u043D\u043E\u043F\u043A\u0430 \u0440\u0430\u0432\u043D\u043E", customClearBtn: "\u041A\u043D\u043E\u043F\u043A\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438",
  customDisplayBg: "\u0424\u043E\u043D \u0434\u0438\u0441\u043F\u043B\u0435\u044F", customDisplayText: "\u0422\u0435\u043A\u0441\u0442 \u0434\u0438\u0441\u043F\u043B\u0435\u044F",
  customNumberGlow: "\u0421\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u0446\u0438\u0444\u0440", customFont: "\u0428\u0440\u0438\u0444\u0442", customResetDefaults: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
  footerCustom: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  ariaCalc: "\u041D\u0430\u0443\u0447\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", ariaDisplay: "\u0414\u0438\u0441\u043F\u043B\u0435\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430",
  ariaSettings: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", ariaCloseSettings: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  fnSin: "\u0421\u0438\u043D\u0443\u0441", fnCos: "\u041A\u043E\u0441\u0438\u043D\u0443\u0441", fnTan: "\u0422\u0430\u043D\u0433\u0435\u043D\u0441", fnLog: "\u041B\u043E\u0433\u0430\u0440\u0438\u0444\u043C \u0431\u0430\u0437\u0430 10",
  fnLn: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u043E\u0433\u0430\u0440\u0438\u0444\u043C", fnSqrt: "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C", fnPower: "\u0421\u0442\u0435\u043F\u0435\u043D\u044C",
  fnAbs: "\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", fnPercent: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442",
  fnOpenParen: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043A\u043E\u0431\u043A\u0443", fnCloseParen: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043A\u043E\u0431\u043A\u0443",
  fnToggleSign: "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u043A", fnAdd: "\u0421\u043B\u043E\u0436\u0438\u0442\u044C", fnSubtract: "\u0412\u044B\u0447\u0435\u0441\u0442\u044C",
  fnMultiply: "\u0423\u043C\u043D\u043E\u0436\u0438\u0442\u044C", fnDivide: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C",
}

// ============================================================
// CHINESE (Simplified)
// ============================================================
const zh: TranslationSet = {
  langName: "\u4E2D\u6587", langNameEn: "Chinese", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "zh-CN",
  settings: "\u8BBE\u7F6E", appearance: "\u5916\u89C2", light: "\u6D45\u8272", dark: "\u6DF1\u8272",
  calculatorStyle: "\u8BA1\u7B97\u5668\u6837\u5F0F", language: "\u8BED\u8A00", active: "\u5F53\u524D",
  standard: "\u6807\u51C6", quadratic: "\u4E8C\u6B21\u65B9\u7A0B (ax\u00B2+bx+c)",
  memory: "M", error: "\u9519\u8BEF",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u6C42\u89E3", btnClearQuad: "\u6E05\u9664",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u4E8C\u6B21\u65B9\u7A0B: ax\u00B2 + bx + c = 0",
  inputField: "\u8F93\u5165\u5B57\u6BB5",
  twoReal: "\u4E24\u4E2A\u5B9E\u6570\u89E3\uFF1A", oneRepeated: "\u4E00\u4E2A\u91CD\u6839\uFF1A",
  twoComplex: "\u4E24\u4E2A\u590D\u6570\u89E3\uFF1A", linearEq: "\u7EBF\u6027\u65B9\u7A0B\uFF1A",
  infiniteSolutions: "\u65E0\u7A77\u591A\u89E3 (0 = 0)",
  noSolution: "\u65E0\u89E3\uFF08\u65B9\u7A0B\u4E0D\u4E00\u81F4\uFF09",
  enterValid: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 a\u3001b \u548C c \u503C",
  divisionByZero: "\u9664\u4EE5\u96F6", invalidExpression: "\u65E0\u6548\u8868\u8FBE\u5F0F",
  negativeSqrt: "\u8D1F\u6570\u5F00\u65B9", invalidResult: "\u65E0\u6548\u7ED3\u679C",
  footerClassic: "\u79D1\u5B66\u8BA1\u7B97\u5668", footerSchool: "\u5B66\u751F\u8BA1\u7B97\u5668",
  footerRetro: "\u590D\u53E4\u8BA1\u7B97\u5668", footerModern: "\u7B80\u7EA6\u8BA1\u7B97\u5668",
  footerNeon: "\u9713\u8679\u8BA1\u7B97\u5668",
  themeClassicName: "\u7ECF\u5178\u79D1\u5B66\u578B", themeClassicDesc: "\u6DF1\u8272 Casio fx \u98CE\u683C\u79D1\u5B66\u8BA1\u7B97\u5668",
  themeSchoolName: "\u5B66\u751F\u57FA\u7840\u578B", themeSchoolDesc: "\u6D45\u8272\u7C73\u8272\u5B66\u751F\u8BA1\u7B97\u5668",
  themeRetroName: "\u590D\u53E4 90\u5E74\u4EE3", themeRetroDesc: "\u660E\u4EAE\u8272\u5F69\u548C\u539A\u5B9E\u5851\u6599 90 \u5E74\u4EE3\u98CE\u683C",
  themeModernName: "\u73B0\u4EE3\u7B80\u7EA6", themeModernDesc: "\u5E72\u51C0\u5E73\u9762\u8BBE\u8BA1\u4E0E\u5FAE\u5999\u9634\u5F71",
  themeNeonName: "\u672A\u6765\u9713\u8679", themeNeonDesc: "\u6DF1\u8272\u80CC\u666F\u642D\u914D\u9752\u8272\u548C\u54C1\u7EA2\u9713\u8679\u5149",
  themeCustomName: "\u81EA\u5B9A\u4E49", themeCustomDesc: "\u60A8\u7684\u4E2A\u6027\u5316\u4E3B\u9898",
  customEditor: "\u4E3B\u9898\u7F16\u8F91\u5668", customNumberBtns: "\u6570\u5B57\u6309\u94AE", customOperatorBtns: "\u8FD0\u7B97\u7B26\u6309\u94AE",
  customScientificBtns: "\u79D1\u5B66\u6309\u94AE", customEqualBtn: "\u7B49\u53F7\u6309\u94AE", customClearBtn: "\u6E05\u9664\u6309\u94AE",
  customDisplayBg: "\u663E\u793A\u5C4F\u80CC\u666F", customDisplayText: "\u663E\u793A\u5C4F\u6587\u672C",
  customNumberGlow: "\u6570\u5B57\u53D1\u5149", customFont: "\u5B57\u4F53", customResetDefaults: "\u91CD\u7F6E\u9ED8\u8BA4",
  footerCustom: "\u81EA\u5B9A\u4E49\u8BA1\u7B97\u5668",
  ariaCalc: "\u79D1\u5B66\u8BA1\u7B97\u5668", ariaDisplay: "\u8BA1\u7B97\u5668\u663E\u793A\u5C4F",
  ariaSettings: "\u6253\u5F00\u8BBE\u7F6E", ariaCloseSettings: "\u5173\u95ED\u8BBE\u7F6E",
  fnSin: "\u6B63\u5F26", fnCos: "\u4F59\u5F26", fnTan: "\u6B63\u5207", fnLog: "\u5E38\u7528\u5BF9\u6570",
  fnLn: "\u81EA\u7136\u5BF9\u6570", fnSqrt: "\u5E73\u65B9\u6839", fnPower: "\u5E42",
  fnAbs: "\u7EDD\u5BF9\u503C", fnPercent: "\u767E\u5206\u6BD4",
  fnOpenParen: "\u5DE6\u62EC\u53F7", fnCloseParen: "\u53F3\u62EC\u53F7",
  fnToggleSign: "\u5207\u6362\u7B26\u53F7", fnAdd: "\u52A0", fnSubtract: "\u51CF",
  fnMultiply: "\u4E58", fnDivide: "\u9664",
}

// ============================================================
// JAPANESE
// ============================================================
const ja: TranslationSet = {
  langName: "\u65E5\u672C\u8A9E", langNameEn: "Japanese", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "ja-JP",
  settings: "\u8A2D\u5B9A", appearance: "\u5916\u89B3", light: "\u30E9\u30A4\u30C8", dark: "\u30C0\u30FC\u30AF",
  calculatorStyle: "\u96FB\u5353\u30B9\u30BF\u30A4\u30EB", language: "\u8A00\u8A9E", active: "\u6709\u52B9",
  standard: "\u6A19\u6E96", quadratic: "\u4E8C\u6B21\u65B9\u7A0B\u5F0F (ax\u00B2+bx+c)",
  memory: "M", error: "\u30A8\u30E9\u30FC",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u89E3\u304F", btnClearQuad: "\u30AF\u30EA\u30A2",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u4E8C\u6B21\u65B9\u7A0B\u5F0F: ax\u00B2 + bx + c = 0",
  inputField: "\u5165\u529B\u30D5\u30A3\u30FC\u30EB\u30C9",
  twoReal: "2\u3064\u306E\u5B9F\u6570\u89E3\uFF1A", oneRepeated: "1\u3064\u306E\u91CD\u89E3\uFF1A",
  twoComplex: "2\u3064\u306E\u8907\u7D20\u6570\u89E3\uFF1A", linearEq: "\u4E00\u6B21\u65B9\u7A0B\u5F0F\uFF1A",
  infiniteSolutions: "\u7121\u9650\u306E\u89E3 (0 = 0)",
  noSolution: "\u89E3\u306A\u3057\uFF08\u65B9\u7A0B\u5F0F\u304C\u77DB\u76FE\uFF09",
  enterValid: "a\u3001b\u3001c\u306B\u6709\u52B9\u306A\u6570\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  divisionByZero: "\u30BC\u30ED\u9664\u7B97", invalidExpression: "\u7121\u52B9\u306A\u5F0F",
  negativeSqrt: "\u8CA0\u306E\u5E73\u65B9\u6839", invalidResult: "\u7121\u52B9\u306A\u7D50\u679C",
  footerClassic: "\u95A2\u6570\u96FB\u5353", footerSchool: "\u5B66\u751F\u7528\u96FB\u5353",
  footerRetro: "\u30EC\u30C8\u30ED\u96FB\u5353", footerModern: "\u30DF\u30CB\u30DE\u30EB\u96FB\u5353",
  footerNeon: "\u30CD\u30AA\u30F3\u96FB\u5353",
  themeClassicName: "\u30AF\u30E9\u30B7\u30C3\u30AF\u95A2\u6570", themeClassicDesc: "\u6697\u3044Casio fx\u30B9\u30BF\u30A4\u30EB\u306E\u95A2\u6570\u96FB\u5353",
  themeSchoolName: "\u5B66\u751F\u57FA\u672C", themeSchoolDesc: "\u660E\u308B\u3044\u30D9\u30FC\u30B8\u30E5\u306E\u5B66\u751F\u7528\u96FB\u5353",
  themeRetroName: "\u30EC\u30C8\u30ED 90\u5E74\u4EE3", themeRetroDesc: "\u660E\u308B\u3044\u8272\u3068\u5206\u539A\u3044\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF",
  themeModernName: "\u30E2\u30C0\u30F3\u30DF\u30CB\u30DE\u30EB", themeModernDesc: "\u30AF\u30EA\u30FC\u30F3\u306A\u30D5\u30E9\u30C3\u30C8\u30C7\u30B6\u30A4\u30F3",
  themeNeonName: "\u30D5\u30E5\u30FC\u30C1\u30E3\u30EA\u30B9\u30C6\u30A3\u30C3\u30AF\u30CD\u30AA\u30F3", themeNeonDesc: "\u30B7\u30A2\u30F3\u3068\u30DE\u30BC\u30F3\u30BF\u306E\u30CD\u30AA\u30F3\u30A2\u30AF\u30BB\u30F3\u30C8",
  themeCustomName: "\u30AB\u30B9\u30BF\u30E0", themeCustomDesc: "\u81EA\u5206\u3060\u3051\u306E\u30C6\u30FC\u30DE",
  customEditor: "\u30C6\u30FC\u30DE\u30A8\u30C7\u30A3\u30BF", customNumberBtns: "\u6570\u5B57\u30DC\u30BF\u30F3", customOperatorBtns: "\u6F14\u7B97\u5B50\u30DC\u30BF\u30F3",
  customScientificBtns: "\u95A2\u6570\u30DC\u30BF\u30F3", customEqualBtn: "\u30A4\u30B3\u30FC\u30EB\u30DC\u30BF\u30F3", customClearBtn: "\u30AF\u30EA\u30A2\u30DC\u30BF\u30F3",
  customDisplayBg: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u80CC\u666F", customDisplayText: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u30C6\u30AD\u30B9\u30C8",
  customNumberGlow: "\u6570\u5B57\u306E\u5149\u5F69", customFont: "\u30D5\u30A9\u30F3\u30C8", customResetDefaults: "\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u3059",
  footerCustom: "\u30AB\u30B9\u30BF\u30E0\u96FB\u5353",
  ariaCalc: "\u95A2\u6570\u96FB\u5353", ariaDisplay: "\u96FB\u5353\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4",
  ariaSettings: "\u8A2D\u5B9A\u3092\u958B\u304F", ariaCloseSettings: "\u8A2D\u5B9A\u3092\u9589\u3058\u308B",
  fnSin: "\u30B5\u30A4\u30F3", fnCos: "\u30B3\u30B5\u30A4\u30F3", fnTan: "\u30BF\u30F3\u30B8\u30A7\u30F3\u30C8", fnLog: "\u5E38\u7528\u5BFE\u6570",
  fnLn: "\u81EA\u7136\u5BFE\u6570", fnSqrt: "\u5E73\u65B9\u6839", fnPower: "\u3079\u304D\u4E57",
  fnAbs: "\u7D76\u5BFE\u5024", fnPercent: "\u30D1\u30FC\u30BB\u30F3\u30C8",
  fnOpenParen: "\u5DE6\u62EC\u5F27", fnCloseParen: "\u53F3\u62EC\u5F27",
  fnToggleSign: "\u7B26\u53F7\u5207\u66FF", fnAdd: "\u52A0\u7B97", fnSubtract: "\u6E1B\u7B97",
  fnMultiply: "\u4E57\u7B97", fnDivide: "\u9664\u7B97",
}

// ============================================================
// KOREAN
// ============================================================
const ko: TranslationSet = {
  langName: "\uD55C\uAD6D\uC5B4", langNameEn: "Korean", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "ko-KR",
  settings: "\uC124\uC815", appearance: "\uC678\uAD00", light: "\uB77C\uC774\uD2B8", dark: "\uB2E4\uD06C",
  calculatorStyle: "\uACC4\uC0B0\uAE30 \uC2A4\uD0C0\uC77C", language: "\uC5B8\uC5B4", active: "\uD65C\uC131",
  standard: "\uD45C\uC900", quadratic: "\uC774\uCC28\uBC29\uC815\uC2DD (ax\u00B2+bx+c)",
  memory: "M", error: "\uC624\uB958",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\uD480\uAE30", btnClearQuad: "\uC9C0\uC6B0\uAE30",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\uC774\uCC28\uBC29\uC815\uC2DD: ax\u00B2 + bx + c = 0",
  inputField: "\uC785\uB825 \uD544\uB4DC",
  twoReal: "\uB450 \uC2E4\uC218 \uD574:", oneRepeated: "\uD558\uB098\uC758 \uC911\uBCF5 \uD574:",
  twoComplex: "\uB450 \uBCF5\uC18C\uC218 \uD574:", linearEq: "\uC77C\uCC28\uBC29\uC815\uC2DD:",
  infiniteSolutions: "\uBB34\uD55C\uD574 (0 = 0)",
  noSolution: "\uD574 \uC5C6\uC74C (\uBC29\uC815\uC2DD \uBD88\uC77C\uCE58)",
  enterValid: "a, b, c\uC5D0 \uC720\uD6A8\uD55C \uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694",
  divisionByZero: "0\uC73C\uB85C \uB098\uB214", invalidExpression: "\uC798\uBABB\uB41C \uC218\uC2DD",
  negativeSqrt: "\uC74C\uC218 \uC81C\uACF1\uADFC", invalidResult: "\uC798\uBABB\uB41C \uACB0\uACFC",
  footerClassic: "\uACFC\uD559 \uACC4\uC0B0\uAE30", footerSchool: "\uD559\uC0DD \uACC4\uC0B0\uAE30",
  footerRetro: "\uB808\uD2B8\uB85C \uACC4\uC0B0\uAE30", footerModern: "\uBBF8\uB2C8\uB9D0 \uACC4\uC0B0\uAE30",
  footerNeon: "\uB124\uC628 \uACC4\uC0B0\uAE30",
  themeClassicName: "\uD074\uB798\uC2DD \uACFC\uD559", themeClassicDesc: "\uC5B4\uB450\uC6B4 Casio fx \uC2A4\uD0C0\uC77C \uACFC\uD559 \uACC4\uC0B0\uAE30",
  themeSchoolName: "\uD559\uC0DD \uAE30\uBCF8", themeSchoolDesc: "\uBC1D\uC740 \uBCA0\uC774\uC9C0 \uD559\uC0DD \uACC4\uC0B0\uAE30",
  themeRetroName: "\uB808\uD2B8\uB85C 90\uB144\uB300", themeRetroDesc: "\uBC1D\uC740 \uC0C9\uC0C1\uACFC \uB450\uAEBC\uC6B4 \uD50C\uB77C\uC2A4\uD2F1",
  themeModernName: "\uBAA8\uB358 \uBBF8\uB2C8\uB9D0", themeModernDesc: "\uAE54\uB054\uD55C \uD50C\uB7AB \uB514\uC790\uC778",
  themeNeonName: "\uBBF8\uB798\uD615 \uB124\uC628", themeNeonDesc: "\uC2DC\uC548\uACFC \uB9C8\uC820\uD0C0 \uB124\uC628 \uC561\uC13C\uD2B8",
  themeCustomName: "\uC0AC\uC6A9\uC790 \uC815\uC758", themeCustomDesc: "\uB098\uB9CC\uC758 \uD14C\uB9C8",
  customEditor: "\uD14C\uB9C8 \uD3B8\uC9D1\uAE30", customNumberBtns: "\uC22B\uC790 \uBC84\uD2BC", customOperatorBtns: "\uC5F0\uC0B0\uC790 \uBC84\uD2BC",
  customScientificBtns: "\uACFC\uD559 \uBC84\uD2BC", customEqualBtn: "\uB4F1\uD638 \uBC84\uD2BC", customClearBtn: "\uC9C0\uC6B0\uAE30 \uBC84\uD2BC",
  customDisplayBg: "\uB514\uC2A4\uD50C\uB808\uC774 \uBC30\uACBD", customDisplayText: "\uB514\uC2A4\uD50C\uB808\uC774 \uD14D\uC2A4\uD2B8",
  customNumberGlow: "\uC22B\uC790 \uBC1C\uAD11", customFont: "\uAE00\uAF34", customResetDefaults: "\uAE30\uBCF8\uAC12 \uBCF5\uC6D0",
  footerCustom: "\uC0AC\uC6A9\uC790 \uC815\uC758 \uACC4\uC0B0\uAE30",
  ariaCalc: "\uACFC\uD559 \uACC4\uC0B0\uAE30", ariaDisplay: "\uACC4\uC0B0\uAE30 \uB514\uC2A4\uD50C\uB808\uC774",
  ariaSettings: "\uC124\uC815 \uC5F4\uAE30", ariaCloseSettings: "\uC124\uC815 \uB2EB\uAE30",
  fnSin: "\uC0AC\uC778", fnCos: "\uCF54\uC0AC\uC778", fnTan: "\uD0C4\uC820\uD2B8", fnLog: "\uC0C1\uC6A9\uB85C\uADF8",
  fnLn: "\uC790\uC5F0\uB85C\uADF8", fnSqrt: "\uC81C\uACF1\uADFC", fnPower: "\uAC70\uB4ED\uC81C\uACF1",
  fnAbs: "\uC808\uB300\uAC12", fnPercent: "\uD37C\uC13C\uD2B8",
  fnOpenParen: "\uC5EC\uB294 \uAD04\uD638", fnCloseParen: "\uB2EB\uB294 \uAD04\uD638",
  fnToggleSign: "\uBD80\uD638 \uC804\uD658", fnAdd: "\uB367\uC148", fnSubtract: "\uBE68\uC148",
  fnMultiply: "\uACF1\uC148", fnDivide: "\uB098\uB217\uC148",
}

// ============================================================
// ARABIC
// ============================================================
const ar: TranslationSet = {
  langName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", langNameEn: "Arabic", dir: "rtl",
  decimalSep: "\u066B", thousandsSep: "\u066C", numberLocale: "ar-SA",
  settings: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A", appearance: "\u0627\u0644\u0645\u0638\u0647\u0631", light: "\u0641\u0627\u062A\u062D", dark: "\u062F\u0627\u0643\u0646",
  calculatorStyle: "\u0646\u0645\u0637 \u0627\u0644\u0622\u0644\u0629 \u0627\u0644\u062D\u0627\u0633\u0628\u0629", language: "\u0627\u0644\u0644\u063A\u0629", active: "\u0646\u0634\u0637",
  standard: "\u0642\u064A\u0627\u0633\u064A", quadratic: "\u062A\u0631\u0628\u064A\u0639\u064A\u0629 (ax\u00B2+bx+c)",
  memory: "M", error: "\u062E\u0637\u0623",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u062D\u0644", btnClearQuad: "\u0645\u0633\u062D",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u062A\u0631\u0628\u064A\u0639\u064A\u0629: ax\u00B2 + bx + c = 0",
  inputField: "\u062D\u0642\u0644 \u0627\u0644\u0625\u062F\u062E\u0627\u0644",
  twoReal: "\u062D\u0644\u0627\u0646 \u062D\u0642\u064A\u0642\u064A\u0627\u0646:", oneRepeated: "\u062D\u0644 \u0645\u0643\u0631\u0631 \u0648\u0627\u062D\u062F:",
  twoComplex: "\u062D\u0644\u0627\u0646 \u0645\u0631\u0643\u0628\u0627\u0646:", linearEq: "\u0645\u0639\u0627\u062F\u0644\u0629 \u062E\u0637\u064A\u0629:",
  infiniteSolutions: "\u062D\u0644\u0648\u0644 \u0644\u0627 \u0646\u0647\u0627\u0626\u064A\u0629 (0 = 0)",
  noSolution: "\u0644\u0627 \u062D\u0644 (\u0645\u0639\u0627\u062F\u0644\u0629 \u063A\u064A\u0631 \u0645\u062A\u0633\u0642\u0629)",
  enterValid: "\u0623\u062F\u062E\u0644 \u0623\u0631\u0642\u0627\u0645\u064B\u0627 \u0635\u0627\u0644\u062D\u0629 \u0644\u0640 a \u0648 b \u0648 c",
  divisionByZero: "\u0642\u0633\u0645\u0629 \u0639\u0644\u0649 \u0635\u0641\u0631", invalidExpression: "\u062A\u0639\u0628\u064A\u0631 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D",
  negativeSqrt: "\u062C\u0630\u0631 \u0633\u0627\u0644\u0628", invalidResult: "\u0646\u062A\u064A\u062C\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629",
  footerClassic: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0639\u0644\u0645\u064A\u0629", footerSchool: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0645\u062F\u0631\u0633\u064A\u0629",
  footerRetro: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0631\u062C\u0639\u064A\u0629", footerModern: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0628\u0633\u064A\u0637\u0629",
  footerNeon: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0646\u064A\u0648\u0646",
  themeClassicName: "\u0639\u0644\u0645\u064A\u0629 \u0643\u0644\u0627\u0633\u064A\u0643\u064A\u0629", themeClassicDesc: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0639\u0644\u0645\u064A\u0629 \u0628\u0623\u0633\u0644\u0648\u0628 Casio fx",
  themeSchoolName: "\u0645\u062F\u0631\u0633\u064A\u0629 \u0623\u0633\u0627\u0633\u064A\u0629", themeSchoolDesc: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0645\u062F\u0631\u0633\u064A\u0629 \u0628\u064A\u062C \u0641\u0627\u062A\u062D",
  themeRetroName: "\u0631\u062C\u0639\u064A\u0629 \u0627\u0644\u062A\u0633\u0639\u064A\u0646\u0627\u062A", themeRetroDesc: "\u0623\u0644\u0648\u0627\u0646 \u0632\u0627\u0647\u064A\u0629 \u0648\u0628\u0644\u0627\u0633\u062A\u064A\u0643 \u0633\u0645\u064A\u0643",
  themeModernName: "\u062D\u062F\u064A\u062B\u0629 \u0628\u0633\u064A\u0637\u0629", themeModernDesc: "\u062A\u0635\u0645\u064A\u0645 \u0646\u0638\u064A\u0641 \u0645\u0639 \u0638\u0644\u0627\u0644 \u062E\u0641\u064A\u0641\u0629",
  themeNeonName: "\u0646\u064A\u0648\u0646 \u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629", themeNeonDesc: "\u062F\u0627\u0643\u0646\u0629 \u0645\u0639 \u0627\u0644\u0646\u064A\u0648\u0646 \u0627\u0644\u0633\u064A\u0627\u0646\u064A \u0648\u0627\u0644\u0623\u0631\u062C\u0648\u0627\u0646\u064A",
  ariaCalc: "\u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0639\u0644\u0645\u064A\u0629", ariaDisplay: "\u0634\u0627\u0634\u0629 \u0627\u0644\u0622\u0644\u0629 \u0627\u0644\u062D\u0627\u0633\u0628\u0629",
  ariaSettings: "\u0641\u062A\u062D \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A", ariaCloseSettings: "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
  fnSin: "\u062C\u064A\u0628", fnCos: "\u062C\u064A\u0628 \u062A\u0645\u0627\u0645", fnTan: "\u0638\u0644", fnLog: "\u0644\u0648\u063A\u0627\u0631\u064A\u062A\u0645 \u0623\u0633\u0627\u0633 10",
  fnLn: "\u0644\u0648\u063A\u0627\u0631\u064A\u062A\u0645 \u0637\u0628\u064A\u0639\u064A", fnSqrt: "\u062C\u0630\u0631 \u062A\u0631\u0628\u064A\u0639\u064A", fnPower: "\u0623\u0633",
  fnAbs: "\u0642\u064A\u0645\u0629 \u0645\u0637\u0644\u0642\u0629", fnPercent: "\u0646\u0633\u0628\u0629 \u0645\u0626\u0648\u064A\u0629",
  fnOpenParen: "\u0642\u0648\u0633 \u0645\u0641\u062A\u0648\u062D", fnCloseParen: "\u0642\u0648\u0633 \u0645\u063A\u0644\u0642",
  fnToggleSign: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0625\u0634\u0627\u0631\u0629", fnAdd: "\u062C\u0645\u0639", fnSubtract: "\u0637\u0631\u062D",
  fnMultiply: "\u0636\u0631\u0628", fnDivide: "\u0642\u0633\u0645\u0629",
}

// ============================================================
// HINDI
// ============================================================
const hi: TranslationSet = {
  langName: "\u0939\u093F\u0928\u094D\u0926\u0940", langNameEn: "Hindi", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "hi-IN",
  settings: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938", appearance: "\u0926\u093F\u0916\u093E\u0935\u091F", light: "\u0939\u0932\u094D\u0915\u093E", dark: "\u0917\u0939\u0930\u093E",
  calculatorStyle: "\u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0936\u0948\u0932\u0940", language: "\u092D\u093E\u0937\u093E", active: "\u0938\u0915\u094D\u0930\u093F\u092F",
  standard: "\u092E\u093E\u0928\u0915", quadratic: "\u0926\u094D\u0935\u093F\u0918\u093E\u0924 (ax\u00B2+bx+c)",
  memory: "M", error: "\u0924\u094D\u0930\u0941\u091F\u093F",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u0939\u0932 \u0915\u0930\u0947\u0902", btnClearQuad: "\u0938\u093E\u092B\u093C \u0915\u0930\u0947\u0902",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u0926\u094D\u0935\u093F\u0918\u093E\u0924: ax\u00B2 + bx + c = 0",
  inputField: "\u0907\u0928\u092A\u0941\u091F \u092B\u093C\u0940\u0932\u094D\u0921",
  twoReal: "\u0926\u094B \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0939\u0932:", oneRepeated: "\u090F\u0915 \u0926\u094B\u0939\u0930\u093E\u092F\u093E \u0939\u0932:",
  twoComplex: "\u0926\u094B \u0938\u092E\u094D\u092E\u093F\u0936\u094D\u0930 \u0939\u0932:", linearEq: "\u0930\u0948\u0916\u093F\u0915 \u0938\u092E\u0940\u0915\u0930\u0923:",
  infiniteSolutions: "\u0905\u0928\u0902\u0924 \u0939\u0932 (0 = 0)",
  noSolution: "\u0915\u094B\u0908 \u0939\u0932 \u0928\u0939\u0940\u0902 (\u0938\u092E\u0940\u0915\u0930\u0923 \u0905\u0938\u0902\u0917\u0924)",
  enterValid: "\u0915\u0943\u092A\u092F\u093E a, b \u0914\u0930 c \u0915\u0947 \u0932\u093F\u090F \u0935\u0948\u0927 \u0938\u0902\u0916\u094D\u092F\u093E\u090F\u0901 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
  divisionByZero: "\u0936\u0942\u0928\u094D\u092F \u0938\u0947 \u092D\u093E\u0917", invalidExpression: "\u0905\u092E\u093E\u0928\u094D\u092F \u0935\u094D\u092F\u0902\u091C\u0915",
  negativeSqrt: "\u090B\u0923\u093E\u0924\u094D\u092E\u0915 \u0935\u0930\u094D\u0917\u092E\u0942\u0932", invalidResult: "\u0905\u092E\u093E\u0928\u094D\u092F \u092A\u0930\u093F\u0923\u093E\u092E",
  footerClassic: "\u0935\u0948\u091C\u094D\u091E\u093E\u0928\u093F\u0915 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930", footerSchool: "\u0938\u094D\u0915\u0942\u0932 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
  footerRetro: "\u0930\u0947\u091F\u094D\u0930\u094B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930", footerModern: "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
  footerNeon: "\u0928\u093F\u092F\u0949\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
  themeClassicName: "\u0915\u094D\u0932\u093E\u0938\u093F\u0915 \u0935\u0948\u091C\u094D\u091E\u093E\u0928\u093F\u0915", themeClassicDesc: "\u0917\u0939\u0930\u093E Casio fx \u0936\u0948\u0932\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
  themeSchoolName: "\u0938\u094D\u0915\u0942\u0932 \u092C\u0947\u0938\u093F\u0915", themeSchoolDesc: "\u0939\u0932\u094D\u0915\u093E \u092C\u0947\u091C \u0938\u094D\u0915\u0942\u0932 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
  themeRetroName: "\u0930\u0947\u091F\u094D\u0930\u094B 90 \u0915\u093E \u0926\u0936\u0915", themeRetroDesc: "\u091A\u092E\u0915\u0940\u0932\u0947 \u0930\u0902\u0917 \u0914\u0930 \u092E\u094B\u091F\u093E \u092A\u094D\u0932\u093E\u0938\u094D\u091F\u093F\u0915",
  themeModernName: "\u0906\u0927\u0941\u0928\u093F\u0915 \u0928\u094D\u092F\u0942\u0928\u0924\u092E", themeModernDesc: "\u0938\u0942\u0915\u094D\u0937\u094D\u092E \u091B\u093E\u092F\u093E\u0913\u0902 \u0915\u0947 \u0938\u093E\u0925 \u0938\u094D\u0935\u091A\u094D\u091B \u0921\u093F\u091C\u093C\u093E\u0907\u0928",
  themeNeonName: "\u092D\u0935\u093F\u0937\u094D\u092F\u0935\u093E\u0926\u0940 \u0928\u093F\u092F\u0949\u0928", themeNeonDesc: "\u0938\u093E\u092F\u0928 \u0914\u0930 \u092E\u0948\u091C\u0947\u0902\u091F\u093E \u0928\u093F\u092F\u0949\u0928 \u090F\u0915\u094D\u0938\u0947\u0902\u091F",
  ariaCalc: "\u0935\u0948\u091C\u094D\u091E\u093E\u0928\u093F\u0915 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930", ariaDisplay: "\u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0921\u093F\u0938\u094D\u092A\u094D\u0932\u0947",
  ariaSettings: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938 \u0916\u094B\u0932\u0947\u0902", ariaCloseSettings: "\u0938\u0947\u091F\u093F\u0902\u0917\u094D\u0938 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
  fnSin: "\u0938\u093E\u0907\u0928", fnCos: "\u0915\u094B\u0938\u093E\u0907\u0928", fnTan: "\u091F\u0948\u0928\u091C\u0947\u0902\u091F", fnLog: "\u0932\u0949\u0917 \u0906\u0927\u093E\u0930 10",
  fnLn: "\u092A\u094D\u0930\u093E\u0915\u0943\u0924\u093F\u0915 \u0932\u0949\u0917", fnSqrt: "\u0935\u0930\u094D\u0917\u092E\u0942\u0932", fnPower: "\u0918\u093E\u0924",
  fnAbs: "\u0928\u093F\u0930\u092A\u0947\u0915\u094D\u0937 \u092E\u093E\u0928", fnPercent: "\u092A\u094D\u0930\u0924\u093F\u0936\u0924",
  fnOpenParen: "\u0916\u0941\u0932\u093E \u0915\u094B\u0937\u094D\u0920\u0915", fnCloseParen: "\u092C\u0902\u0926 \u0915\u094B\u0937\u094D\u0920\u0915",
  fnToggleSign: "\u091A\u093F\u0939\u094D\u0928 \u092C\u0926\u0932\u0947\u0902", fnAdd: "\u091C\u094B\u0921\u093C", fnSubtract: "\u0918\u091F\u093E\u090F\u0902",
  fnMultiply: "\u0917\u0941\u0923\u093E", fnDivide: "\u092D\u093E\u0917",
}

// ============================================================
// TURKISH
// ============================================================
const tr: TranslationSet = {
  langName: "T\u00FCrk\u00E7e", langNameEn: "Turkish", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "tr-TR",
  settings: "Ayarlar", appearance: "G\u00F6r\u00FCn\u00FCm", light: "A\u00E7\u0131k", dark: "Koyu",
  calculatorStyle: "Hesap makinesi stili", language: "Dil", active: "Aktif",
  standard: "STANDART", quadratic: "KUADRAT\u0130K (ax\u00B2+bx+c)",
  memory: "M", error: "Hata",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u00C7\u00F6z", btnClearQuad: "Temizle",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "KUADRAT\u0130K: ax\u00B2 + bx + c = 0",
  inputField: "Giri\u015F alan\u0131",
  twoReal: "\u0130ki reel \u00E7\u00F6z\u00FCm:", oneRepeated: "Bir tekrarl\u0131 \u00E7\u00F6z\u00FCm:",
  twoComplex: "\u0130ki karma\u015F\u0131k \u00E7\u00F6z\u00FCm:", linearEq: "Do\u011Frusal denklem:",
  infiniteSolutions: "Sonsuz \u00E7\u00F6z\u00FCm (0 = 0)",
  noSolution: "\u00C7\u00F6z\u00FCm yok (denklem tutars\u0131z)",
  enterValid: "L\u00FCtfen a, b ve c i\u00E7in ge\u00E7erli say\u0131lar girin",
  divisionByZero: "S\u0131f\u0131ra b\u00F6lme", invalidExpression: "Ge\u00E7ersiz ifade",
  negativeSqrt: "Negatif karek\u00F6k", invalidResult: "Ge\u00E7ersiz sonu\u00E7",
  footerClassic: "Bilimsel Hesap Makinesi", footerSchool: "Okul Hesap Makinesi",
  footerRetro: "Retro Hesap Makinesi", footerModern: "Minimal Hesap Makinesi",
  footerNeon: "Neon Hesap Makinesi",
  themeClassicName: "Klasik Bilimsel", themeClassicDesc: "Koyu Casio fx tarz\u0131 bilimsel hesap makinesi",
  themeSchoolName: "Okul Temel", themeSchoolDesc: "A\u00E7\u0131k bej okul hesap makinesi",
  themeRetroName: "Retro 90lar", themeRetroDesc: "Parlak renkler ve kal\u0131n plastik",
  themeModernName: "Modern Minimal", themeModernDesc: "Hafif g\u00F6lgeli temiz tasar\u0131m",
  themeNeonName: "F\u00FCt\u00FCristik Neon", themeNeonDesc: "Koyu arka plan ve neon vurgular",
  ariaCalc: "Bilimsel Hesap Makinesi", ariaDisplay: "Hesap makinesi ekran\u0131",
  ariaSettings: "Ayarlar\u0131 a\u00E7", ariaCloseSettings: "Ayarlar\u0131 kapat",
  fnSin: "Sin\u00FCs", fnCos: "Kosin\u00FCs", fnTan: "Tanjant", fnLog: "Logaritma taban 10",
  fnLn: "Do\u011Fal logaritma", fnSqrt: "Karek\u00F6k", fnPower: "\u00DCs",
  fnAbs: "Mutlak de\u011Fer", fnPercent: "Y\u00FCzde",
  fnOpenParen: "Parantez a\u00E7", fnCloseParen: "Parantez kapat",
  fnToggleSign: "\u0130\u015Faret de\u011Fi\u015Ftir", fnAdd: "Topla", fnSubtract: "\u00C7\u0131kar",
  fnMultiply: "\u00C7arp", fnDivide: "B\u00F6l",
}

// ============================================================
// POLISH
// ============================================================
const pl: TranslationSet = {
  langName: "Polski", langNameEn: "Polish", dir: "ltr",
  decimalSep: ",", thousandsSep: "\u00A0", numberLocale: "pl-PL",
  settings: "Ustawienia", appearance: "Wygl\u0105d", light: "Jasny", dark: "Ciemny",
  calculatorStyle: "Styl kalkulatora", language: "J\u0119zyk", active: "Aktywny",
  standard: "STANDARDOWY", quadratic: "KWADRATOWE (ax\u00B2+bx+c)",
  memory: "M", error: "B\u0142\u0105d",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Rozwi\u0105\u017C", btnClearQuad: "Wyczy\u015B\u0107",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "KWADRATOWE: ax\u00B2 + bx + c = 0",
  inputField: "Pole wprowadzania",
  twoReal: "Dwa rozwi\u0105zania rzeczywiste:", oneRepeated: "Jedno powt\u00F3rzone rozwi\u0105zanie:",
  twoComplex: "Dwa rozwi\u0105zania zespolone:", linearEq: "R\u00F3wnanie liniowe:",
  infiniteSolutions: "Niesko\u0144czenie wiele rozwi\u0105za\u0144 (0 = 0)",
  noSolution: "Brak rozwi\u0105za\u0144 (r\u00F3wnanie sprzeczne)",
  enterValid: "Prosz\u0119 wpisa\u0107 prawid\u0142owe liczby dla a, b i c",
  divisionByZero: "Dzielenie przez zero", invalidExpression: "Nieprawid\u0142owe wyra\u017Cenie",
  negativeSqrt: "Ujemny pierwiastek", invalidResult: "Nieprawid\u0142owy wynik",
  footerClassic: "Kalkulator Naukowy", footerSchool: "Kalkulator Szkolny",
  footerRetro: "Kalkulator Retro", footerModern: "Kalkulator Minimalistyczny",
  footerNeon: "Kalkulator Neonowy",
  themeClassicName: "Klasyczny Naukowy", themeClassicDesc: "Ciemny kalkulator w stylu Casio fx",
  themeSchoolName: "Szkolny Podstawowy", themeSchoolDesc: "Jasny be\u017Cowy kalkulator szkolny",
  themeRetroName: "Retro lata 90.", themeRetroDesc: "Jasne kolory i gruby plastik",
  themeModernName: "Nowoczesny Minimalistyczny", themeModernDesc: "Czysty design z subtelnymi cieniami",
  themeNeonName: "Futurystyczny Neon", themeNeonDesc: "Ciemny z neonowymi akcentami",
  ariaCalc: "Kalkulator Naukowy", ariaDisplay: "Wy\u015Bwietlacz kalkulatora",
  ariaSettings: "Otw\u00F3rz ustawienia", ariaCloseSettings: "Zamknij ustawienia",
  fnSin: "Sinus", fnCos: "Cosinus", fnTan: "Tangens", fnLog: "Logarytm o podstawie 10",
  fnLn: "Logarytm naturalny", fnSqrt: "Pierwiastek kwadratowy", fnPower: "Pot\u0119ga",
  fnAbs: "Warto\u015B\u0107 bezwzgl\u0119dna", fnPercent: "Procent",
  fnOpenParen: "Nawias otwieraj\u0105cy", fnCloseParen: "Nawias zamykaj\u0105cy",
  fnToggleSign: "Zmie\u0144 znak", fnAdd: "Dodaj", fnSubtract: "Odejmij",
  fnMultiply: "Pomn\u00F3\u017C", fnDivide: "Podziel",
}

// ============================================================
// VIETNAMESE
// ============================================================
const vi: TranslationSet = {
  langName: "Ti\u1EBFng Vi\u1EC7t", langNameEn: "Vietnamese", dir: "ltr",
  decimalSep: ",", thousandsSep: ".", numberLocale: "vi-VN",
  settings: "C\u00E0i \u0111\u1EB7t", appearance: "Giao di\u1EC7n", light: "S\u00E1ng", dark: "T\u1ED1i",
  calculatorStyle: "Ki\u1EC3u m\u00E1y t\u00EDnh", language: "Ng\u00F4n ng\u1EEF", active: "Ho\u1EA1t \u0111\u1ED9ng",
  standard: "TI\u00CAU CHU\u1EA8N", quadratic: "B\u1AACC 2 (ax\u00B2+bx+c)",
  memory: "M", error: "L\u1ED7i",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Gi\u1EA3i", btnClearQuad: "X\u00F3a",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "B\u1AACC 2: ax\u00B2 + bx + c = 0",
  inputField: "Tr\u01B0\u1EDDng nh\u1EADp",
  twoReal: "Hai nghi\u1EC7m th\u1EF1c:", oneRepeated: "M\u1ED9t nghi\u1EC7m k\u00E9p:",
  twoComplex: "Hai nghi\u1EC7m ph\u1EE9c:", linearEq: "Ph\u01B0\u01A1ng tr\u00ECnh b\u1EADc nh\u1EA5t:",
  infiniteSolutions: "V\u00F4 s\u1ED1 nghi\u1EC7m (0 = 0)",
  noSolution: "V\u00F4 nghi\u1EC7m (ph\u01B0\u01A1ng tr\u00ECnh m\u00E2u thu\u1EABn)",
  enterValid: "Vui l\u00F2ng nh\u1EADp s\u1ED1 h\u1EE3p l\u1EC7 cho a, b v\u00E0 c",
  divisionByZero: "Chia cho 0", invalidExpression: "Bi\u1EC3u th\u1EE9c kh\u00F4ng h\u1EE3p l\u1EC7",
  negativeSqrt: "C\u0103n \u00E2m", invalidResult: "K\u1EBFt qu\u1EA3 kh\u00F4ng h\u1EE3p l\u1EC7",
  footerClassic: "M\u00E1y T\u00EDnh Khoa H\u1ECDc", footerSchool: "M\u00E1y T\u00EDnh H\u1ECDc Sinh",
  footerRetro: "M\u00E1y T\u00EDnh Retro", footerModern: "M\u00E1y T\u00EDnh T\u1ED1i Gi\u1EA3n",
  footerNeon: "M\u00E1y T\u00EDnh Neon",
  themeClassicName: "Khoa h\u1ECDc cl\u1EA3ssic", themeClassicDesc: "M\u00E1y t\u00EDnh khoa h\u1ECDc t\u1ED1i ki\u1EC3u Casio fx",
  themeSchoolName: "H\u1ECDc sinh c\u01A1 b\u1EA3n", themeSchoolDesc: "M\u00E1y t\u00EDnh h\u1ECDc sinh m\u00E0u be nh\u1EA1t",
  themeRetroName: "Retro 90s", themeRetroDesc: "M\u00E0u s\u1EAFc t\u01B0\u01A1i v\u00E0 nh\u1EF1a d\u00E0y",
  themeModernName: "Hi\u1EC7n \u0111\u1EA1i t\u1ED1i gi\u1EA3n", themeModernDesc: "Thi\u1EBFt k\u1EBF s\u1EA1ch v\u1EDBi b\u00F3ng \u0111\u1ED5 nh\u1EB9",
  themeNeonName: "Neon t\u01B0\u01A1ng lai", themeNeonDesc: "T\u1ED1i v\u1EDBi \u00E1nh neon cyan v\u00E0 magenta",
  ariaCalc: "M\u00E1y T\u00EDnh Khoa H\u1ECDc", ariaDisplay: "M\u00E0n h\u00ECnh m\u00E1y t\u00EDnh",
  ariaSettings: "M\u1EDF c\u00E0i \u0111\u1EB7t", ariaCloseSettings: "\u0110\u00F3ng c\u00E0i \u0111\u1EB7t",
  fnSin: "Sin", fnCos: "Cos", fnTan: "Tan", fnLog: "Log c\u01A1 s\u1ED1 10",
  fnLn: "Log t\u1EF1 nhi\u00EAn", fnSqrt: "C\u0103n b\u1EADc hai", fnPower: "L\u0169y th\u1EEBa",
  fnAbs: "Gi\u00E1 tr\u1ECB tuy\u1EC7t \u0111\u1ED1i", fnPercent: "Ph\u1EA7n tr\u0103m",
  fnOpenParen: "M\u1EDF ngo\u1EB7c", fnCloseParen: "\u0110\u00F3ng ngo\u1EB7c",
  fnToggleSign: "\u0110\u1ED5i d\u1EA5u", fnAdd: "C\u1ED9ng", fnSubtract: "Tr\u1EEB",
  fnMultiply: "Nh\u00E2n", fnDivide: "Chia",
}

// ============================================================
// THAI
// ============================================================
const th: TranslationSet = {
  langName: "\u0E44\u0E17\u0E22", langNameEn: "Thai", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "th-TH",
  settings: "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32", appearance: "\u0E23\u0E39\u0E1B\u0E25\u0E31\u0E01\u0E29\u0E13\u0E4C", light: "\u0E2A\u0E27\u0E48\u0E32\u0E07", dark: "\u0E21\u0E37\u0E14",
  calculatorStyle: "\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02", language: "\u0E20\u0E32\u0E29\u0E32", active: "\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
  standard: "\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19", quadratic: "\u0E2A\u0E21\u0E01\u0E32\u0E23\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E2D\u0E07 (ax\u00B2+bx+c)",
  memory: "M", error: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u0E41\u0E01\u0E49", btnClearQuad: "\u0E25\u0E49\u0E32\u0E07",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u0E2A\u0E21\u0E01\u0E32\u0E23\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E2D\u0E07: ax\u00B2 + bx + c = 0",
  inputField: "\u0E0A\u0E48\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01",
  twoReal: "\u0E2A\u0E2D\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E08\u0E23\u0E34\u0E07:", oneRepeated: "\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E0B\u0E49\u0E33:",
  twoComplex: "\u0E2A\u0E2D\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E40\u0E0A\u0E34\u0E07\u0E0B\u0E49\u0E2D\u0E19:", linearEq: "\u0E2A\u0E21\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E2A\u0E49\u0E19:",
  infiniteSolutions: "\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E08\u0E33\u0E01\u0E31\u0E14 (0 = 0)",
  noSolution: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E33\u0E15\u0E2D\u0E1A (\u0E2A\u0E21\u0E01\u0E32\u0E23\u0E02\u0E31\u0E14\u0E41\u0E22\u0E49\u0E07)",
  enterValid: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E1B\u0E49\u0E2D\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A a, b \u0E41\u0E25\u0E30 c",
  divisionByZero: "\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22\u0E28\u0E39\u0E19\u0E22\u0E4C", invalidExpression: "\u0E19\u0E34\u0E1E\u0E08\u0E19\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  negativeSqrt: "\u0E23\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07\u0E25\u0E1A", invalidResult: "\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07",
  footerClassic: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", footerSchool: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19",
  footerRetro: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E22\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E04", footerModern: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E21\u0E34\u0E19\u0E34\u0E21\u0E2D\u0E25",
  footerNeon: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E19\u0E35\u0E2D\u0E2D\u0E19",
  themeClassicName: "\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E04\u0E25\u0E32\u0E2A\u0E2A\u0E34\u0E04", themeClassicDesc: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E21\u0E37\u0E14\u0E2A\u0E44\u0E15\u0E25\u0E4C Casio fx",
  themeSchoolName: "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19", themeSchoolDesc: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E35\u0E40\u0E1A\u0E08",
  themeRetroName: "\u0E22\u0E49\u0E2D\u0E19\u0E22\u0E38\u0E04 90s", themeRetroDesc: "\u0E2A\u0E35\u0E2A\u0E31\u0E19\u0E2A\u0E14\u0E43\u0E2A\u0E41\u0E25\u0E30\u0E1E\u0E25\u0E32\u0E2A\u0E15\u0E34\u0E01\u0E2B\u0E19\u0E32",
  themeModernName: "\u0E21\u0E34\u0E19\u0E34\u0E21\u0E2D\u0E25\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22", themeModernDesc: "\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E07\u0E32\u0E17\u0E35\u0E48\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
  themeNeonName: "\u0E19\u0E35\u0E2D\u0E2D\u0E19\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15", themeNeonDesc: "\u0E21\u0E37\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E2A\u0E07\u0E19\u0E35\u0E2D\u0E2D\u0E19\u0E44\u0E0B\u0E22\u0E32\u0E19\u0E41\u0E25\u0E30\u0E21\u0E32\u0E40\u0E08\u0E19\u0E15\u0E49\u0E32",
  ariaCalc: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E40\u0E25\u0E02\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C", ariaDisplay: "\u0E08\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25",
  ariaSettings: "\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32", ariaCloseSettings: "\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  fnSin: "\u0E44\u0E0B\u0E19\u0E4C", fnCos: "\u0E04\u0E2D\u0E2A", fnTan: "\u0E41\u0E17\u0E19", fnLog: "\u0E25\u0E47\u0E2D\u0E01\u0E10\u0E32\u0E19 10",
  fnLn: "\u0E25\u0E47\u0E2D\u0E01\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34", fnSqrt: "\u0E23\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07", fnPower: "\u0E22\u0E01\u0E01\u0E33\u0E25\u0E31\u0E07",
  fnAbs: "\u0E04\u0E48\u0E32\u0E2A\u0E31\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C", fnPercent: "\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19\u0E15\u0E4C",
  fnOpenParen: "\u0E27\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E40\u0E1B\u0E34\u0E14", fnCloseParen: "\u0E27\u0E07\u0E40\u0E25\u0E47\u0E1A\u0E1B\u0E34\u0E14",
  fnToggleSign: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22", fnAdd: "\u0E1A\u0E27\u0E01", fnSubtract: "\u0E25\u0E1A",
  fnMultiply: "\u0E04\u0E39\u0E13", fnDivide: "\u0E2B\u0E32\u0E23",
}

// ============================================================
// SWAHILI
// ============================================================
const sw: TranslationSet = {
  langName: "Kiswahili", langNameEn: "Swahili", dir: "ltr",
  decimalSep: ".", thousandsSep: ",", numberLocale: "sw-KE",
  settings: "Mipangilio", appearance: "Muonekano", light: "Mwanga", dark: "Giza",
  calculatorStyle: "Mtindo wa kikokotoo", language: "Lugha", active: "Hai",
  standard: "KAWAIDA", quadratic: "MRABA (ax\u00B2+bx+c)",
  memory: "M", error: "Hitilafu",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Tatua", btnClearQuad: "Futa",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "MRABA: ax\u00B2 + bx + c = 0",
  inputField: "Sehemu ya kuingiza",
  twoReal: "Majibu mawili halisi:", oneRepeated: "Jibu moja lililorudiwa:",
  twoComplex: "Majibu mawili changamano:", linearEq: "Mlinganyo wa mstari:",
  infiniteSolutions: "Majibu yasiyo na kikomo (0 = 0)",
  noSolution: "Hakuna jibu (mlinganyo halingani)",
  enterValid: "Tafadhali ingiza nambari halali kwa a, b na c",
  divisionByZero: "Kugawanya kwa sifuri", invalidExpression: "Usemi batili",
  negativeSqrt: "Mzizi hasi", invalidResult: "Matokeo batili",
  footerClassic: "Kikokotoo cha Kisayansi", footerSchool: "Kikokotoo cha Shule",
  footerRetro: "Kikokotoo cha Retro", footerModern: "Kikokotoo Rahisi",
  footerNeon: "Kikokotoo cha Neon",
  themeClassicName: "Kisayansi Asili", themeClassicDesc: "Kikokotoo cha kisayansi cha giza mtindo wa Casio fx",
  themeSchoolName: "Shule Msingi", themeSchoolDesc: "Kikokotoo cha shule rangi ya beige",
  themeRetroName: "Retro 90s", themeRetroDesc: "Rangi mkali na plastiki nene",
  themeModernName: "Kisasa Rahisi", themeModernDesc: "Muundo safi na vivuli vya hila",
  themeNeonName: "Neon wa Mustakabali", themeNeonDesc: "Giza na mwangaza wa neon ya cyan na magenta",
  ariaCalc: "Kikokotoo cha Kisayansi", ariaDisplay: "Onyesho la kikokotoo",
  ariaSettings: "Fungua mipangilio", ariaCloseSettings: "Funga mipangilio",
  fnSin: "Sine", fnCos: "Kosine", fnTan: "Tangent", fnLog: "Logi msingi 10",
  fnLn: "Logi asili", fnSqrt: "Mzizi wa mraba", fnPower: "Nguvu",
  fnAbs: "Thamani kamili", fnPercent: "Asilimia",
  fnOpenParen: "Fungua mabano", fnCloseParen: "Funga mabano",
  fnToggleSign: "Badilisha ishara", fnAdd: "Ongeza", fnSubtract: "Ondoa",
  fnMultiply: "Zidisha", fnDivide: "Gawanya",
}

// ============================================================
// HUNGARIAN
// ============================================================
const hu: TranslationSet = {
  langName: "Magyar", langNameEn: "Hungarian", dir: "ltr",
  decimalSep: ",", thousandsSep: "\u00A0", numberLocale: "hu-HU",
  settings: "Be\u00E1ll\u00EDt\u00E1sok", appearance: "Megjelen\u00E9s", light: "Vil\u00E1gos", dark: "S\u00F6t\u00E9t",
  calculatorStyle: "Sz\u00E1mol\u00F3g\u00E9p st\u00EDlus", language: "Nyelv", active: "Akt\u00EDv",
  standard: "ALAP", quadratic: "M\u00C1SODFOK\u00DA (ax\u00B2+bx+c)",
  memory: "M", error: "Hiba",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "Megold\u00E1s", btnClearQuad: "T\u00F6rl\u00E9s",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "M\u00C1SODFOK\u00DA: ax\u00B2 + bx + c = 0",
  inputField: "Beviteli mez\u0151",
  twoReal: "K\u00E9t val\u00F3s gy\u00F6k:", oneRepeated: "Egy kett\u0151s gy\u00F6k:",
  twoComplex: "K\u00E9t komplex gy\u00F6k:", linearEq: "Line\u00E1ris egyenlet:",
  infiniteSolutions: "V\u00E9gtelen sok megold\u00E1s (0 = 0)",
  noSolution: "Nincs megold\u00E1s (ellentmond\u00F3 egyenlet)",
  enterValid: "K\u00E9rj\u00FCk, adjon meg \u00E9rv\u00E9nyes sz\u00E1mokat a, b \u00E9s c-hez",
  divisionByZero: "Null\u00E1val oszt\u00E1s", invalidExpression: "\u00C9rv\u00E9nytelen kifejez\u00E9s",
  negativeSqrt: "Negat\u00EDv gy\u00F6k", invalidResult: "\u00C9rv\u00E9nytelen eredm\u00E9ny",
  footerClassic: "Tudom\u00E1nyos sz\u00E1mol\u00F3g\u00E9p", footerSchool: "Iskolai sz\u00E1mol\u00F3g\u00E9p",
  footerRetro: "Retr\u00F3 sz\u00E1mol\u00F3g\u00E9p", footerModern: "Minimalista sz\u00E1mol\u00F3g\u00E9p",
  footerNeon: "Neon sz\u00E1mol\u00F3g\u00E9p",
  themeClassicName: "Klasszikus tudom\u00E1nyos", themeClassicDesc: "S\u00F6t\u00E9t Casio fx st\u00EDlus\u00FA tudom\u00E1nyos sz\u00E1mol\u00F3g\u00E9p",
  themeSchoolName: "Iskolai alap", themeSchoolDesc: "Vil\u00E1gos b\u00E9zs iskolai sz\u00E1mol\u00F3g\u00E9p",
  themeRetroName: "Retr\u00F3 90-es \u00E9vek", themeRetroDesc: "\u00C9l\u00E9nk sz\u00EDnek \u00E9s vastag m\u0171anyag",
  themeModernName: "Modern minimalista", themeModernDesc: "Letisztult dizájn finom \u00E1rny\u00E9kokkal",
  themeNeonName: "Futurisztikus neon", themeNeonDesc: "S\u00F6t\u00E9t neon ci\u00E1n \u00E9s magenta kiemel\u00E9sekkel",
  ariaCalc: "Tudom\u00E1nyos sz\u00E1mol\u00F3g\u00E9p", ariaDisplay: "Sz\u00E1mol\u00F3g\u00E9p kijelz\u0151",
  ariaSettings: "Be\u00E1ll\u00EDt\u00E1sok megnyit\u00E1sa", ariaCloseSettings: "Be\u00E1ll\u00EDt\u00E1sok bez\u00E1r\u00E1sa",
  fnSin: "Szinusz", fnCos: "Koszinusz", fnTan: "Tangens", fnLog: "Logaritmus 10-es alap\u00FA",
  fnLn: "Term\u00E9szetes logaritmus", fnSqrt: "N\u00E9gyzetgy\u00F6k", fnPower: "Hatv\u00E1ny",
  fnAbs: "Abszol\u00FAt \u00E9rt\u00E9k", fnPercent: "Sz\u00E1zal\u00E9k",
  fnOpenParen: "Z\u00E1r\u00F3jel nyit\u00E1s", fnCloseParen: "Z\u00E1r\u00F3jel z\u00E1r\u00E1s",
  fnToggleSign: "El\u0151jel v\u00E1lt\u00E1s", fnAdd: "\u00D6sszead\u00E1s", fnSubtract: "Kivon\u00E1s",
  fnMultiply: "Szorz\u00E1s", fnDivide: "Oszt\u00E1s",
}

// ============================================================
// UKRAINIAN
// ============================================================
const uk: TranslationSet = {
  langName: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", langNameEn: "Ukrainian", dir: "ltr",
  decimalSep: ",", thousandsSep: "\u00A0", numberLocale: "uk-UA",
  settings: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F", appearance: "\u0412\u0438\u0433\u043B\u044F\u0434", light: "\u0421\u0432\u0456\u0442\u043B\u0438\u0439", dark: "\u0422\u0435\u043C\u043D\u0438\u0439",
  calculatorStyle: "\u0421\u0442\u0438\u043B\u044C \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430", language: "\u041C\u043E\u0432\u0430", active: "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439",
  standard: "\u0421\u0422\u0410\u041D\u0414\u0410\u0420\u0422", quadratic: "\u041A\u0412\u0410\u0414\u0420\u0410\u0422\u041D\u0415 (ax\u00B2+bx+c)",
  memory: "M", error: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430",
  btnClear: "AC", btnClearEntry: "CE", btnBackspace: "\u232B", btnEquals: "=",
  btnSolve: "\u0420\u043E\u0437\u0432'\u044F\u0437\u0430\u0442\u0438", btnClearQuad: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
  btnMC: "MC", btnMR: "MR", btnMPlus: "M+", btnMS: "MS",
  quadLabel: "\u041A\u0412\u0410\u0414\u0420\u0410\u0422\u041D\u0415: ax\u00B2 + bx + c = 0",
  inputField: "\u041F\u043E\u043B\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F",
  twoReal: "\u0414\u0432\u0430 \u0434\u0456\u0439\u0441\u043D\u0456 \u0440\u043E\u0437\u0432'\u044F\u0437\u043A\u0438:", oneRepeated: "\u041E\u0434\u0438\u043D \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u0438\u0439 \u0440\u043E\u0437\u0432'\u044F\u0437\u043E\u043A:",
  twoComplex: "\u0414\u0432\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0456 \u0440\u043E\u0437\u0432'\u044F\u0437\u043A\u0438:", linearEq: "\u041B\u0456\u043D\u0456\u0439\u043D\u0435 \u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F:",
  infiniteSolutions: "\u041D\u0435\u0441\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u043E \u0431\u0430\u0433\u0430\u0442\u043E \u0440\u043E\u0437\u0432'\u044F\u0437\u043A\u0456\u0432 (0 = 0)",
  noSolution: "\u041D\u0435\u043C\u0430\u0454 \u0440\u043E\u0437\u0432'\u044F\u0437\u043A\u0443 (\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u043D\u0435\u0441\u0443\u043C\u0456\u0441\u043D\u0435)",
  enterValid: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430 \u0434\u043B\u044F a, b \u0456 c",
  divisionByZero: "\u0414\u0456\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u043D\u0443\u043B\u044C", invalidExpression: "\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u0432\u0438\u0440\u0430\u0437",
  negativeSqrt: "\u0412\u0456\u0434'\u0454\u043C\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C", invalidResult: "\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
  footerClassic: "\u041D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", footerSchool: "\u0428\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  footerRetro: "\u0420\u0435\u0442\u0440\u043E \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", footerModern: "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  footerNeon: "\u041D\u0435\u043E\u043D\u043E\u0432\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  themeClassicName: "\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439 \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0439", themeClassicDesc: "\u0422\u0435\u043C\u043D\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0443 \u0441\u0442\u0438\u043B\u0456 Casio fx",
  themeSchoolName: "\u0428\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u0431\u0430\u0437\u043E\u0432\u0438\u0439", themeSchoolDesc: "\u0421\u0432\u0456\u0442\u043B\u0438\u0439 \u0431\u0435\u0436\u0435\u0432\u0438\u0439 \u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
  themeRetroName: "\u0420\u0435\u0442\u0440\u043E 90-\u0442\u0456", themeRetroDesc: "\u042F\u0441\u043A\u0440\u0430\u0432\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438 \u0442\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0438\u0439 \u0441\u0442\u0438\u043B\u044C 90-\u0445",
  themeModernName: "\u0421\u0443\u0447\u0430\u0441\u043D\u0438\u0439 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0438\u0439", themeModernDesc: "\u0427\u0438\u0441\u0442\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0437 \u0442\u043E\u043D\u043A\u0438\u043C\u0438 \u0442\u0456\u043D\u044F\u043C\u0438",
  themeNeonName: "\u0424\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u043D\u0435\u043E\u043D", themeNeonDesc: "\u0422\u0435\u043C\u043D\u0438\u0439 \u0437 \u043D\u0435\u043E\u043D\u043E\u0432\u0438\u043C\u0438 \u0430\u043A\u0446\u0435\u043D\u0442\u0430\u043C\u0438",
  ariaCalc: "\u041D\u0430\u0443\u043A\u043E\u0432\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", ariaDisplay: "\u0414\u0438\u0441\u043F\u043B\u0435\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430",
  ariaSettings: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F", ariaCloseSettings: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
  fnSin: "\u0421\u0438\u043D\u0443\u0441", fnCos: "\u041A\u043E\u0441\u0438\u043D\u0443\u0441", fnTan: "\u0422\u0430\u043D\u0433\u0435\u043D\u0441", fnLog: "\u041B\u043E\u0433\u0430\u0440\u0438\u0444\u043C \u043E\u0441\u043D\u043E\u0432\u0430 10",
  fnLn: "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043B\u043E\u0433\u0430\u0440\u0438\u0444\u043C", fnSqrt: "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C", fnPower: "\u0421\u0442\u0435\u043F\u0456\u043D\u044C",
  fnAbs: "\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F", fnPercent: "\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A",
  fnOpenParen: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0434\u0443\u0436\u043A\u0443", fnCloseParen: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0434\u0443\u0436\u043A\u0443",
  fnToggleSign: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0437\u043D\u0430\u043A", fnAdd: "\u0414\u043E\u0434\u0430\u0442\u0438", fnSubtract: "\u0412\u0456\u0434\u043D\u044F\u0442\u0438",
  fnMultiply: "\u041F\u043E\u043C\u043D\u043E\u0436\u0438\u0442\u0438", fnDivide: "\u041F\u043E\u0434\u0456\u043B\u0438\u0442\u0438",
}

// ============================================================
// Registry
// ============================================================
export const translations: Record<LocaleId, TranslationSet> = {
  en, es, fr, de, pt, it, nl, ru, zh, ja, ko, ar, hi, tr, pl, vi, th, sw, hu, uk,
}

export const localeIds: LocaleId[] = [
  "en", "es", "fr", "de", "pt", "it", "nl", "ru",
  "zh", "ja", "ko", "ar", "hi", "tr", "pl", "vi",
  "th", "sw", "hu", "uk",
]

// ============================================================
// Number formatting utility
// ============================================================
export function formatNumberLocale(value: string, locale: TranslationSet): string {
  // Only format final numeric display values, not expressions
  const num = parseFloat(value)
  if (isNaN(num)) return value

  try {
    return new Intl.NumberFormat(locale.numberLocale, {
      maximumFractionDigits: 10,
      useGrouping: true,
    }).format(num)
  } catch {
    // Fallback: manual replacement
    const [intPart, decPart] = value.split(".")
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, locale.thousandsSep)
    return decPart !== undefined ? `${formatted}${locale.decimalSep}${decPart}` : formatted
  }
}
