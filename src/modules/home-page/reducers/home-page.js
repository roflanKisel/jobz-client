import { handleActions } from 'redux-actions';
import * as actions from '../constants/home-page';

const INITIAL_STATE = {
  companies: [],
  vacancies: [],
  isCompaniesLoading: false,
  isVacanciesLoading: false,
};

export default handleActions(
  {
    [actions.HOME_COMPANIES_DATA_REQUEST]: state => ({
      ...state,
      isCompaniesLoading: true,
    }),
    [actions.HOME_COMPANIES_DATA_SUCCESS]: (state, action) => ({
      ...state,
      isCompaniesLoading: false,
      companies: action.payload,
    }),
    [actions.HOME_COMPANIES_DATA_FAILURE]: state => ({
      ...state,
      isCompaniesLoading: false,
      companies: [],
    }),
    [actions.HOME_VACANCIES_DATA_REQUEST]: state => ({
      ...state,
      isVacanciesLoading: true,
    }),
    [actions.HOME_VACANCIES_DATA_SUCCESS]: (state, action) => ({
      ...state,
      isVacanciesLoading: false,
      vacancies: action.payload,
    }),
    [actions.HOME_VACANCIES_DATA_FAILURE]: state => ({
      ...state,
      isVacanciesLoading: false,
      vacancies: [],
    }),
  },
  INITIAL_STATE
);
