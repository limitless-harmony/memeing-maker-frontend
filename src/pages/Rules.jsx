import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { getWalls } from 'actions/wall';
import { getRules } from 'actions/common';
import WallContainer from 'components/WallContainer';
import Wall from 'components/Wall';
import { calculateRem } from 'styles';

export class Rules extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const { actions } = this.props;
    await actions.getRules();
    await actions.getWalls();
  };

  render() {
    const { rules, walls, history } = this.props;
    const wall = { name: 'Memeing Maker Rule of Play', memes: rules };
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
  walls: state.wall.walls,
  rules: state.common.rules,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getRules, getWalls }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);
