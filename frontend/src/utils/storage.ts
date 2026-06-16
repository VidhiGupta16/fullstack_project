import type { AuthUser } from '../context/AuthContext'

export const storage = {
  getToken: () => localStorage.getItem('amms_token'),
  getUser: () => {
    const value = localStorage.getItem('amms_user')
    return value ? (JSON.parse(value) as AuthUser) : null
  },
  setToken: (token: string) => localStorage.setItem('amms_token', token),
  setUser: (user: AuthUser) => localStorage.setItem('amms_user', JSON.stringify(user)),
  clearAuth: () => {
    localStorage.removeItem('amms_token')
    localStorage.removeItem('amms_user')
  },
}
