import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { AuthProvider } from '../../context/AuthContext'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within AppProviders')
  }

  return context
}
