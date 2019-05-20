import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { dark } from 'styles/colors';
import MemeContainer from 'components/MemeContainer';
import Tagline from 'components/Tagline';

const MemeWall = ({ wall }) => {
  return (
    <Container>
      <Tagline />
      {wall && (
        <>
          <WallTitle>{wall.name}</WallTitle>
          {wall.memes.length ? (
            <MemeContainer memes={wall.memes} />
          ) : (
            <SectionHeading>No meme available in this wall yet!</SectionHeading>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
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

const SectionHeading = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(16)} auto;
`;
export default MemeWall;
