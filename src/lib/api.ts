import axios from 'axios'
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token')
  const tenant = localStorage.getItem('tenantId')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  if (tenant) cfg.headers['X-Tenant-Id'] = tenant
  return cfg
})
export default api
