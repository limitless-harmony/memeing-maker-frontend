import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Featured from 'pages/Featured';
import GlobalStyles from 'styles/globals';
import Navbar from 'components/Header';

const routes = (
  <React.Fragment>
    <GlobalStyles />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Featured} />
    </Switch>
  </React.Fragment>
);

export default routes;
