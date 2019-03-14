import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { calculateRem } from 'styles';
import { black, white } from 'styles/colors';

const MemeCard = ({ topText, bottomText, imageUrl }) => {
  return (
    <StyledMemeCard>
      <MemeTextTop>{topText}</MemeTextTop>
      <MemeImage>
        <img src={imageUrl} alt="" width="100%" height="100%" />
      </MemeImage>
      <MemeTextBottom>{bottomText}</MemeTextBottom>
    </StyledMemeCard>
  );
};

const StyledMemeCard = styled.div`
  display: inline-block;
  border-radius: ${calculateRem(7)};
  border: 1px solid;
  margin: 0 0 ${calculateRem(11)};
  width: 100%;
  /* max-width: ${calculateRem(195)}; */
`;

const MemeText = styled.div`
  text-align: center;
  background: ${black};
  border-radius: ${calculateRem(7)} ${calculateRem(7)} 0 0;
  color: ${white};
  padding: ${calculateRem(10)} ${calculateRem(9)};
  width: 100%;
  font-size: ${calculateRem(16)};
  height: 25%;
`;

const MemeTextTop = styled(MemeText)`
  border-radius: ${calculateRem(7)} ${calculateRem(7)} 0 0;
`;

const MemeTextBottom = styled(MemeText)`
  border-radius: 0 0 ${calculateRem(7)} ${calculateRem(7)};
`;

const MemeImage = styled.div`
  width: 100%;
  img,
  svg {
    display: block;
  }
`;

MemeCard.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MemeCard;
