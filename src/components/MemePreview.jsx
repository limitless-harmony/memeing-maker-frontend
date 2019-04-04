import React, { Fragment } from 'react';
import styled from 'styled-components';

import MemeText from 'components/MemeText';

const MemePreview = ({ image, topText, bottomText, onImageClick }) => (
  <Fragment>
    <StyledPreview>
      <MemeText text={topText} />
      <svg
        onClick={onImageClick}
        style={{ display: 'block' }}
        width="100%"
        id="svg_ref"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <image x="0" y="0" xlinkHref={image} width="100%" height="100%" />
      </svg>
      <MemeText text={bottomText} />
    </StyledPreview>
  </Fragment>
);

const StyledPreview = styled.div`
  width: 100%;
`;

export default MemePreview;
