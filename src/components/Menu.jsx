import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { calculateRem, mobileWidth } from 'styles';
import { white, dark } from 'styles/colors';
import toggleMenu from 'actions/menu';
import { logout } from 'actions/auth';

export class Menu extends Component {
  handleClick = () => {};

  logout = () => {
    const { actions, history } = this.props;
    actions.logout();
    actions.toggleMenu();
    history.push('/');
  };

  login = () => {
    const { actions, history } = this.props;
    actions.toggleMenu();
    history.push('/login');
  };

  isPage = page => {
    const {
      location: { pathname },
    } = this.props;
    return pathname.includes(page);
  };

  render() {
    const { meme, wall, authenticated } = this.props;
    return (
      <StyledMenu>
        {meme && (
          <>
            <MenuItem>
              Meme created by
              <Inlet>
                <Link to={`/users/${meme.creator.id}`}>
                  @{meme.creator.name}
                </Link>
              </Inlet>
            </MenuItem>
            <MenuItem>Flag meme</MenuItem>
          </>
        )}
        {wall && (
          <MenuItem>
            Meme wall created by
            <Inlet>
              <Link to={`/users/${wall.creator.id}`}>@{wall.creator.name}</Link>
            </Inlet>
          </MenuItem>
        )}
        <MenuItem>View your profile</MenuItem>
        <MenuItem>View rules of play</MenuItem>
        {authenticated ? (
          <MenuItem onClick={this.logout}>Log out</MenuItem>
        ) : (
          <MenuItem onClick={this.login}>Login</MenuItem>
        )}
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: ${white};
  position: fixed;
  z-index: 5;
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  padding: ${calculateRem(60)} ${calculateRem(40)};
  font-size: ${calculateRem(15)};
  line-height: ${calculateRem(23)};
`;

const MenuItem = styled.div`
  cursor: pointer;
  color: ${dark};
  width: 100%;
`;
const Inlet = styled.div`
  padding: 0 ${calculateRem(40)};
  box-sizing: border-box;
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logout, toggleMenu }, dispatch),
});

const mapStateToProps = state => ({
  meme: state.meme.current,
  location: state.router.location,
  authenticated: state.auth.authenticated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
