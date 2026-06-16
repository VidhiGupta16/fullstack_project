import { createContext, useMemo, useState } from 'react'
import { storage } from '../utils/storage'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => storage.getToken())
  const [user, setUser] = useState(() => storage.getUser())

  const login = ({ token: nextToken, user: nextUser }) => {
    storage.setToken(nextToken)
    storage.setUser(nextUser)
    setToken(nextToken)
    setUser(nextUser)
  }

  const logout = () => {
    storage.clearAuth()
    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(token),
      login,
      logout,
      token,
      user,
    }),
    [token, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
