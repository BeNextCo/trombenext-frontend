import Cookies from 'js-cookie'

const tokenKey = 'id_token'

export const getCredential = () => Cookies.get(tokenKey) || null

export const setCredential = token => Cookies.set(tokenKey, token)

export const removeCredential = () => Cookies.remove(tokenKey)

export const hasCredential = () => getCredential() !== null

export const isEmailValid = email => /@benextcompany\.com$/.test(email)