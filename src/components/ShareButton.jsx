import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { calculateRem } from 'styles';
import getShareLink from 'helpers/getShareLink';
import { hideModal } from 'actions/modal';

export class ShareButton extends PureComponent {
  getPath = pathname => {
    if (pathname === '/' || !pathname.includes('meme')) return '';
    return pathname;
  };

  onClick = () => {
    const { REACT_APP_APP_URL } = process.env;
    const {
      network,
      actions,
      router: { location },
    } = this.props;
    const path = this.getPath(location.pathname);
    const url = `${REACT_APP_APP_URL}${path}`;
    const shareUrl = getShareLink(url, network);
    window.open(shareUrl);
    actions.hideModal();
  };

  render() {
    const { children } = this.props;
    return (
      <Button
        role="button"
        tabIndex={0}
        onClick={this.onClick}
        onKeyPress={this.onKeyPress}
      >
        {children}
      </Button>
    );
  }
}

const Button = styled.div`
  margin: ${calculateRem(10)};
`;

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareButton);
