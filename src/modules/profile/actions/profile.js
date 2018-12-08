import axios from 'axios';
import { API_URL } from '../../../constants/config';
import * as profileActions from '../constants/profile';

const getCompanies = () => (dispatch, getState) => {
  dispatch({
    type: profileActions.PROFILE_COMPANIES_REQUEST,
  });

  const { userId } = getState().user.userData;

  axios.get(`${API_URL}/api/users/${userId}/companies`)
    .then((res) => {
      dispatch({
        type: profileActions.PROFILE_COMPANIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: profileActions.PROFILE_COMPANIES_FAILURE,
      });
    });
};

const getVacancies = () => (dispatch, getState) => {
  dispatch({
    type: profileActions.PROFILE_VACANCIES_REQUEST,
  });

  const userId = getState().user.userData.id;

  axios.get(`${API_URL}/api/users/${userId}/vacancies/favorites`)
    .then((res) => {
      dispatch({
        type: profileActions.PROFILE_VACANCIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: profileActions.PROFILE_VACANCIES_FAILURE,
      });
    });
};

export {
  getCompanies,
  getVacancies,
};
