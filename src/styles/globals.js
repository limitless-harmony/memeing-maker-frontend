import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { white, black } from 'styles/colors';
import { baseSize, calculateRem } from 'styles';

const globalStyles = createGlobalStyle`
  ${styledNormalize}

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${white};
    margin: ${calculateRem(70)} auto;
    color: ${black};
    font-size: ${baseSize}px;
    font-family: 'Lucida grande';
    position:relative;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    min-height: 100%;
  }
  
  h2 {
    font-size: ${calculateRem(50)};
  }
  p {
    font-size: ${calculateRem(18)};
    line-height: 1.5;
  }
`;

export default globalStyles;
