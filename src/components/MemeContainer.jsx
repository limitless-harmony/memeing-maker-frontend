import React, { Component } from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import MemeCard from 'components/MemeCard';
import meme from 'assets/memes/meme.png';
import meme1 from 'assets/memes/meme1.png';
import meme2 from 'assets/memes/meme2.png';
import meme3 from 'assets/memes/meme3.png';
import meme4 from 'assets/memes/meme4.png';

const defaultMemes = [meme, meme1, meme2, meme3, meme4, meme, meme1, meme2];

class MemeContainer extends Component {
  state = {
    memes: defaultMemes,
    loading: false,
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
    const { prevY, memes } = this.state;
    const entity = entities[0];
    const { y } = entity.boundingClientRect;
    if (prevY > y && entity.isIntersecting) {
      this.setState({ loading: true });
      // Simulates API calls: TO BE REPLACED BY ACTUAL API CALLS
      setTimeout(() => {
        const newMeme = [...memes, ...defaultMemes];
        this.setState({ memes: newMeme });
      }, 200);
    }
    this.setState({ prevY: y });
  };

  render() {
    const { memes, loading } = this.state;
    return (
      <div>
        <Container>
          {memes.map(mem => (
            <Meme key={Math.random(1)}>
              <MemeCard src={mem} />
            </Meme>
          ))}
        </Container>
        <Loading
          ref={loadingRef => {
            this.loadingRef = loadingRef;
          }}
        >
          {loading && <span>Loading...</span>}
        </Loading>
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

const Loading = styled.div`
  min-height: ${calculateRem(40)};
`;

export default MemeContainer;
