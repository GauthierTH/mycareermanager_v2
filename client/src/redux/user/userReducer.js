import Cookies from 'js-cookie'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, REGISTER_FAILURE } from './userActions'

const initialState = {
  isAuthenticated: Cookies.get('token') ? true : false,
  token: Cookies.get('token'),
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: Cookies.get('token')
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        id: null
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default: 
      return state
  }
}

export default userReducer
