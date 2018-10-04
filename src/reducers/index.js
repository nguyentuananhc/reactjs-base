import { combineReducers } from 'redux'
import user from './user'

export default function createReducer(asyncReducers) {
  return combineReducers({
    user,
    ...asyncReducers,
  });
}
