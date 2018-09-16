import { combineReducers } from 'redux';
import HomePageReducer from '../modules/home-page/reducers/home-page';
import RegistrationReducer from '../modules/registration/reducers/registration';
import LoginReducer from '../modules/login/reducers/login';

export default combineReducers({
  home: HomePageReducer,
  registration: RegistrationReducer,
  user: LoginReducer,
});
