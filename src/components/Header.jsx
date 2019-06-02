import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { calculateRem, mobileWidth } from 'styles';
import { ShareButton, Discover, Ellipsis, Create } from 'components/Icons';
import { white } from 'styles/colors';
import { showModal, toggleMenu } from 'actions/common';
import { savePathFrom } from 'actions/auth';

export class Header extends Component {
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
      <StyledHeader>
        <NavLeft>
          <NavItem first>
            <Link to="/">
              <Discover />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/create">
              <Create />
            </Link>
          </NavItem>
          <NavItem>
            <ShareButton width="30" height="30" onClick={this.share} />
          </NavItem>
        </NavLeft>
        <NavRight>
          <NavItem last>
            <Ellipsis onClick={this.toggleMenu} />
          </NavItem>
        </NavRight>
      </StyledHeader>
    );
  }
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${calculateRem(48)};
  padding: 0 ${calculateRem(14)};
  background: ${white};
  position: fixed;
  z-index: 10;
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: ${({ first, last }) =>
    first
      ? `0 ${calculateRem(8)} 0 0`
      : last
      ? `0 0 0 ${calculateRem(8)}`
      : `0 ${calculateRem(8)}`};
`;

const NavSection = styled.div`
  display: flex;
  flex: 1;
`;

const NavLeft = styled(NavSection)`
  justify-content: flex-start;
`;

const NavRight = styled(NavSection)`
  justify-content: flex-end;
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
)(Header);
