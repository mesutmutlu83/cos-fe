export type UserToken = { sub: string; tenantId: string; role: string; orgScope?: string }
export const setAuth = (token: string, tenantId: string) => {
  localStorage.setItem('token', token)
  localStorage.setItem('tenantId', tenantId)
}
export const clearAuth = () => {
  localStorage.removeItem('token'); localStorage.removeItem('tenantId')
}
export const isLoggedIn = () => !!localStorage.getItem('token')
