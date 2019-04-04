import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import Masonry from 'components/Masonry';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import meme from 'assets/memes/meme.png';
import meme1 from 'assets/memes/meme1.png';
import meme2 from 'assets/memes/meme2.png';
import meme3 from 'assets/memes/meme3.png';
import meme4 from 'assets/memes/meme4.png';
import { buttonBorder, black } from 'styles/colors';

class Featured extends Component {
  greet = () => {};

  render() {
    return (
      <StyledFeatured>
        <Slogan>Make meaning. Share meaning.</Slogan>
        <Title>Memeing Maker</Title>
        <SectionHeading>This Week’s Featured Memes</SectionHeading>
        <Masonry>
          <MemeCard src={meme} />
          <MemeCard src={meme1} />
          <MemeCard src={meme2} />
          <MemeCard src={meme3} />
          <MemeCard src={meme4} />
        </Masonry>
        <Button color={buttonBorder} outline rounded>
          <ButtonText>More</ButtonText>
        </Button>
      </StyledFeatured>
    );
  }
}

const StyledFeatured = styled.div`
  margin: ${calculateRem(40)} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  margin: 0 auto ${calculateRem(60)};
  line-height: ${calculateRem(43)};
  font-size: ${calculateRem(36)};
`;

export const Slogan = styled.div`
  margin: 0 auto;
`;
export const SectionHeading = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(16)} auto;
`;

const ButtonText = styled.div`
  color: ${black};
`;

export default Featured;
