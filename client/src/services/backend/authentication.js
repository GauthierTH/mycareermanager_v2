import Cookies from 'js-cookie'

import { loginSuccess, loginFailure, registerFailure } from '../../redux';
import { URL } from './url'

export const register = (data) => {
  return async (dispatch) => {
    let response = await fetch(`${URL}/signup`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: data })
    });
    let responseJson = await response.json()

    if (responseJson.status === "error") {
      dispatch(registerFailure(responseJson.message));
    }
  }
}

export const login = (data) => {
  return async (dispatch) => {
    let response = await fetch(`${URL}/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: data })
    });
    let responseJson = await response.json()

    if (responseJson.status === "error") {
      dispatch(loginFailure(responseJson.message));
    } else if(response.headers.get('Authorization')) {
      Cookies.set('token', response.headers.get('Authorization'))
      Cookies.set('id', responseJson.id)
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure('error'));
    }
  }
}

export const deleteAccount = () => {
  fetch(`${URL}/signup`, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${Cookies.get('token')}`
    }
  });
}
