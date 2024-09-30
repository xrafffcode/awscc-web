import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const axiosInstance = axios
