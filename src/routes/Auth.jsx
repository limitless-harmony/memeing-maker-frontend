import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { savePathFrom } from 'actions/auth';
import CreateRoute from 'pages/CreateMeme';
import SingleMeme from 'pages/Single';
import MemeWall from 'pages/Wall';

export class Auth extends Component {
  componentDidMount() {
    const { authenticated, history, actions } = this.props;
    if (!authenticated) {
      const { pathname } = history.location;
      actions.savePathFrom(pathname);
      return history.push('/login');
    }
    return null;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/create" component={CreateRoute} />
        <Route exact path="/memes/:id" component={SingleMeme} />
        <Route exact path="/meme-walls/:id" component={MemeWall} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ savePathFrom }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
