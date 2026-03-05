import { ThemeProvider } from "@/lib/theme-context"
import { Calculator } from "@/components/calculator"

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <Calculator />
      </main>
    </ThemeProvider>
  )
}
