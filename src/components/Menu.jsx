import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { calculateRem, mobileWidth } from 'styles';
import { white, dark } from 'styles/colors';
import { flagMeme } from 'actions/meme';
import { toggleMenu } from 'actions/common';
import { logout, savePathFrom } from 'actions/auth';

export class Menu extends Component {
  flagMeme = () => {
    const { actions, meme } = this.props;
    actions.toggleMenu();
    actions.flagMeme(meme.id);
  };

  logout = () => {
    const { actions, history } = this.props;
    actions.logout();
    actions.toggleMenu();
    history.push('/');
  };

  login = () => {
    const { actions, history, location } = this.props;
    const { pathname } = location;
    actions.savePathFrom(pathname);
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
    const { meme, wall, authenticated, user } = this.props;
    return (
      <Container>
        <StyledMenu>
          {user && user.isAdmin && (
            <>
              <MenuItem>
                <StyledLink to="/admin">Admin Page</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/admin/rules">Add a Rule of play</StyledLink>
              </MenuItem>
            </>
          )}
          {meme && this.isPage('/memes/') && (
            <>
              <MenuItem>
                Meme created by{' '}
                <StyledLink to={`/users/${meme.creator.id}`}>
                  @{meme.creator.username}
                </StyledLink>
              </MenuItem>
              <MenuItem onClick={this.flagMeme}>Flag meme</MenuItem>
            </>
          )}
          {wall && this.isPage('/walls/') && (
            <MenuItem>
              Meme wall created by{' '}
              <StyledLink to={`/users/${wall.creator.id}`}>
                @{wall.creator.username}
              </StyledLink>
            </MenuItem>
          )}
          {authenticated && (
            <MenuItem>
              <StyledLink to={`/users/${user.id}`}>
                View your profile
              </StyledLink>
            </MenuItem>
          )}
          <MenuItem>
            <StyledLink to="/rules">View rules of play</StyledLink>
          </MenuItem>
          {authenticated ? (
            <MenuItem onClick={this.logout}>Log out</MenuItem>
          ) : (
            <MenuItem onClick={this.login}>Login</MenuItem>
          )}
        </StyledMenu>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${white};
  z-index: 6;
  height: 80%;
  max-height: ${calculateRem(640)};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  border: ${calculateRem(2)} solid ${dark};
  box-sizing: border-box;
  border-radius: ${calculateRem(15)};
  margin: ${calculateRem(60)} ${calculateRem(40)};
  padding: ${calculateRem(60)} ${calculateRem(20)};
  font-size: ${calculateRem(22)};
  line-height: ${calculateRem(28)};
`;

const MenuItem = styled.div`
  cursor: pointer;
  color: ${dark};
  margin-bottom: ${calculateRem(60)};
  text-align: center;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${dark};
  text-decoration: none;
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { logout, toggleMenu, savePathFrom, flagMeme },
    dispatch
  ),
});

const mapStateToProps = state => ({
  meme: state.meme.current,
  wall: state.wall.current,
  location: state.router.location,
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
