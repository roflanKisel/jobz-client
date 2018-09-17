import { LOGIN_SIGN_OUT_SUCCESS } from '../modules/login/constants/login';
import { removeToken } from '../services/user-storage';

const signOut = () => dispatch => {
  removeToken();
  dispatch({ type: LOGIN_SIGN_OUT_SUCCESS });
};

export {
  signOut,
};