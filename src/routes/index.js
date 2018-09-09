import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../modules/login/components/login/login';
import Registration from '../modules/registration/components/registration/registration';

const routes = (
  <Switch>
    <Route exact path="/" component={Registration} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Registration} />
  </Switch>
);

export default routes;
