import React from 'react';
import styled from 'styled-components';
import { calculateRem, setFontSize, setTextAreaHeight } from 'styles';

const FloatingTextArea = ({
  value,
  onChange,
  name,
  placeholder,
  size,
  maxLength = 70,
}) => (
  <StyledTextArea>
    <svg
      style={{ display: 'block' }}
      width="100%"
      id="svg_ref"
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        id="Rectangles"
        fill="#000000"
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </svg>
    <StyledText>
      <TextArea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        size={size}
      >
        {value}
      </TextArea>
    </StyledText>
  </StyledTextArea>
);

const StyledTextArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    border-radius: 'none';
  }
`;

const StyledText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const TextArea = styled.textarea`
  width: 100%;
  color: white;
  background: black;
  padding: 0 ${calculateRem(14)};
  box-sizing: border-box;
  border: none;
  outline: none;
  overflow: visible;
  resize: none;
  text-align: center;
  font-weight: 900;
  font-size: ${({ value }) =>
    value ? calculateRem(setFontSize(value)) : calculateRem(16)};

  height: ${({ value, size }) =>
    value && calculateRem(setTextAreaHeight(value, size))};

  &::placeholder {
    text-decoration: underline;
    color: white;
    font-size: ${calculateRem(28)};
  }
`;

export default FloatingTextArea;
