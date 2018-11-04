import { handleActions } from 'redux-actions'
import { LOGIN_SUCCESS } from '../actions/user'

const initialState = {}

const user = handleActions({
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, initialState)

export default user
