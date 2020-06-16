import Cookies from 'js-cookie'

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, REGISTER_FAILURE } from './userActions'

const initialState = {
  isAuthenticated: Cookies.get('bearer_token') ? true : false,
  bearerToken: Cookies.get('bearer_token'),
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        bearerToken: Cookies.get('bearer_token')
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
        bearerToken: null
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
