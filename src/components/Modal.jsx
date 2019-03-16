import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideModal } from 'actions/modal';
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
  z-index: 5;
  text-align: center;
  padding: 0 ${calculateRem(14)};
  background: ${white};
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: ${mobileWidth};
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  padding: ${calculateRem(14)} 0;
  height: ${calculateRem(40)};
  width: 100%;
`;

const CloseButton = styled.span`
  border-radius: 50%;
  border: 1px solid ${buttonBorder};
  padding: ${calculateRem(2)};
  cursor: pointer;
  vertical-align: center;
  width: ${calculateRem(25)};
  height: ${calculateRem(25)};
`;

Modal.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Modal);
