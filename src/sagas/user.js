import { takeLatest, call, put } from 'redux-saga/effects'

import { LOGIN_REQUEST, loginFailure, loginSuccess } from '../actions/user'
import auth from '../services/auth'
import http from '../services/http'
import storage from '../utils/storage'

function* loginSaga({ payload }) {
  try {
    const user = yield call(auth.login, payload)
    yield put(loginSuccess(user))
    storage.set('user', user)
    http.defaults.headers.common.Authorization = `Bearer ${user.token}`
  } catch (e) {
    yield put(loginFailure(e))
  }
}

export default [takeLatest(LOGIN_REQUEST, loginSaga)]
