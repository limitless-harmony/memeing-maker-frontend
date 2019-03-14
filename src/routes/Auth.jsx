import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateRoute from 'pages/CreateMeme';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/create" component={CreateRoute} />
      </Switch>
    </React.Fragment>
  );
};

export default AuthRoutes;
