import { combineReducers } from 'redux';
import HomePageReducer from '../modules/home-page/reducers/home-page';

export default combineReducers({
  home: HomePageReducer,
});
