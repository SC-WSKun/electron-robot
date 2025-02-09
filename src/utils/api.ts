import axios from 'axios'
import config from '../config'
const instance = axios.create({
  baseURL: config.API_URL,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance