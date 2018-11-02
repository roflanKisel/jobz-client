import axios from 'axios';
import * as registrationActions from '../constants/registration';
import { LOGIN_SIGN_IN_SUCCESS } from '../../login/constants/login';
import { setToken } from '../../../services/user-storage';
import { API_URL } from '../../../constants/config';

const registrationRequest = data => dispatch => {
  dispatch({ type: registrationActions.REGISTRATION_DATA_REQUEST });

  axios
    .post(`${API_URL}/api/auth/signup`, data)
    .then(response => {
      setToken({
        token: response.data.token,
      });
      dispatch({ type: registrationActions.REGISTRATION_DATA_SUCCESS });
      dispatch({ type: LOGIN_SIGN_IN_SUCCESS, payload: response.data.user });
    })
    .catch(() => {
      dispatch({ type: registrationActions.REGISTRATION_DATA_FAILURE });
    });
};

export { registrationRequest };
