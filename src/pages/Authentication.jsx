import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'query-string';
import { bindActionCreators } from 'redux';

import { login, clearPathFrom } from 'actions/auth';
import Loading from 'components/Loading';

export class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { match, location } = props;
    const { code } = parse(location.search);
    const { provider } = match.params;
    const { REACT_APP_API_URL } = process.env;
    if (
      !code &&
      (provider === 'facebook' ||
        provider === 'google' ||
        provider === 'linkedin')
    ) {
      window.location = `${REACT_APP_API_URL}/auth/${provider}`;
    }
  }

  componentDidMount = async () => {
    const {
      actions,
      match,
      previousPath,
      location,
      history,
      authenticated,
    } = this.props;
    const { code } = parse(location.search);
    const { provider } = match.params;
    if (!code) return null;
    const path = previousPath || '/';
    if (authenticated) return history.push(path);
    await actions.login(code, provider);
    history.push(path);
    return actions.clearPathFrom();
  };

  render() {
    return <Loading />;
  }
}

const mapStateToProps = state => ({
  previousPath: state.auth.previous,
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ login, clearPathFrom }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
