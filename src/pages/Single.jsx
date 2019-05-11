import React from 'react';
import styled from 'styled-components';

import meme from 'assets/memes/meme.png';
import { calculateRem } from 'styles';
import MemeCard from 'components/MemeCard';
import { Container } from 'pages/Wall';
import { ThanksReaction } from 'components/Icons';
import { black } from 'styles/colors';

const Single = () => (
  <Container>
    <MemeCard square src={meme} />
    <ReactionContainer>
      <ThanksReaction />
    </ReactionContainer>
    <ReactionCount>200</ReactionCount>
  </Container>
);

const ReactionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${calculateRem(6)} ${calculateRem(10)};
  border: 2px solid ${black};
  border-radius: 50%;
  box-sizing: border-box;
  width: ${calculateRem(53)};
  height: ${calculateRem(53)};

  svg,
  img {
    display: block;
  }
`;
const ReactionCount = styled.div`
  font-size: ${calculateRem(11)};
  line-height: ${calculateRem(13)};
`;

export default Single;