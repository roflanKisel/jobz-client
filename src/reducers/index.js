import { combineReducers } from 'redux';
import HomePageReducer from '../modules/home-page/reducers/home-page';
import RegistrationReducer from '../modules/registration/reducers/registration';
import LoginReducer from '../modules/login/reducers/login';
import NavbarReducer from './navbar';

export default combineReducers({
  home: HomePageReducer,
  registration: RegistrationReducer,
  user: LoginReducer,
  navbar: NavbarReducer,
});
