// reducers.js

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  loggedIn: false,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
