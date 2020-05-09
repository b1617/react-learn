import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { isLogged } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        isLogged ? <RouteComponent {...routerProps} /> : <Redirect to={'/'} />
      }
    ></Route>
  );
}
