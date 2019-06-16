import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  componentWillUnmount() {
    this.observer.disconnect();
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
    const { memes } = this.props;
    return (
      <div>
        <Container>
          {memes.map(meme => (
            <Meme key={meme.id} to={`/memes/${meme.id}`}>
              <MemeCard
                small
                src={meme.image}
                topText={meme.topText}
                bottomText={meme.bottomText}
              />
            </Meme>
          ))}
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
  margin: ${calculateRem(10)} auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  text-align: center;
`;

const Meme = styled(Link)`
  width: 48.5%;
`;

const LoadMore = styled.div`
  min-height: ${calculateRem(10)};
`;

export default MemeContainer;
