import { createContext, useMemo, useState, type ReactNode } from 'react'

export type AuthUser = {
  name: string
  email: string
  role?: string
}

type AuthContextValue = {
  isAuthenticated: boolean
  token: string | null
  user: AuthUser | null
  login: (payload: { token: string; user: AuthUser }) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

const storage = {
  getToken: () => localStorage.getItem('amms_token'),
  getUser: () => {
    const value = localStorage.getItem('amms_user')
    return value ? (JSON.parse(value) as AuthUser) : null
  },
  setToken: (token: string) => localStorage.setItem('amms_token', token),
  setUser: (user: AuthUser) => localStorage.setItem('amms_user', JSON.stringify(user)),
  clear: () => {
    localStorage.removeItem('amms_token')
    localStorage.removeItem('amms_user')
  },
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => storage.getToken())
  const [user, setUser] = useState<AuthUser | null>(() => storage.getUser())

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(token),
      token,
      user,
      login: ({ token: nextToken, user: nextUser }) => {
        storage.setToken(nextToken)
        storage.setUser(nextUser)
        setToken(nextToken)
        setUser(nextUser)
      },
      logout: () => {
        storage.clear()
        setToken(null)
        setUser(null)
      },
    }),
    [token, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
