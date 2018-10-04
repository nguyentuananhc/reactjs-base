import { call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../actions/user'

function* handleLogin() {
  try {
    yield call(console.log, 'call log')
  } catch (e) {
    console.log(e)
  }
}

export default [takeLatest(LOGIN, handleLogin)]
