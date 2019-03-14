import React from 'react';
import styled from 'styled-components';
import Cropper from 'react-easy-crop';

const CropImage = ({
  image,
  crop,
  zoom,
  aspect,
  onCropChange,
  onCropComplete,
  onZoomChange,
}) => (
  <StyledCropImage>
    <Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={aspect}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      onZoomChange={onZoomChange}
    />
  </StyledCropImage>
);

const StyledCropImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export default CropImage;
