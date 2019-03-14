import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateRoute from 'pages/CreateMeme';
// import { bindActionCreators } from 'redux';

const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/create" component={CreateRoute} />
      </Switch>
    </React.Fragment>
  );
};

// Routes.propTypes = {
//   showModal: PropTypes.bool.isRequired,
// };

export default AuthRoutes;
