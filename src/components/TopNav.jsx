import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { calculateRem, mobileWidth } from 'styles';
import { Ellipsis } from 'components/Icons';
import { white } from 'styles/colors';
import { toggleMenu } from 'actions/common';

export class TopNav extends Component {
  toggleMenu = () => {
    const { actions } = this.props;
    return actions.toggleMenu();
  };

  render() {
    return (
      <StyledTopNav>
        <NavItem last>
          <Ellipsis onClick={this.toggleMenu} />
        </NavItem>
      </StyledTopNav>
    );
  }
}

const StyledTopNav = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${calculateRem(30)};
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
  align-items: center;
  cursor: pointer;
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ toggleMenu }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(TopNav);
