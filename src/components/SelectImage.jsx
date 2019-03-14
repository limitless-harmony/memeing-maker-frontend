import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideModal } from 'actions/modal';
import { selectImage } from 'actions/image';
import { calculateRem } from 'styles';
import Input from 'components/Input';
import { GoArrow } from 'components/Icons';
import CropImage from 'components/CropImage';
import Button from 'components/Button';
import camera from 'assets/icons/camera.png';
import folder from 'assets/icons/folder.png';
import gallery from 'assets/icons/gallery.png';
import { getCroppedImage, readFile } from 'helpers/image';

export class SelectImage extends Component {
  state = {
    croppedAreaPixels: {},
    imageUrl: '',
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1 / 1,
  };

  changeText = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  uploadImageFile = async () => {
    const { imageUrl, croppedAreaPixels } = this.state;
    const { actions } = this.props;
    const img = document.createElement('img');
    img.setAttribute('src', `${imageUrl}`);
    img.onload = () => {
      const base64 = getCroppedImage(img, croppedAreaPixels);
      actions.selectImage(base64);
    };
    actions.hideModal();
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    this.setState({ croppedAreaPixels });
  };

  onZoomChange = zoom => {
    this.setState({ zoom });
  };

  onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      this.setState({
        imageUrl: imageDataUrl,
      });
    }
  };

  render() {
    const { imageUrl, crop, zoom, aspect } = this.state;
    return (
      <StyledSelectImage>
        <InputSection>
          <Input
            value={imageUrl}
            name="imageUrl"
            filled
            textAlign="left"
            onChange={this.changeText}
            placeholder="Insert image url"
          />
          <ArrowSection>
            <GoArrow />
          </ArrowSection>
        </InputSection>
        <IconSection>
          <Icon src={camera} />
          <Label htmlFor="image">
            <Icon src={folder} />
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={this.onFileChange}
            />
          </Label>
          <Icon src={gallery} />
        </IconSection>
        <CropSection>
          {imageUrl && (
            <Fragment>
              <CropImage
                image={imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={this.onCropChange}
                onCropComplete={this.onCropComplete}
                onZoomChange={this.onZoomChange}
              />
              <Button outline onClick={this.uploadImageFile}>
                Confirm
              </Button>
            </Fragment>
          )}
        </CropSection>
      </StyledSelectImage>
    );
  }
}

const StyledSelectImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${calculateRem(14)};
  box-sizing: border-box;
  font-size: ${calculateRem(18)};
`;

const ArrowSection = styled.div`
  margin: auto ${calculateRem(18)};
`;

const IconSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${calculateRem(18)} ${calculateRem(40)};
  box-sizing: border-box;
`;
const CropSection = styled.div`
  width: 100%;
  height: 400px;
`;

const Icon = styled.img``;

const Label = styled.label`
  input {
    display: none;
  }
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ hideModal, selectImage }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(SelectImage);
