import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { white, black } from 'styles/colors';
import { baseSize } from 'styles';

const globalStyles = createGlobalStyle`
  ${styledNormalize}

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${white};
    margin: 0 auto;
    color: ${black};
    font-size: ${baseSize}px;
    font-family: 'Lucida grande';
    min-height: 100%;
    position:relative;
  }

  #root {
    display: flex;
    min-height: 100%;
  }
`;

export default globalStyles;
