import axios from 'axios'

const http = (token = null) => {
  const { CancelToken } = axios
  const source = CancelToken.source()
  const defaultOptions = {
    headers: {
      Authorization: token ? `Token ${token}` : '',
      cancelToken: source.token,
    },
  }

  return {
    get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
    cancel: source.cancel,
  }
}

export default http
