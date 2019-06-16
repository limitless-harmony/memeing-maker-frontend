import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { calculateRem } from 'styles';
import { dark } from 'styles/colors';

class WallContainer extends Component {
  state = {
    prevY: 0,
  };

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(this.loadingRef);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  loadWall = wallId => {
    const { history } = this.props;
    return history.push(`/walls/${wallId}`);
  };

  handleObserver = entities => {
    const { prevY } = this.state;
    const { fetchMore, hasNextPage } = this.props;
    const entity = entities[0];
    const { y } = entity.boundingClientRect;
    if (prevY > y && entity.isIntersecting && hasNextPage) {
      fetchMore();
    }
    this.setState({ prevY: y });
  };

  render() {
    const { walls } = this.props;
    return (
      <>
        <Container>
          {walls.map(wall => (
            <WallCard key={wall.id}>
              <Wall to={`/walls/${wall.id}`}>{wall.name}</Wall>
            </WallCard>
          ))}
        </Container>
        <LoadMore
          ref={loadingRef => {
            this.loadingRef = loadingRef;
          }}
        />
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

const Wall = styled(Link)`
  vertical-align: middle;
  font-size: ${calculateRem(15)};
  line-height: ${calculateRem(18)};
  color: inherit;
  text-decoration: none;
`;

const WallCard = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto ${calculateRem(20)};
  padding: ${calculateRem(8)};
  border: ${calculateRem(2)} solid ${dark};
  border-radius: ${calculateRem(7)};
  box-sizing: border-box;
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  text-align: center;
  cursor: pointer;
  width: ${calculateRem(100)};
  height: ${calculateRem(100)};
`;

const LoadMore = styled.div`
  min-height: ${calculateRem(10)};
`;

export default WallContainer;
