import axios from 'axios'
import storage from '../utils/storage'

const { CancelToken } = axios
const source = CancelToken.source()
const token = storage.get('user') ? storage.get('user').token : null

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000'
  : 'http://localhost:8000'

const http = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    cancelToken: source.token,
    Authorization: token ? `Bearer ${token}` : '',
  },
})

export default http
