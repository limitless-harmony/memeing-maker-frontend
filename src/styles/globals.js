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
    margin: auto;
    padding: ${calculateRem(70)} 0 0;
    color: ${black};
    font-size: ${baseSize}px;
    font-family: 'Lucida grande';
    min-height: 100%;
    position:relative;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    min-height: 100%;
  }
`;

export default globalStyles;
