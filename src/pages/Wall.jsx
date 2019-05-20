import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { getAWall, getWalls } from 'actions/wall';
import WallContainer from 'components/WallContainer';
import Wall from 'components/Wall';
import { calculateRem } from 'styles';

export class MemeWall extends Component {
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
      this.fetchAWall(id);
    }
  }

  fetchAWall = async wallId => {
    const { actions } = this.props;
    await actions.getAWall(wallId);
  };

  fetchAllWalls = async () => {
    const { actions } = this.props;
    await actions.getWalls();
  };

  fetchData = async id => {
    await this.fetchAWall(id);
    await this.fetchAllWalls();
  };

  render() {
    const { wall, walls, history } = this.props;
    return (
      <>
        <Wall wall={wall} />
        <MoreWalls>More Meme Walls</MoreWalls>
        <WallContainer walls={walls} history={history} />
      </>
    );
  }
}

const MoreWalls = styled.div`
  margin: 0 0 ${calculateRem(10)};
  font-size: ${calculateRem(18)};
  text-align: center;
`;

const mapStateToProps = state => ({
  wall: state.wall.current,
  walls: state.wall.walls,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getAWall, getWalls }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeWall);
