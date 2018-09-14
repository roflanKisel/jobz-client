import { handleActions } from 'redux-actions';
import {
  HOME_COMPANIES_DATA_REQUEST,
  HOME_COMPANIES_DATA_SUCCESS,
  HOME_COMPANIES_DATA_FAILURE,
  HOME_VACANCIES_DATA_REQUEST,
  HOME_VACANCIES_DATA_SUCCESS,
  HOME_VACANCIES_DATA_FAILURE,
} from '../constants/home-page';

const INITIAL_STATE = {
  companies: [],
  vacancies: [],
  isCompaniesLoading: false,
  isVacanciesLoading: false,
};

export default handleActions(
  {
    [HOME_COMPANIES_DATA_REQUEST]: state => ({
      ...state,
      isCompaniesLoading: true,
    }),
    [HOME_COMPANIES_DATA_SUCCESS]: (state, action) => ({
      ...state,
      isCompaniesLoading: false,
      companies: action.payload,
    }),
    [HOME_COMPANIES_DATA_FAILURE]: state => ({
      ...state,
      isCompaniesLoading: false,
      companies: [],
    }),
    [HOME_VACANCIES_DATA_REQUEST]: state => ({
      ...state,
      isVacanciesLoading: true,
    }),
    [HOME_VACANCIES_DATA_SUCCESS]: (state, action) => ({
      ...state,
      isVacanciesLoading: false,
      vacancies: action.payload,
    }),
    [HOME_VACANCIES_DATA_FAILURE]: state => ({
      ...state,
      isVacanciesLoading: false,
      vacancies: [],
    }),
  },
  INITIAL_STATE
);
