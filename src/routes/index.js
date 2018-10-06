import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../containers/private-route';
import Login from '../modules/login/containers/login';
import Registration from '../modules/registration/containers/registration';
import HomePage from '../modules/home-page/containers/home-page';
import InfoPage from '../modules/info-page/containers/info-page';
import Companies from '../modules/companies/components/companies/companies';
import Profile from '../modules/profile/containers/profile';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Registration} />
    <Route path="/about" component={InfoPage} />
    <PrivateRoute path="/companies/:action" component={Companies} redirectPath="/" />
    <PrivateRoute path="/profile" component={Profile} redirectPath="/" />
    <PrivateRoute path="/profile/:action" component={Profile} redirectPath="/" />
  </Switch>
);

export default routes;
