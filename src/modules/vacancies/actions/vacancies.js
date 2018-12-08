import axios from 'axios';
import { API_URL } from '../../../constants/config';
import * as actions from '../constants/vacancies';

const createVacancy = (vacancyData) => dispatch => {
  dispatch({ type: actions.VACANCIES_CREATE_REQUEST });

  const requestVacancyData = {...vacancyData};

  axios.post(`${API_URL}/api/vacancies`, requestVacancyData)
    .then(res => {
      dispatch({
        type: actions.VACANCIES_CREATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({ type: actions.VACANCIES_CREATE_FAILURE });
    });
};

const getVacancy = (id) => dispatch => {
  dispatch({ type: actions.VACANCY_REQUEST });

  console.log(id);

  axios.get(`${API_URL}/api/vacancies/${id}`)
    .then(res => {
      dispatch({
        type: actions.VACANCY_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({type: actions.VACANCY_FAILURE});
    });
};

const getCompanies = () => (dispatch, getState) => {
  const userId = getState().user.userData.id;
  dispatch({
    type: actions.VACANCIES_USER_COMPANIES_REQUEST,
  });

  axios.get(`${API_URL}/api/users/${userId}/companies`)
    .then((res) => {
      dispatch({
        type: actions.VACANCIES_USER_COMPANIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.VACANCIES_USER_COMPANIES_FAILURE,
      });
    })
};

const clearState = () => dispatch => {
  dispatch({ type: actions.VACANCIES_CREATE_CLEAR });
};

const addFavoriteVacancy = (vacancyId) => (dispatch, getState) => {
  const userId = getState().user.userData.id;

  dispatch({
    type: actions.VACANCY_FAVORITE_ADD_REQUEST,
  });

  const data = {
    vacancyId,
  };

  axios.post(`${API_URL}/api/users/${userId}/vacancies/favorites`, data)
    .then(() => {
      dispatch({
        type: actions.VACANCY_FAVORITE_ADD_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({
        type: actions.VACANCY_FAVORITE_ADD_FAILURE,
      });
    });
};

export {
  createVacancy,
  getCompanies,
  getVacancy,
  clearState,
  addFavoriteVacancy,
};
