import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../containers/private-route';
import Login from '../modules/login/containers/login';
import Registration from '../modules/registration/containers/registration';
import HomePage from '../modules/home-page/containers/home-page';
import InfoPage from '../modules/info-page/containers/info-page';
import Companies from '../modules/companies/components/companies/companies';
import Vacancies from '../modules/vacancies/components/vacancies/vacancies';
import Profile from '../modules/profile/containers/profile';
import VacancyPage from '../modules/vacancies/containers/vacancy-page';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Registration} />
    <Route path="/about" component={InfoPage} />
    <Route path="/vacancies/get/:id" component={VacancyPage} redirectPath="/" />
    <PrivateRoute path="/companies/:action" component={Companies} redirectPath="/" />
    <PrivateRoute path="/vacancies/:action" component={Vacancies} redirectPath="/" />
    <PrivateRoute path="/profile" component={Profile} redirectPath="/" />
    <PrivateRoute path="/profile/:action" component={Profile} redirectPath="/" />
  </Switch>
);

export default routes;
