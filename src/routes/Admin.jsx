import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { savePathFrom } from 'actions/auth';
import CreateRuleRoute from 'pages/CreateRule';
import AdminPage from 'pages/Admin';

export class Auth extends Component {
  componentDidMount() {
    const { history, user } = this.props;
    if (user && !user.isAdmin) {
      return history.push('/');
    }
    return null;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/rules" component={CreateRuleRoute} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ savePathFrom }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
