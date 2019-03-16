import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import {
  FacebookColored,
  GoogleColored,
  LinkedinColored,
} from 'components/Icons';

class Authentication extends Component {
  handleLogin = strategy => {
    console.log(strategy);
  };

  loginWithGoogle = () => {
    return this.handleLogin('google');
  };

  loginWithFacebook = () => {
    return this.handleLogin('facebook');
  };

  loginWithLinkedIn = () => {
    return this.handleLogin('linkedIn');
  };

  render() {
    return (
      <StyledAuthentication>
        <TextSection>Sign up or log in</TextSection>
        <TextSection>to create, share, & discover</TextSection>
        <TextSection> our full library of meaningful memes.</TextSection>
        <ButtonSection>
          <Button onClick={this.loginWithGoogle}>
            <GoogleColored />
          </Button>
          <Button onClick={this.loginWithFacebook}>
            <FacebookColored />
          </Button>
          <Button onClick={this.loginWithLinkedIn}>
            <LinkedinColored />
          </Button>
        </ButtonSection>
      </StyledAuthentication>
    );
  }
}

const StyledAuthentication = styled.div`
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
  margin: 0 ${calculateRem(12)};
`;

export default Authentication;
