import React from 'react';
import mojs from 'mo-js';

import ReactionCard from 'components/ReactionCard';

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
    const { model } = this.props;
    this.setState(() => {
      return {
        countTotal: model.reactions,
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
      model: { reactions },
    } = prevProps;
    const { model } = this.props;
    if (reactions !== model.reactions) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => {
        return {
          countTotal: model.reactions,
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
    const timer = setTimeout(this.handleReaction, 1000);
    this.setState(() => {
      return {
        timerId: timer,
      };
    });
  };

  handleReaction = () => {
    const { handleReaction, model } = this.props;
    const { count } = this.state;
    handleReaction(model.id, count);
    this.setState(() => {
      return { count: 0 };
    });
  };

  render() {
    const { count, countTotal } = this.state;
    return (
      <ReactionCard
        id="clap"
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        count={count}
        total={countTotal}
      />
    );
  }
};

export default Reaction;
