import React from 'react';
import styled from 'styled-components';
import { tagline } from 'helpers';
import { calculateRem } from 'styles';

const Tagline = () => {
  return <StyledTagline>{tagline}</StyledTagline>;
};

const StyledTagline = styled.div`
  margin: ${calculateRem(40)} auto 0;
`;

export default Tagline;
