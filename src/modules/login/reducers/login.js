import { handleActions } from 'redux-actions';
import * as loginActions from '../constants/login';

const INITIAL_STATE = {
  userData: null,
  isLoggedIn: false,
  isLoading: false,
};

export default handleActions({
  [loginActions.LOGIN_SIGN_IN_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [loginActions.LOGIN_SIGN_IN_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    userData: action.payload,
  }),
  [loginActions.LOGIN_SIGN_IN_FAILURE]: () => ({
    ...INITIAL_STATE,
  }),
  [loginActions.LOGIN_SIGN_OUT_REQUEST]: () => ({
    isLoading: true,
  }),
  [loginActions.LOGIN_SIGN_OUT_SUCCESS]: () => ({
    ...INITIAL_STATE,
  }),
  [loginActions.LOGIN_SIGN_OUT_FAILURE]: state => ({
    ...state,
    isLoading: false,
  })
}, INITIAL_STATE);
