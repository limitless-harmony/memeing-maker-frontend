import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { dark } from 'styles/colors';

const MemeCard = ({ src, square }) => {
  return <Meme src={src} square={square} />;
};

const Meme = styled.img`
  display: block;
  margin: 0 0 ${calculateRem(11)};
  border-radius: ${({ square }) => (square ? 'none' : `${calculateRem(7)}`)};
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(4)} 0 ${dark};
  width: 100%;
`;

export default MemeCard;
