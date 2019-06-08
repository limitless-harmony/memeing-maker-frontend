import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { getRules } from 'actions/common';
import WallContainer from 'components/WallContainer';
import Wall from 'components/Wall';
import { calculateRem } from 'styles';

export class Rules extends Component {
  async componentDidMount() {
    const { actions } = this.props;
    await actions.getRules();
  }

  render() {
    const { rules } = this.props;
    return (
      <>
        <Wall wall={rule} />
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
  rules: state.common.rules,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getRules }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);
