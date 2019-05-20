import React from 'react';
import styled from 'styled-components';
import { name } from 'helpers';
import { calculateRem } from 'styles';

const Title = () => {
  return <StyledTitle>{name}</StyledTitle>;
};

const StyledTitle = styled.div`
  margin: ${calculateRem(10)} auto ${calculateRem(60)};
  line-height: ${calculateRem(43)};
  font-size: ${calculateRem(36)};
`;

export default Title;
