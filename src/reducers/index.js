import { combineReducers } from 'redux';
import HomePageReducer from '../modules/home-page/reducers/home-page';
import RegistrationReducer from '../modules/registration/reducers/registration';
import LoginReducer from '../modules/login/reducers/login';
import NavbarReducer from './navbar';
import CompaniesReducer from '../modules/companies/reducers/companies';
import VacanciesReducer from '../modules/vacancies/reducers/vacancies';

export default combineReducers({
  home: HomePageReducer,
  registration: RegistrationReducer,
  user: LoginReducer,
  navbar: NavbarReducer,
  companies: CompaniesReducer,
  vacancies: VacanciesReducer,
});
