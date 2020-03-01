import Cookies from 'js-cookie'
import axios from 'axios'

const tokenKey = 'id_token'

const googleApiUrl = 'https://www.googleapis.com/oauth2/v3/tokeninfo'

export const getToken = () => Cookies.get(tokenKey) || null

export const setToken = token => Cookies.set(tokenKey, token)

export const removeToken = () => Cookies.remove(tokenKey)

export const isAuth = async () => {
    const token = getToken()
    
    if (token === null) return false
    
    const tokenInfo = await retrieveTokenInfo(token)

    if(tokenInfo === null) return false

    const {email} = tokenInfo;    

    return isEmailValid(email)
}

export const isEmailValid = email => /@benextcompany\.com$/.test(email)

const retrieveTokenInfo = async token => {
    try {
        const {data} = await axios.get(`${googleApiUrl}?id_token=${token}`)
        return data        
    } catch(error) {
        removeToken()
        return null
    }
}

