import axios from 'axios';
import {
  REGISTRATION_DATA_REQUEST,
  REGISTRATION_DATA_SUCCESS,
  REGISTRATION_DATA_FAILURE,
} from '../constants/registration';
import {
  LOGIN_SIGN_IN_SUCCESS,
} from '../../login/constants/login';
import { setToken } from '../../../services/user-storage';
import { API_URL } from '../../../constants/config';

const registrationRequest = data => dispatch => {
  dispatch({ type: REGISTRATION_DATA_REQUEST });

  axios
    .post(`${API_URL}/api/auth/signup`, data)
    .then(response => {
      console.log(response.data);
      setToken({
        token: response.data.token,
      });
      dispatch({ type: REGISTRATION_DATA_SUCCESS });
      dispatch({ type: LOGIN_SIGN_IN_SUCCESS, payload: response.data.user });
    })
    .catch(err => {
      dispatch({ type: REGISTRATION_DATA_FAILURE });
      console.log(err);
    });
};

export { registrationRequest };
