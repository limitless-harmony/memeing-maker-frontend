import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateRem } from 'styles';
import { getAMeme, reactToMeme } from 'actions/meme';
import MemeCard from 'components/MemeCard';
import Reaction from 'components/Reaction';

export class Single extends Component {
  async componentDidMount() {
    const { match } = this.props;
    const {
      params: { id },
    } = match;
    this.fetchData(id);
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = prevProps;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (id !== params.id) {
      this.fetchData(id);
    }
  }

  fetchData = async wallId => {
    const { actions } = this.props;
    await actions.getAMeme(wallId);
  };

  render() {
    const { meme, actions } = this.props;
    return (
      <Container>
        {meme ? (
          <>
            <MemeCard
              square
              src={meme.image}
              topText={meme.topText}
              bottomText={meme.bottomText}
            />
            <Reaction meme={meme} reactToMeme={actions.reactToMeme} />
          </>
        ) : null}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto ${calculateRem(6)};
  width: 100%;
`;

const mapStateToProps = state => ({
  meme: state.meme.current,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAMeme, reactToMeme }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
