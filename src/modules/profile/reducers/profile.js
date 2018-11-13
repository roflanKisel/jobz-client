import { handleActions } from 'redux-actions';
import * as actions from '../constants/profile';

const INITIAL_STATE = {
  isLoading: false,
  isFailure: false,
  vacancies: [],
  companies: [],
};

export default handleActions({
  [actions.PROFILE_VACANCIES_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.PROFILE_VACANCIES_SUCCESS]: (state, action) => ({
    ...state,
    vacancies: action.payload,
  }),
  [actions.PROFILE_VACANCIES_FAILURE]: () => ({
    ...INITIAL_STATE,
    isFailure: true,
  }),
  [actions.PROFILE_COMPANIES_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.PROFILE_COMPANIES_SUCCESS]: (state, action) => ({
    ...state,
    companies: action.payload,
  }),
  [actions.PROFILE_COMPANIES_FAILURE]: () => ({
    ...INITIAL_STATE,
    isFailure: true,
  }),
})
