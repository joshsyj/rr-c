import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return process.env.NODE_ENV === 'development' ? Cookies.set(TokenKey, token) : Cookies.set(TokenKey, token, { secure: true, sameSite: 'none' })
}

export function removeToken() {
  return process.env.NODE_ENV === 'development' ? Cookies.remove(TokenKey) : Cookies.remove(TokenKey, { secure: true, sameSite: 'none' })
}
