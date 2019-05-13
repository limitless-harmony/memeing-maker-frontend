import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import MemeCard from 'components/MemeCard';

class MemeContainer extends Component {
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
    const { memes, hasNextPage } = this.props;
    return (
      <div>
        <Container>
          {memes.map(meme => (
            // eslint-disable-next-line no-underscore-dangle
            <Meme key={meme._id}>
              <MemeCard
                small
                src={meme.image}
                topText={meme.topText}
                bottomText={meme.bottomText}
              />
            </Meme>
          ))}
          {!hasNextPage && (
            <NoMoreData>No more meaning to load! Create More!</NoMoreData>
          )}
        </Container>
        <LoadMore
          ref={loadingRef => {
            this.loadingRef = loadingRef;
          }}
        />
      </div>
    );
  }
}

const Container = styled.div`
  margin: ${calculateRem(10)} auto ${calculateRem(40)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  text-align: center;
`;

const Meme = styled.div`
  width: 48.5%;
`;

const LoadMore = styled.div`
  min-height: ${calculateRem(40)};
`;

const NoMoreData = styled.div`
  font-size: ${calculateRem(20)};
  text-align: center;
  margin: ${calculateRem(54)} auto;
`;

export default MemeContainer;
