import { API_ENDPOINTS } from '../constants/api'
import apiClient from './apiClient'

export const authService = {
  login: async (payload) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, payload)
    return data
  },
  register: async (payload) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, payload)
    return data
  },
  getProfile: async () => {
    const { data } = await apiClient.get(API_ENDPOINTS.AUTH.PROFILE)
    return data
  },
}
