
const api = import.meta.env.VITE_API_URL;
import { ref } from 'vue'
import axios from 'axios'
export const isTokenReady = ref(false)
let tokenPromise = null

export async function loadData() {
   if (tokenPromise) return tokenPromise

  tokenPromise = (async () => {
  try {
    const response = await axios.get(`${api}/api/check-auth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
    isTokenReady.value = true
    return response.data
  } catch (error) {
    try {
      const refreshResponse = await axios.get(`${api}/api/refresh_token`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("RefreshToken")}`,
        },
      })

      localStorage.setItem("jwtToken", refreshResponse.data.new_token)
      isTokenReady.value = true
      return refreshResponse.data
    } catch (refreshError) {
      console.error("Token refresh failed:", refreshError)
      isTokenReady.value = false
       return null
    }
  }
})()
return tokenPromise}
