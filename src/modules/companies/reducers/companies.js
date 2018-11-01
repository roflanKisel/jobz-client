import { handleActions } from 'redux-actions';
import * as actions from '../constants/companies';

const INITIAL_STATE = {
  isLoading: false,
  isFailure: false,
  company: null,
};

export default handleActions({
  [actions.COMPANIES_CREATE_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [actions.COMPANIES_CREATE_SUCCESS]: (_state, action) => ({
    ...INITIAL_STATE,
    company: action.payload,
  }),
  [actions.COMPANIES_CREATE_FAILURE]: () => ({
    ...INITIAL_STATE,
    isFailure: true,
  }),
  [actions.COMPANIES_CREATE_CLEAR]: () => ({
    ...INITIAL_STATE,
  }),
}, INITIAL_STATE);
