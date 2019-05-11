import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Featured from 'pages/Featured';
import LoginPage from 'pages/Login';
import AuthPage from 'pages/Authentication';

import GlobalStyles from 'styles/globals';
import AuthRoutes from 'routes/Auth';

import Navbar from 'components/Header';

const routes = (
  <>
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Featured} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/auth/:provider" component={AuthPage} />
      <Route component={AuthRoutes} />
    </Switch>
  </>
);

export default routes;