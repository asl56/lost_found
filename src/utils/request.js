import axios from 'axios'
import router from '@/router'

const request = axios.create({
  timeout: 10000
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data && (data.code === 401 || data.code === 403)) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userID')
      localStorage.removeItem('avatar')
      localStorage.removeItem('role')
      if (router.currentRoute.path !== '/') {
        router.replace('/')
      }
    }
    return response
  },
  (error) => {
    const status = error && error.response && error.response.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userID')
      localStorage.removeItem('avatar')
      localStorage.removeItem('role')
      if (router.currentRoute.path !== '/') {
        router.replace('/')
      }
    }
    return Promise.reject(error)
  }
)

export default request
