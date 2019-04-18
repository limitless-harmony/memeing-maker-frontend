import React from 'react';
import styled from 'styled-components';

import { calculateRem } from 'styles';

const Masonry = ({ children }) => {
  return <StyledMasonry>{children}</StyledMasonry>;
};

const StyledMasonry = styled.div`
  column-count: 2;
  column-gap: ${calculateRem(11)};
  column-fill: balance;
  width: 100%;
  margin-bottom: ${calculateRem(60)};
  overflow: visible;
`;

export default Masonry;
