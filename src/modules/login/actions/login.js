import axios from 'axios';
import * as loginActions from '../constants/login';
import { setToken, removeToken } from '../../../services/user-storage';
import { API_URL } from '../../../constants/config';


const signIn = data => dispatch => {
  dispatch({ type: loginActions.LOGIN_SIGN_IN_REQUEST });

  axios.post(`${API_URL}/api/auth/signin`, data)
    .then((response) => {
      setToken({
        token: response.data.token,
      });
      setTimeout(() => {
        dispatch({ type: loginActions.LOGIN_SIGN_IN_SUCCESS, payload: response.data.user });
      }, 2000);
    })
    .catch(() => {
      dispatch({ type: loginActions.LOGIN_SIGN_IN_FAILURE });
    });
};

const signOut = () => dispatch => {
  dispatch({ type: loginActions.LOGIN_SIGN_OUT_REQUEST });

  removeToken();

  dispatch({ type: loginActions.LOGIN_SIGN_OUT_SUCCESS });
};

export {
  signIn,
  signOut,
};
