import axios from 'axios';
import { getToken, removeToken } from '../services/user-storage';
import { LOGIN_SIGN_IN_SUCCESS } from '../modules/login/constants/login';

const getUserData = () => dispatch => {
  const token = getToken();
  if (token) {
    axios.post('http://localhost:3000/api/auth/private', { token: token.token })
      .then((response) => {
        dispatch({
          type: LOGIN_SIGN_IN_SUCCESS,
          payload: response.data,
        });
      })
      .catch(() => {
        removeToken();
      });
  }
};

export {
  getUserData,
};