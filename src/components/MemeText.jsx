import React from 'react';
import styled from 'styled-components';
import { calculateRem, setFontSize } from 'styles';

const MemeText = ({ text }) => (
  <StyledMemeText>
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
    <StyledText text={text}>
      <div>{text}</div>
    </StyledText>
  </StyledMemeText>
);

const StyledMemeText = styled.div`
  position: relative;
`;

const StyledText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 0 ${calculateRem(14)};
  align-items: stretch;
  flex-wrap: wrap;

  div {
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 900;
    font-size: ${({ text }) => calculateRem(setFontSize(text))};
  }
`;

export default MemeText;
