import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateRoute from 'pages/CreateMeme';
import SingleMeme from 'pages/Single';
import MemeWall from 'pages/Wall';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/create" component={CreateRoute} />
        <Route exact path="/memes/:id" component={SingleMeme} />
        <Route exact path="/meme-walls/:id" component={MemeWall} />
      </Switch>
    </React.Fragment>
  );
};

export default AuthRoutes;
