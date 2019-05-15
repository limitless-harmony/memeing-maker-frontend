import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideModal } from 'actions/modal';
import { calculateRem } from 'styles';
import {
  FacebookColored,
  GoogleColored,
  LinkedinColored,
} from 'components/Icons';

class Login extends Component {
  handleLogin = strategy => {
    const { history } = this.props;
    return history.push(`/auth/${strategy}`);
  };

  render() {
    return (
      <StyledLogin>
        <TextSection>Sign up or log in</TextSection>
        <TextSection>to create, share, & discover</TextSection>
        <TextSection> our full library of meaningful memes.</TextSection>
        <ButtonSection>
          <Button onClick={() => this.handleLogin('google')}>
            <GoogleColored />
          </Button>
          <Button onClick={() => this.handleLogin('facebook')}>
            <FacebookColored />
          </Button>
          <Button onClick={() => this.handleLogin('linkedin')}>
            <LinkedinColored />
          </Button>
        </ButtonSection>
      </StyledLogin>
    );
  }
}

const StyledLogin = styled.div`
  margin: ${calculateRem(-70)} auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const TextSection = styled.div`
  align-items: center;
  font-size: ${calculateRem(18)};
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${calculateRem(20)} auto;
`;

const Button = styled.div`
  cursor: pointer;
  margin: 0 ${calculateRem(12)};
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
