import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticate,
  redirectPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate ? (
        <Component {...props}>{props.children}</Component>
      ) : (
        <Redirect to={redirectPath} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticate: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default PrivateRoute;
