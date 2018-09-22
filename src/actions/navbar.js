import { LOGIN_SIGN_OUT_SUCCESS } from '../modules/login/constants/login';
import { removeToken } from '../services/user-storage';
import { NAVBAR_TITLE_SET } from '../constants/navbar';

const signOut = () => dispatch => {
  removeToken();
  dispatch({ type: LOGIN_SIGN_OUT_SUCCESS });
};

const setTitle = title => dispatch => {
  dispatch({
    type: NAVBAR_TITLE_SET,
    payload: title,
  });
};

export { signOut, setTitle };
