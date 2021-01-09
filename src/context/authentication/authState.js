import {
  ERROR_REGISTRATION,
  SUCCESSFUL_REGISTRATION,
  ERROR_LOGIN,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOG_OUT,
} from '../../types';
import { v4 as uuidv4 } from 'uuid';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const { useReducer } = require('react');
const { default: authContext } = require('./authContext');
const { default: authReducer } = require('./authReducer');

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async (data) => {
    try {
      const request = await axiosClient.post('/api/users', data);
      console.log(request.data);

      dispatch({
        type: SUCCESSFUL_REGISTRATION,
        payload: request.data,
      });

      getUserAuthenticated();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        message: error.response.data.msg,
        category: 'alert-error',
      };
      dispatch({
        type: ERROR_REGISTRATION,
        payload: alert,
      });
    }
  };

  const getUserAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: enviar token en cada peticion
      tokenAuth(token);
    }
    try {
      const request = await axiosClient.get('api/auth');
      console.log(request);
      dispatch({
        type: GET_USER,
        payload: request.data.user,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR_LOGIN,
      });
    }
  };

  const login = async (data) => {
    try {
      const request = await axiosClient.post('/api/auth', data);
      console.log(request);

      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: request.data,
      });

      getUserAuthenticated();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        message: error.response.data.msg,
        category: 'alert-error',
      };

      dispatch({
        type: ERROR_LOGIN,
        payload: alert,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        // state
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        // functions
        registerUser,
        login,
        getUserAuthenticated,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
