import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import LoginPage from 'pages/Login';
import AuthPage from 'pages/Authentication';
import RulesOfPlay from 'components/Reaction';

import GlobalStyles from 'styles/globals';
import AuthRoutes from 'routes/Auth';

import Navbar from 'components/Header';
import EditUserProfile from 'pages/EditProfile';

const routes = (
  <>
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/auth/:provider" component={AuthPage} />
      <Route exact path="/rules" component={RulesOfPlay} />
      <Route exact path="/edit-profile" component={EditUserProfile} />
      <Route component={AuthRoutes} />
    </Switch>
  </>
);

export default routes;
