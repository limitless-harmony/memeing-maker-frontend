import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideModal } from 'actions/common';
import { white, buttonBorder } from 'styles/colors';
import { calculateRem, mobileWidth } from 'styles';

export class Modal extends Component {
  close = () => {
    const { actions } = this.props;
    actions.hideModal();
  };

  render() {
    const { children } = this.props;
    return ReactDom.createPortal(
      <StyledModal>
        <Head>
          <CloseButton onClick={this.close}>&times;</CloseButton>
        </Head>
        {children}
      </StyledModal>,
      document.body
    );
  }
}

const StyledModal = styled.div`
  z-index: 20;
  text-align: center;
  padding: ${calculateRem(14)};
  background: ${white};
  height: 100%;
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  position: fixed;
  left: 50%;
  top: 0%;
  overflow-y: auto;
  transform: translateX(-50%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  width: 100%;
`;

const CloseButton = styled.span`
  border-radius: 50%;
  border: 1px solid ${buttonBorder};
  padding: ${calculateRem(2)};
  cursor: pointer;
  vertical-align: center;
  width: ${calculateRem(20)};
  height: ${calculateRem(20)};
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Modal);
