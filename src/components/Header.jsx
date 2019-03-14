import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { calculateRem, mobileWidth } from 'styles';
import { ShareButton, Discover, Ellipsis, Create } from 'components/Icons';
import { white } from 'styles/colors';

class Header extends Component {
  static propTypes = {};

  share = () => {};

  render() {
    return (
      <StyledHeader>
        <NavLeft>
          <NavItem first>
            <Discover />
          </NavItem>
          <NavItem>
            <Create />
          </NavItem>
          <NavItem>
            <ShareButton width="18" height="18" />
          </NavItem>
        </NavLeft>
        <NavRight>
          <NavItem last>
            <Ellipsis />
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
  height: ${calculateRem(36)};
  padding: 0 ${calculateRem(14)};
  background: ${white};
  position: fixed;
  width: 100%;
  max-width: ${mobileWidth};
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ first, last }) =>
    first
      ? `0 ${calculateRem(5)} 0 0`
      : last
      ? `0 0 0 ${calculateRem(5)}`
      : `0 ${calculateRem(5)}`};
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

export default Header;
