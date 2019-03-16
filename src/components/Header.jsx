import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { calculateRem, mobileWidth } from 'styles';
import { ShareButton, Discover, Ellipsis, Create } from 'components/Icons';
import { white } from 'styles/colors';
import { showModal } from 'actions/modal';

export class Header extends Component {
  static propTypes = {};

  share = () => {
    const { isLoggedIn, actions } = this.props;
    if (!isLoggedIn) {
      return actions.showModal();
    }
    // TODO: Share the meme/view
    return true;
  };

  render() {
    return (
      <StyledHeader>
        <NavLeft>
          <NavItem first>
            <Link to="/discover">
              <Discover />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/create">
              <Create />
            </Link>
          </NavItem>
          <NavItem>
            <ShareButton width="18" height="18" onClick={this.share} />
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
  cursor: pointer;
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

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ showModal }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
