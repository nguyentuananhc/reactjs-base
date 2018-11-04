const set = (key, value) => {
  const val = typeof value === 'string' ? value : JSON.stringify(value)
  localStorage.setItem(key, val)
}

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    return localStorage.getItem(key)
  }
}

export default {
  set,
  get,
}
