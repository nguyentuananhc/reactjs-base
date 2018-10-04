import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createReducer from '../reducers'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}
const store = createStore(createReducer(), applyMiddleware(...middleware))
store.injectedReducers = {}
store.injectedSagas = {}
store.runSaga = sagaMiddleware.run
store.runSaga(sagas)

export default store
