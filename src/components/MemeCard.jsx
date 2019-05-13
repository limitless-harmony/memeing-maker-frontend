import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { dark } from 'styles/colors';
import MemeText from 'components/MemeText';

const MemeCard = ({ src, square, small, topText, bottomText }) => {
  const defaultSrc = '/static/media/create-meme.bf0fa792.svg';
  return (
    <Meme square={square}>
      <MemeText square={square} text={topText} small={small} top />
      <svg
        style={{ display: 'block' }}
        width="100%"
        id="svg_ref"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <image
          x="0"
          y="0"
          xlinkHref={src || defaultSrc}
          width="100%"
          height="100%"
        />
      </svg>
      <MemeText square={square} text={bottomText} small={small} />
    </Meme>
  );
};

const Meme = styled.div`
  margin: 0 0 ${calculateRem(11)};
  border-radius: ${({ square }) => (square ? 'none' : `${calculateRem(7)}`)};
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  width: 100%;
`;

export default MemeCard;
