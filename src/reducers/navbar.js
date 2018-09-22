import { handleActions } from 'redux-actions';
import { NAVBAR_TITLE_SET } from '../constants/navbar';

const INITIAL_STATE = {
  title: 'Home',
};

export default handleActions({
  [NAVBAR_TITLE_SET]: (state, action) => ({
    ...state,
    title: action.payload,
  }),
}, INITIAL_STATE);
