import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/components/login/login';
import Registration from '../modules/registration/components/registration/registration';
import HomePage from '../modules/home-page/containers/home-page';
import InfoPage from '../modules/info-page/components/info-page/info-page';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Registration} />
    <Route path="/about" component={InfoPage} />
  </Switch>
);

export default routes;
