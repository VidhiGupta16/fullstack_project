import { API_ENDPOINTS } from '../constants/api'
import apiClient from './apiClient'

export const authService = {
  login: async (payload: { email: string; password: string }) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, payload)
    return data
  },
  register: async (payload: { name: string; email: string; password: string }) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, payload)
    return data
  },
  getProfile: async () => {
    const { data } = await apiClient.get(API_ENDPOINTS.AUTH.PROFILE)
    return data
  },
}
