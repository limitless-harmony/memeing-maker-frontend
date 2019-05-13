import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { calculateRem, mobileWidth } from 'styles';
import { white, dark } from 'styles/colors';

export class Menu extends Component {
  handleClick = () => {};

  isPage = page => {
    const {
      location: { pathname },
    } = this.props;
    return pathname.includes(page);
  };

  render() {
    const { meme, wall } = this.props;
    return (
      <StyledMenu>
        {meme && (
          <MenuItem>
            Meme created by
            <Inlet>
              <Link to={`/users/${meme.user.id}`}>@username123</Link>
            </Inlet>
          </MenuItem>
        )}
        <MenuItem>
          Meme wall created by
          <Inlet>
            <Link to="users/">@username123</Link>
          </Inlet>
        </MenuItem>
        <MenuItem>Flag meme</MenuItem>
        <MenuItem>View player profile</MenuItem>
        <MenuItem>View your profile</MenuItem>
        <MenuItem>View rules of play</MenuItem>
        <MenuItem>Log out</MenuItem>
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

const mapStateToProps = state => ({
  location: state.router.location,
});

export default connect(mapStateToProps)(Menu);
