import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import Masonry from 'components/Masonry';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import Yes from 'assets/images/yes.png';
import Sense from 'assets/images/sense.jpg';
import Duh from 'assets/images/duh.jpg';
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
          <MemeCard
            imageUrl="https://loremflickr.com/240/320"
            topText="Randomly generated"
            bottomText="New every time"
          />
          <MemeCard
            imageUrl={Yes}
            topText="A top text"
            bottomText="A bottom text"
          />
          <MemeCard
            imageUrl={Sense}
            topText="When you know"
            bottomText="And you know that you know"
          />
          <MemeCard
            imageUrl={Duh}
            topText="You think you know me"
            bottomText="Duh! You have no idea. I am like the wind!"
          />
          <MemeCard
            imageUrl="https://loremflickr.com/320/240"
            topText="You think you know me"
            bottomText="Duh! You have no idea. I am like the wind!"
          />
          <MemeCard
            imageUrl="https://loremflickr.com/240/320"
            topText="Randomly generated"
            bottomText="New every time"
          />
          <MemeCard
            imageUrl="https://loremflickr.com/240/320"
            topText="Randomly generated"
            bottomText="New every time"
          />
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
