import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { black } from 'styles/colors';

const MemeCard = ({ src }) => {
  return <Meme src={src} />;
};

const Meme = styled.img`
  display: block;
  margin: 0 0 ${calculateRem(11)};
  border-radius: ${calculateRem(7)};
  box-shadow: ${calculateRem(2)} ${calculateRem(4)} ${calculateRem(8)} 0
    ${black};
  width: 100%;
`;

export default MemeCard;
