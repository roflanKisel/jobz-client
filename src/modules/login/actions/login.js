import axios from 'axios';
import {
  LOGIN_SIGN_IN_FAILURE,
  LOGIN_SIGN_IN_REQUEST,
  LOGIN_SIGN_IN_SUCCESS,
  LOGIN_SIGN_OUT_REQUEST,
  LOGIN_SIGN_OUT_SUCCESS,
} from '../constants/login';
import { setToken, removeToken } from '../../../services/user-storage';
import { API_URL } from '../../../constants/config';


const signIn = data => dispatch => {
  dispatch({ type: LOGIN_SIGN_IN_REQUEST });

  axios.post(`${API_URL}/api/auth/signin`, data)
    .then((response) => {
      setToken({
        token: response.data.token,
      });
      setTimeout(() => {
        dispatch({ type: LOGIN_SIGN_IN_SUCCESS, payload: response.data.user });
      }, 2000);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_SIGN_IN_FAILURE });
      console.log(err);
    });
};

const signOut = () => dispatch => {
  dispatch({ type: LOGIN_SIGN_OUT_REQUEST });

  removeToken();

  dispatch({ type: LOGIN_SIGN_OUT_SUCCESS });
};

export {
  signIn,
  signOut,
};
