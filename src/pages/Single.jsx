import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateRem } from 'styles';
import {
  getOne,
  reactToMeme,
  feature,
  unFeature,
  deleteMeme,
} from 'actions/meme';
import { showModal } from 'actions/common';
import MemeCard from 'components/MemeCard';
import Reaction from 'components/Reaction';
import Button from 'components/Button';

export class Single extends Component {
  componentDidMount() {
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

  fetchData = async memeId => {
    const { actions } = this.props;
    await actions.getOne(memeId);
  };

  feature = async () => {
    const { actions, meme, history } = this.props;
    await actions.feature(meme.id);
    return history.goBack();
  };

  unFeature = async () => {
    const { actions, meme, history } = this.props;
    await actions.unFeature(meme.id);
    return history.goBack();
  };

  delete = async () => {
    const { actions, meme, history } = this.props;
    await actions.deleteMeme(meme.id);
    return history.goBack();
  };

  addToWall = async () => {
    const { actions } = this.props;
    await actions.showModal('select-wall');
  };

  openEdit = async () => {
    const { meme, history, user } = this.props;
    if (user.id !== meme.creator.id) return;
    history.push(`/memes/${meme.id}/edit`);
  };

  render() {
    const { meme, actions, user } = this.props;
    return (
      <Container>
        {meme ? (
          <>
            <MemeCard
              onClick={this.openEdit}
              square
              src={meme.image}
              topText={meme.topText}
              bottomText={meme.bottomText}
            />
            {user.isAdmin ? (
              <AdminActions>
                {meme.featured ? (
                  <Button onClick={this.unFeature}>Un-feature</Button>
                ) : (
                  <Button onClick={this.feature}>Feature</Button>
                )}
                <Button onClick={this.delete}>Delete</Button>
                <Button onClick={this.addToWall}>Add to Wall</Button>
              </AdminActions>
            ) : (
              <Reaction model={meme} handleReaction={actions.reactToMeme} />
            )}
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
  box-sizing: border-box;
  margin: 0 auto ${calculateRem(30)};
  width: 100%;
`;

const AdminActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  min-height: ${calculateRem(20)};
  width: 100%;
`;

const mapStateToProps = state => ({
  meme: state.meme.current,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getOne, reactToMeme, feature, unFeature, deleteMeme, showModal },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
