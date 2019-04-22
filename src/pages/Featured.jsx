import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { calculateRem } from 'styles';
import { getFeatured } from 'actions/meme';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import { buttonBorder, black } from 'styles/colors';
import { name, tagline } from 'helpers';

class Featured extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getFeatured();
  }

  render() {
    const { featured } = this.props;
    return (
      <StyledFeatured>
        <Tagline>{tagline}</Tagline>
        <Title>{name}</Title>
        <SectionHeading>This Week’s Featured Memes</SectionHeading>
        <Container>
          {featured ? (
            featured.map(meme => (
              <Meme key={meme.name}>
                <MemeCard
                  small
                  src={meme.image}
                  topText={meme.topText}
                  bottomText={meme.bottomText}
                />
              </Meme>
            ))
          ) : (
            <SectionHeading>No featured meme for this week!</SectionHeading>
          )}
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

const mapStateToProps = state => ({
  featured: state.meme.featured,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getFeatured }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
