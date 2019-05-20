import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateRem } from 'styles';
import { getMemes } from 'actions/meme';
import MemeContainer from 'components/MemeContainer';

export class AllMemes extends Component {
  componentDidMount() {
    const { meta } = this.props;
    if (!meta.hasPrevPage) this.fetchMemes();
  }

  fetchMemes = async () => {
    const { actions, meta } = this.props;
    await actions.getMemes(meta.nextPage || 1);
  };

  render() {
    const { memes, meta } = this.props;
    return (
      <StyledFeatured>
        {memes && memes.length ? (
          <>
            <SectionHeading>Available Memes</SectionHeading>
            <MemeContainer
              memes={memes}
              hasNextPage={meta.hasNextPage}
              fetchMore={this.fetchMemes}
            />
          </>
        ) : (
          <SectionHeading>No meme available yet!</SectionHeading>
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

const SectionHeading = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(16)} auto;
`;

const mapStateToProps = state => ({
  memes: state.meme.memes,
  meta: state.meme.meta,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getMemes }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMemes);