import {
  ERROR_LOGIN,
  ERROR_REGISTRATION,
  GET_USER,
  SUCCESSFUL_REGISTRATION,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTRATION:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };

    case ERROR_LOGIN:
    case ERROR_REGISTRATION:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
