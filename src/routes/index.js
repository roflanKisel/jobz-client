import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/components/login/login';
import Registration from '../modules/registration/components/registration/registration';
import HomePage from '../modules/home-page/containers/home-page';
import InfoPage from '../modules/info-page/components/info-page/info-page';
import Companies from '../modules/companies/components/companies/companies';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Registration} />
    <Route path="/about" component={InfoPage} />
    <Route path="/companies/:action" component={Companies} />
  </Switch>
);

export default routes;
