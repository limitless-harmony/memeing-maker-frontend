import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateRoute from 'pages/CreateMeme';
import SingleMeme from 'pages/Single';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/create" component={CreateRoute} />
        <Route exact path="/memes/:id" component={SingleMeme} />
      </Switch>
    </React.Fragment>
  );
};

export default AuthRoutes;
