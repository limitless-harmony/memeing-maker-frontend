import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import meme from 'assets/memes/meme.png';
import meme1 from 'assets/memes/meme1.png';
import meme2 from 'assets/memes/meme2.png';
import meme3 from 'assets/memes/meme3.png';
import meme4 from 'assets/memes/meme4.png';
import { buttonBorder, black } from 'styles/colors';
import { name, tagline } from 'helpers';

class Featured extends Component {
  greet = () => {};

  render() {
    return (
      <StyledFeatured>
        <Tagline>{tagline}</Tagline>
        <Title>{name}</Title>
        <SectionHeading>This Week’s Featured Memes</SectionHeading>
        <Container>
          <Meme>
            <MemeCard src={meme} />
          </Meme>
          <Meme>
            <MemeCard src={meme1} />
          </Meme>
          <Meme>
            <MemeCard src={meme2} />
          </Meme>
          <Meme>
            <MemeCard src={meme3} />
          </Meme>
          <Meme>
            <MemeCard src={meme4} />
          </Meme>
        </Container>
        <Button color={buttonBorder} outline rounded>
          <ButtonText>More</ButtonText>
        </Button>
      </StyledFeatured>
    );
  }
}

const StyledFeatured = styled.div`
  margin: ${calculateRem(10)} auto ${calculateRem(40)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Container = styled.div`
  margin: ${calculateRem(10)} auto ${calculateRem(40)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;

const Meme = styled.div`
  width: 48.5%;
`;

const Title = styled.div`
  margin: 0 auto ${calculateRem(60)};
  line-height: ${calculateRem(43)};
  font-size: ${calculateRem(36)};
`;

const Tagline = styled.div`
  margin: 0 auto;
`;

const SectionHeading = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(16)} auto;
`;

const ButtonText = styled.div`
  color: ${black};
`;

export default Featured;
