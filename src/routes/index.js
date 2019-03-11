import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import GlobalStyles from '../styles/globals';

const routes = (
  <React.Fragment>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
);

export default routes;
