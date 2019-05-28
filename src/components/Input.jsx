import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { inputFill } from 'styles/colors';

const Input = ({
  type = 'text',
  maxLength = 80,
  value,
  name,
  onChange,
  focused,
  filled,
  underline,
  textAlign,
  placeholder,
}) => {
  return (
    <Container>
      <StyledInput
        type={type}
        value={value}
        name={name}
        filled={filled}
        textAlign={textAlign}
        underline={underline}
        maxLength={maxLength}
        placeholder={placeholder}
        autoFocus={focused}
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: ${calculateRem(2)} ${calculateRem(10)};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  display: block;
  padding: ${calculateRem(10)} ${calculateRem(20)};
  box-sizing: border-box;
  background: ${({ filled }) => (filled ? inputFill : 'none')};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  height: ${calculateRem(36)};
  border: none;
  outline: none;
  width: 70%;
  border-radius: ${calculateRem(10)};
  &::placeholder {
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  }
`;

export default Input;
