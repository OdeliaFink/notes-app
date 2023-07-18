// actions.js

import { loginUser } from '../services/userService';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    loginUser(username, password)
      .then((user) => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      });
  };
};
