import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWalls, addMeme } from 'actions/wall';
import { hideModal } from 'actions/common';
import { calculateRem } from 'styles';
import { dark } from 'styles/colors';

class SelectWall extends Component {
  componentDidMount() {
    this.getWalls();
  }

  getWalls = async () => {
    const { actions } = this.props;
    await actions.getWalls();
  };

  addMemeToWall = async wallId => {
    const { actions, meme } = this.props;
    actions.addMeme(wallId, meme.id);
    actions.hideModal('select-wall');
  };

  render() {
    const { walls } = this.props;
    return (
      <>
        <Title>Select a wall to add to</Title>
        <Container>
          {walls.map(wall => (
            <WallCard key={wall.id}>
              <Wall
                onClick={() => {
                  this.addMemeToWall(wall.id);
                }}
              >
                {wall.name}
              </Wall>
            </WallCard>
          ))}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  margin: ${calculateRem(10)} auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  text-align: center;
`;

const Title = styled.div`
  font-size: ${calculateRem(25)};
  font-weight: 900;
  margin: ${calculateRem(19)} auto;
`;

const Wall = styled.div`
  vertical-align: middle;
  font-size: ${calculateRem(15)};
  line-height: ${calculateRem(18)};
  color: inherit;
  text-decoration: none;
`;

const WallCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${calculateRem(20)};
  padding: ${calculateRem(8)};
  border: ${calculateRem(2)} solid ${dark};
  border-radius: ${calculateRem(7)};
  box-sizing: border-box;
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  text-align: center;
  cursor: pointer;
  width: 100%;
`;

const mapStateToProps = state => ({
  meme: state.meme.current,
  walls: state.wall.walls,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getWalls, addMeme, hideModal }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectWall);
