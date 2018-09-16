import { handleActions } from 'redux-actions';
import {
  REGISTRATION_DATA_REQUEST,
  REGISTRATION_DATA_SUCCESS,
  REGISTRATION_DATA_FAILURE,
} from '../constants/registration';

const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
};

export default handleActions(
  {
    [REGISTRATION_DATA_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [REGISTRATION_DATA_SUCCESS]: state => ({
      ...state,
      isLoading: false,
      isSuccess: true,
    }),
    [REGISTRATION_DATA_FAILURE]: state => ({
      ...state,
      isLoading: false,
      isSuccess: false,
    }),
  },
  INITIAL_STATE
);
