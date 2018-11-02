import { handleActions } from 'redux-actions';
import * as actions from '../constants/vacancies';

const INITIAL_STATE = {
  isLoading: false,
  isFailure: false,
  vacancy: null,
  companies: [],
  isCompaniesLoadFailure: false,
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
    vacancy: action.payload,
  }),
  [actions.VACANCIES_CREATE_FAILURE]: () => ({
    ...INITIAL_STATE,
    isFailure: true,
  }),
  [actions.VACANCIES_CREATE_CLEAR]: () => ({
    ...INITIAL_STATE,
  }),
}, INITIAL_STATE);
