import Cookies from 'js-cookie'

import { logout } from '../redux'

export const logoutHelper = (dispatch, history) => {
  dispatch(logout())
  Cookies.remove('token')
  Cookies.remove('id')
  history.push('/')
}
