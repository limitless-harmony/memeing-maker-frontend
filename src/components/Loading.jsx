import React from 'react';
import styled from 'styled-components';

import { calculateRem, mobileWidth } from 'styles';
import { name, tagline, orgName, loadingText } from 'helpers';
import { white } from 'styles/colors';

const Loading = () => (
  <StyledLoading>
    <Tagline>{tagline}</Tagline>
    <Title>{name}</Title>
    <Tagline>by {orgName}</Tagline>
    <LoadingText>{loadingText}</LoadingText>
  </StyledLoading>
);

const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${calculateRem(14)};
  background: ${white};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 0%;
  overflow-y: auto;
  transform: translateX(-50%);
  z-index: 50;
`;

const Title = styled.div`
  margin: 0 auto;
  line-height: ${calculateRem(43)};
  font-size: ${calculateRem(36)};
`;

const Tagline = styled.div`
  margin: 0 auto;
`;

const LoadingText = styled.div`
  margin: ${calculateRem(60)} auto;
  line-height: ${calculateRem(29)};
  font-size: ${calculateRem(25)};
  &::after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ellipsis steps(4, end) 900ms infinite;
    animation: ellipsis steps(4, end) 900ms infinite;
    content: '...';
    width: 0px;
  }

  @keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }

  @-webkit-keyframes ellipsis {
    to {
      width: 1.25em;
    }
  }
`;

export default Loading;
