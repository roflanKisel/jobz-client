import { handleActions } from 'redux-actions';
import {
  LOGIN_SIGN_IN_FAILURE,
  LOGIN_SIGN_IN_REQUEST,
  LOGIN_SIGN_IN_SUCCESS,
  LOGIN_SIGN_OUT_FAILURE,
  LOGIN_SIGN_OUT_REQUEST,
  LOGIN_SIGN_OUT_SUCCESS,
} from '../constants/login';

const INITIAL_STATE = {
  userData: null,
  isLoggedIn: false,
  isLoading: false,
};

export default handleActions({
  [LOGIN_SIGN_IN_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [LOGIN_SIGN_IN_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    userData: action.payload,
  }),
  [LOGIN_SIGN_IN_FAILURE]: () => ({
    ...INITIAL_STATE,
  }),
  [LOGIN_SIGN_OUT_REQUEST]: () => ({
    isLoading: true,
  }),
  [LOGIN_SIGN_OUT_SUCCESS]: () => ({
    ...INITIAL_STATE,
  }),
  [LOGIN_SIGN_OUT_FAILURE]: state => ({
    ...state,
    isLoading: false,
  })
}, INITIAL_STATE);
