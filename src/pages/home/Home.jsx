import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { indigo, white, darken, green } from '../../styles/colors';
import { calculateRem } from '../../styles';
import { welcome, currentTime } from '../../actions';

class Home extends Component {
  changeTime = () => {
    const { currentTimeAction, welcomeAction } = this.props;
    const time = new Date().toLocaleTimeString();
    welcomeAction();
    currentTimeAction(time);
  };

  greet = () => {};

  render() {
    const { message, time } = this.props;
    return (
      <StyledHome>
        <h2>
          Welcome To Memeing Maker setup
          <StyledSpan color={white}>
            A span that accepts a color prop
          </StyledSpan>
        </h2>
        <h2>
          {message} {time && `the time is ${time}`}
        </h2>
        The container below is a flex box
        <Container>
          <div>A Flex element</div>
          <div>Another Flex element</div>
        </Container>
        <p>
          This is intended to demonstrate some of the ways we can style using
          styled components and combine it with grid-styled
        </p>
        <Button color={green} onClick={this.changeTime}>
          Change Time
        </Button>
      </StyledHome>
    );
  }
}

const StyledHome = styled.div`
  padding: ${calculateRem(50)};
  margin: ${calculateRem(50)} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${indigo};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const StyledSpan = styled.span`
  color: ${({ color }) => `${color}`};
  font-style: italic;
  font-size: 20px;
`;

const Container = styled.div`
  border-radius: ${calculateRem(4)};
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  min-width: ${calculateRem(600)};
  min-height: ${calculateRem(200)};
  margin: 0 0 ${calculateRem(4)} 0;
  padding: ${calculateRem(24)};
`;

const Button = styled.button`
  border: ${({ outline, color }) => (outline ? `1px solid ${color}` : 'none')};
  background-color: ${({ outline, color }) => (outline ? white : color)};
  color: ${({ outline, color }) => (outline ? color : white)};
  border-radius: 1000px;
  cursor: pointer;
  display: inline-block;
  font-size: 0.825em;
  letter-spacing: 1px;
  min-width: ${props => (props.small ? '120px' : '180px')};
  padding-bottom: ${props =>
    props.small ? calculateRem(8) : calculateRem(20)};
  padding-left: ${props => (props.small ? calculateRem(13) : calculateRem(30))};
  padding-right: ${props =>
    props.small ? calculateRem(13) : calculateRem(30)};
  padding-top: ${props => (props.small ? calculateRem(8) : calculateRem(20))};
  margin-bottom: ${props =>
    props.margin ? calculateRem(props.margin) : calculateRem(1)};

  text-transform: uppercase;
  &:hover {
    background-color: ${({ outline, color }) =>
      outline ? darken(color, 0.25) : darken(green, 0.25)};
    color: ${white};
  }
`;

Home.propTypes = {
  time: PropTypes.string,
  message: PropTypes.string.isRequired,
  welcomeAction: PropTypes.func.isRequired,
  currentTimeAction: PropTypes.func.isRequired,
};

Home.defaultProps = {
  time: null,
};

const mapStateToProps = state => ({
  message: state.sample.message,
  time: state.sample.time,
});

const mapDispatchToProps = dispatch => ({
  welcomeAction: () => dispatch(welcome()),
  currentTimeAction: time => dispatch(currentTime(time)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
