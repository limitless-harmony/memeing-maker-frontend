import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateRem } from 'styles';
import { getProfile } from 'actions/user';
import MemeCard from 'components/MemeCard';
import ReactionCard from 'components/ReactionCard';
import MemeContainer from 'components/MemeContainer';
import WallContainer from 'components/WallContainer';

export class Profile extends Component {
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

  fetchData = async userId => {
    const { actions } = this.props;
    await actions.getProfile(userId);
  };

  openEdit = async () => {
    const { loggedInUser, history, match } = this.props;
    const {
      params: { id },
    } = match;
    if (loggedInUser.id !== id) return;
    history.push('/edit-profile');
  };

  render() {
    const { profile, memes, walls } = this.props;
    return (
      <>
        <Container>
          {profile && (
            <>
              <Username>@{profile.username}</Username>
              <MemeCard
                onClick={this.openEdit}
                square
                src={profile.image}
                topText={profile.topText}
                bottomText={profile.bottomText}
              />
              <ReactionCard total={profile.reactions} />
            </>
          )}
        </Container>
        <MemeTitle>Memeing Made</MemeTitle>
        <MemeContainer memes={memes} />
        <WallContainer walls={walls} />
      </>
    );
  }
}

const Username = styled.div`
  font-size: ${calculateRem(25)};
  margin: ${calculateRem(14)} auto;
`;

const MemeTitle = styled.div`
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(19)} auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto ${calculateRem(30)};
  width: 100%;
`;

const mapStateToProps = state => ({
  profile: state.user.profile,
  loggedInUser: state.auth.user,
  memes: state.user.memes,
  walls: state.user.walls,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getProfile }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
