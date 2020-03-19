import { useState, useEffect } from 'react'
import { hasCredential } from '../app/auth'
import axiosInstance from '../app/api'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (!hasCredential()) {
      setIsLoading(false)
      return
    }

    const user = authenticate()
    if (user !== null) {
      setIsLogged(true)
      setUser(user)
    }
    setIsLoading(false)
  }, [])

  return { user, isLoading, isLogged }
}

export const authenticate = async () => {
  try {
    return await axiosInstance.get('/login')
  } catch (error) {
    return null
  }
}
