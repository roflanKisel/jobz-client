import axios from 'axios';
import { getToken, removeToken } from '../services/user-storage';
import { LOGIN_SIGN_IN_SUCCESS } from '../modules/login/constants/login';
import { API_URL } from '../constants/config';

const getUserData = () => dispatch => {
  const token = getToken();
  if (token) {
    axios.post(`${API_URL}/api/auth/private`, { token: token.token })
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