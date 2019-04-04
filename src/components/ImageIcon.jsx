import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';

const ImageIcon = ({ height = 40, width = 40, src }) => {
  return <StyledIcon height={height} width={width} src={src} />;
};

const StyledIcon = styled.img`
  display: block;
  height: ${({ height }) => `${calculateRem(height)}`};
  width: ${({ width }) => `${calculateRem(width)}`};
`;

export default ImageIcon;
