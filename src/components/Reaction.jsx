import React from 'react';
import mojs from 'mo-js';
import styled from 'styled-components';

import { ThanksReaction } from 'components/Icons';
import { dark, black } from 'styles/colors';
import { calculateRem } from 'styles';

const Reaction = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countTotal: 0,
      timerId: '',
      intervalId: '',
    };
  }

  componentDidMount() {
    const { meme } = this.props;
    this.setState(() => {
      return {
        countTotal: meme.reactions,
      };
    });
    const tlDuration = 400;
    const countAnimation = new mojs.Html({
      el: '#clap--count',
      isShowStart: false,
      isShowEnd: true,
      x: { 20: 30 },
      opacity: { 0: 1 },
      duration: tlDuration,
    });

    const scaleButton = new mojs.Html({
      el: '#clap',
      duration: tlDuration,
      scale: { 1.1: 1 },
      easing: mojs.easing.out,
    });

    const clap = document.getElementById('clap');
    clap.style.transform = 'scale(1, 1)';
    this.animationTimeline = new mojs.Timeline();
    this.animationTimeline.add([countAnimation, scaleButton]);
  }

  componentDidUpdate(prevProps) {
    const {
      meme: { reactions },
    } = prevProps;
    const { meme } = this.props;
    if (reactions !== meme.reactions) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => {
        return {
          countTotal: meme.reactions,
        };
      });
    }
  }

  onMouseDown = () => {
    const interval = setInterval(this.onClick, 300);
    this.setState(() => {
      return {
        intervalId: interval,
      };
    });
  };

  onMouseUp = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  };

  onClick = () => {
    this.animationTimeline.replay();
    const increment = 5;
    this.setState(({ count, countTotal }) => {
      return {
        count: count + increment,
        countTotal: countTotal + increment,
      };
    });
    const { timerId } = this.state;
    clearTimeout(timerId);
    const timer = setTimeout(this.reactToMeme, 1000);
    this.setState(() => {
      return {
        timerId: timer,
      };
    });
  };

  reactToMeme = () => {
    const { reactToMeme, meme } = this.props;
    const { count } = this.state;
    reactToMeme(meme.id, count);
    this.setState(() => {
      return { count: 0 };
    });
  };

  render() {
    const { count, countTotal } = this.state;
    return (
      <ReactionButton
        id="clap"
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <ThanksReaction />
        <ReactionCount id="clap--count">
          {count ? <div>+{count}</div> : null}
        </ReactionCount>
        <ReactionCountTotal>
          {Number(countTotal).toLocaleString()}
        </ReactionCountTotal>
      </ReactionButton>
    );
  }
};

const ReactionButton = styled.button`
  position: relative;
  outline: ${calculateRem(1)} solid transparent;
  border-radius: 50%;
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  background: #fff;
  transition: border 0.1s ease-in;
  top: 0;
  left: 0;
  width: ${calculateRem(53)};
  text-align: center;
  height: ${calculateRem(53)};
  border: ${calculateRem(2)} solid ${dark};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &::after {
    width: ${calculateRem(53)};
    height: ${calculateRem(53)};
    border-color: ${dark};
    color: ${dark};
    fill: ${dark};
  }

  &:hover,
  &:focus {
    border: ${calculateRem(2)} solid ${dark};
  }
`;

const ReactionCount = styled.span`
  font-size: ${calculateRem(11)};
  font-weight: bold;
  line-height: ${calculateRem(13)};
  color: ${black};
  top: 10%;
  left: 50%;
  position: absolute;
  backface-visibility: hidden;
`;

const ReactionCountTotal = styled.div`
  font-size: ${calculateRem(11)};
  margin: ${calculateRem(20)} auto 0;
  line-height: ${calculateRem(13)};
  font-weight: bold;
`;

export default Reaction;
