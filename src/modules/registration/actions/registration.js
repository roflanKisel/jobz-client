import axios from 'axios';
import {
  REGISTRATION_DATA_REQUEST,
  REGISTRATION_DATA_SUCCESS,
  REGISTRATION_DATA_FAILURE,
} from '../constants/registration';
import { setToken } from '../../../services/user-storage';

const registrationRequest = data => dispatch => {
  dispatch({ type: REGISTRATION_DATA_REQUEST });

  axios
    .post('http://localhost:3000/api/auth/signup', data)
    .then(response => {
      console.log(response.data);
      setToken({
        token: response.data.token,
      });
      dispatch({ type: REGISTRATION_DATA_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: REGISTRATION_DATA_FAILURE });
      console.log(err);
    });
};

export { registrationRequest };
