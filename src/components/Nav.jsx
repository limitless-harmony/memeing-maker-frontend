import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { calculateRem, mobileWidth } from 'styles';
import { ShareButton, Discover, Create } from 'components/Icons';
import { white } from 'styles/colors';
import { showModal, toggleMenu } from 'actions/common';
import { savePathFrom } from 'actions/auth';

export class Nav extends Component {
  share = () => {
    const { authenticated, actions, location, history } = this.props;
    if (!authenticated) {
      const { pathname } = location;
      actions.savePathFrom(pathname);
      return history.push('/login');
    }
    return actions.showModal('share');
  };

  toggleMenu = () => {
    const { actions } = this.props;
    return actions.toggleMenu();
  };

  render() {
    return (
      <StyledNav>
        <NavItem first>
          <Link to="/">
            <Discover />
          </Link>
          Discover
        </NavItem>
        <NavItem>
          <Link to="/create">
            <Create />
          </Link>
          Create
        </NavItem>
        <NavItem>
          <ShareButton width="25" height="25" onClick={this.share} />
          Share
        </NavItem>
      </StyledNav>
    );
  }
}

const StyledNav = styled.header`
  display: flex;
  justify-content: center;
  /* margin: ${calculateRem(5)}; */
  padding: ${calculateRem(5)} ${calculateRem(14)};
  background: ${white};
  position: fixed;
  z-index: 10;
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  left: 50%;
  bottom: 0%;
  transform: translateX(-50%);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0 ${calculateRem(10)};
`;

const mapStateToProps = state => ({
  location: state.router.location,
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, toggleMenu, savePathFrom },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
