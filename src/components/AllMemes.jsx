import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { savePathFrom } from 'actions/auth';
import { calculateRem } from 'styles';
import { getMany } from 'actions/meme';
import MemeContainer from 'components/MemeContainer';

export class AllMemes extends Component {
  componentDidMount() {
    const { history, actions, user } = this.props;
    if (!user.isComplete) {
      const { pathname } = history.location;
      actions.savePathFrom(pathname);
      return history.push('/edit-profile');
    }
    return this.fetchMemes();
  }

  fetchMemes = async () => {
    const { actions, meta } = this.props;
    await actions.getMany(meta.nextPage || 1);
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
  user: state.auth.user,
  meta: state.meme.meta,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getMany, savePathFrom }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllMemes);
