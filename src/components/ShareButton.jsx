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
    const { origin, pathname } = window.location;
    const { network, actions } = this.props;
    const path = this.getPath(pathname);
    const url = `${origin}${path}`;
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
  location: state.router.location,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareButton);
