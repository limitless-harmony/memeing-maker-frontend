import React from 'react';
import PropTypes from 'prop-types';
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
  margin: 0 0 ${calculateRem(60)};
`;

Masonry.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Masonry;
