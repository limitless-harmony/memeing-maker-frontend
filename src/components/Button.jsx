import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { calculateRem } from 'styles';
import { white, darken, green } from 'styles/colors';

const Button = ({ color, children, rounded, outline, fullWidth }) => {
  return (
    <StyledButton
      color={color}
      outline={outline}
      rounded={rounded}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  border: ${({ outline, color }) => (outline ? `2px solid ${color}` : 'none')};
  background-color: ${({ outline, color }) =>
    outline ? 'transparent' : color};
  color: ${({ outline, color }) => (outline ? color : white)};
  border-radius: ${({ rounded }) =>
    rounded ? calculateRem(4000) : calculateRem(8)};
  text-align: center;
  cursor: pointer;
  letter-spacing: 1px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-size: ${calculateRem(18)};
  margin: ${calculateRem(10)};
  padding: ${calculateRem(3)} ${calculateRem(30)};
  &:hover {
    background-color: ${({ color }) => darken(color, 0.05)};
    color: ${white};
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  color: green,
  outline: false,
  rounded: false,
  fullWidth: false,
  children: 'Submit',
};

export default Button;
