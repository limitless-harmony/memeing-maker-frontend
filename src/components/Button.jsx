import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { white, black, darken } from 'styles/colors';

const Button = ({
  color = black,
  children,
  rounded,
  outline,
  fullWidth,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      outline={outline}
      rounded={rounded}
      fullWidth={fullWidth}
      onClick={onClick}
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

export default Button;
