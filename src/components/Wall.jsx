import React from 'react';
import MemeContainer from 'components/MemeContainer';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { tagline } from 'helpers';
import { dark } from 'styles/colors';

const MemeWall = ({ wall }) => {
  return (
    <Container>
      <Tagline>{tagline}</Tagline>
      <WallTitle>{wall.name}</WallTitle>
      <MemeContainer memes={wall.memes} />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${calculateRem(18)} auto ${calculateRem(40)};
  width: 100%;
`;

const WallTitle = styled.div`
  margin: ${calculateRem(5)} auto ${calculateRem(50)};
  padding: ${calculateRem(14)} ${calculateRem(25)};
  border: ${calculateRem(3)} solid ${dark};
  border-radius: ${calculateRem(7)};
  box-sizing: border-box;
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  text-align: center;
  font-size: ${calculateRem(23)};
  line-height: ${calculateRem(27)};
  width: 80%;
`;

const Tagline = styled.div`
  margin: 0 auto;
`;

export default MemeWall;
