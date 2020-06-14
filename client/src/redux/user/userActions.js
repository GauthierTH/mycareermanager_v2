export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const logout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error
  };
};
