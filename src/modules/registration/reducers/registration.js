import { handleActions } from 'redux-actions';
import * as registerActions from '../constants/registration';

const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
};

export default handleActions(
  {
    [registerActions.REGISTRATION_DATA_REQUEST]: state => ({
      ...state,
      isLoading: true,
    }),
    [registerActions.REGISTRATION_DATA_SUCCESS]: state => ({
      ...state,
      isLoading: false,
      isSuccess: true,
    }),
    [registerActions.REGISTRATION_DATA_FAILURE]: state => ({
      ...state,
      isLoading: false,
      isSuccess: false,
    }),
  },
  INITIAL_STATE
);
