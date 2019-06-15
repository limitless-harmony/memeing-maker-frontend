import React from 'react';
import styled from 'styled-components';

import { calculateRem, mobileWidth } from 'styles';
import { white, dark } from 'styles/colors';

import image from 'assets/images/nengi.png';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import { ArrowHead } from './Icons';

const ProfileOnboarding = ({ hide }) => {
  return (
    <Container>
      <StyledMenu>
        <Main>
          <Header>Let’s get started!</Header>
          <Header>
            Create your <strong>profile meme</strong>
          </Header>
          <Left>
            <Name>
              <Text>Player name</Text>
              <ArrowHead height="16" />
            </Name>
            <Others>
              <Section>
                <Text>Meme text</Text>
                <ArrowHead height="16" />
              </Section>
              <Section>
                <Text>Profile image</Text>
                <ArrowHead height="16" />
              </Section>
              <Section>
                <Text>Meme text</Text>
                <ArrowHead height="16" />
              </Section>
            </Others>
          </Left>
          <Right>
            <Username>@TheNengers</Username>
            <MemeCard
              small
              src={image}
              topText="Open your eyes"
              bottomText="The dream is here and now"
            />
          </Right>
          <ActionButton>
            <Button outline rounded onClick={hide}>
              Let{"'"}s Go!
            </Button>
          </ActionButton>
        </Main>
      </StyledMenu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  max-width: ${calculateRem(mobileWidth)};
  box-sizing: border-box;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${white};
  z-index: 6;
  height: 75%;
  max-height: ${calculateRem(640)};
  width: 100%;
  max-width: ${calculateRem(mobileWidth)};
  border: ${calculateRem(2)} solid ${dark};
  box-sizing: border-box;
  border-radius: ${calculateRem(15)};
  margin: ${calculateRem(40)} ${calculateRem(30)};
  padding: ${calculateRem(40)} 0;
  font-size: ${calculateRem(22)};
`;

const Main = styled.div`
  margin: ${calculateRem(10)} auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${calculateRem(10)};
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`;

const Right = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Name = styled(Section)`
  margin: ${calculateRem(30)} auto ${calculateRem(8)};
`;

const Left = styled.div`
  width: 48%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Others = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: ${calculateRem(20)} auto;
`;

const Text = styled.div`
  font-size: ${calculateRem(11)};
`;

const Username = styled.div`
  font-size: ${calculateRem(13)};
  margin: ${calculateRem(30)} auto ${calculateRem(8)};
`;

const Header = styled.div`
  font-size: ${calculateRem(20)};
  text-align: center;
  width: 100%;
`;

const ActionButton = styled.div`
  margin: ${calculateRem(40)} auto;
  width: 100%;
`;

export default ProfileOnboarding;
