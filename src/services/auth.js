import http from './http'

const login = http.post('/login').then(({ data }) => data)

export default {
  login,
}
