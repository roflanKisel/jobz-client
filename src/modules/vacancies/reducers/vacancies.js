import { handleActions } from 'redux-actions';
import * as actions from '../constants/vacancies';

const INITIAL_STATE = {
  isLoading: false,
  isFailure: false,
  vacancy: null,
  createdVacancy: null,
  companies: [],
  isCompaniesLoadFailure: false,
  favoriteSuccess: false,
  favoriteFailure: false,
};

export default handleActions({
  [actions.VACANCIES_USER_COMPANIES_SUCCESS]: (state, action) => ({
    ...state,
    companies: action.payload,
  }),
  [actions.VACANCIES_USER_COMPANIES_FAILURE]: () => ({
    ...INITIAL_STATE,
  }),
  [actions.VACANCIES_CREATE_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.VACANCIES_CREATE_SUCCESS]: (_state, action) => ({
    ...INITIAL_STATE,
    createdVacancy: action.payload,
  }),
  [actions.VACANCIES_CREATE_FAILURE]: () => ({
    ...INITIAL_STATE,
    isFailure: true,
  }),
  [actions.VACANCIES_CREATE_CLEAR]: () => ({
    ...INITIAL_STATE,
  }),
  [actions.VACANCY_REQUEST]: () => ({
    isLoading: true,
  }),
  [actions.VACANCY_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    isFailure: false,
    vacancy: action.payload,
  }),
  [actions.VACANCY_FAILURE]: () => ({
    ...INITIAL_STATE,
    isLoading: false,
    isFailure: true,
  }),
  [actions.VACANCY_FAVORITE_ADD_SUCCESS]: () => ({
    ...INITIAL_STATE,
    favoriteSuccess: true,
  }),
  [actions.VACANCY_FAVORITE_CLEAR_STATE]: () => ({
    ...INITIAL_STATE,
  }),
}, INITIAL_STATE);
