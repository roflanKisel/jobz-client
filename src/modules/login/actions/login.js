import axios from 'axios';
import {
  LOGIN_SIGN_IN_FAILURE,
  LOGIN_SIGN_IN_REQUEST,
  LOGIN_SIGN_IN_SUCCESS,
  LOGIN_SIGN_OUT_REQUEST,
  LOGIN_SIGN_OUT_SUCCESS,
} from '../constants/login';
import { setToken, removeToken } from '../../../services/user-storage';


const signIn = data => dispatch => {
  dispatch({ type: LOGIN_SIGN_IN_REQUEST });

  axios.post('http://localhost:3000/api/auth/signin', data)
    .then((response) => {
      setToken({
        token: response.data.token,
      });
      dispatch({ type: LOGIN_SIGN_IN_SUCCESS, payload: response.data.user });
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
