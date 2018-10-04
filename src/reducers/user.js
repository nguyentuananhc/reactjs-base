import { UPDATE_USER } from '../actions/user'

const initialState = {}

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.user,
      }
    default:
      return state
  }
}

export default user
