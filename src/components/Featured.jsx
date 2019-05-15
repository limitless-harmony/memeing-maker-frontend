import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateRem } from 'styles';
import { getFeatured } from 'actions/meme';
import MemeCard from 'components/MemeCard';
import Button from 'components/Button';
import { buttonBorder, black } from 'styles/colors';

export class Featured extends Component {
  async componentDidMount() {
    const { actions } = this.props;
    await actions.getFeatured();
  }

  render() {
    const { memes } = this.props;
    return (
      <StyledFeatured>
        {memes.length ? (
          <>
            <SectionHeading>This Week’s Featured Memes</SectionHeading>
            <Container>
              {memes.map(meme => (
                // eslint-disable-next-line no-underscore-dangle
                <Meme key={meme._id}>
                  <MemeCard
                    small
                    src={meme.image}
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                  />
                </Meme>
              ))}
            </Container>
            <Button color={buttonBorder} outline rounded>
              <ButtonText to="/login">More</ButtonText>
            </Button>
          </>
        ) : (
          <SectionHeading>No featured meme for this week!</SectionHeading>
        )}
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

const SectionHeading = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(16)} auto;
`;

const ButtonText = styled(Link)`
  color: ${black};
  text-decoration: none;
`;

const mapStateToProps = state => ({
  memes: state.meme.featured,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getFeatured }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
