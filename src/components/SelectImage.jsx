import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { hideModal } from 'actions/modal';
import { selectImage } from 'actions/image';
import { startLoader, stopLoader } from 'actions/loading';
import { calculateRem } from 'styles';
import CropImage from 'components/CropImage';
import Button from 'components/Button';
import ImageIcon from 'components/ImageIcon';
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
    const { actions } = this.props;
    if (e.target.files && e.target.files.length > 0) {
      actions.startLoader();
      const imageDataUrl = await readFile(e.target.files[0]);
      actions.stopLoader();
      this.setState({
        imageUrl: imageDataUrl,
      });
    }
  };

  render() {
    const { imageUrl, crop, zoom, aspect } = this.state;
    return (
      <StyledSelectImage>
        <IconSection>
          <Label htmlFor="image">
            <ImageIcon width={50} src={folder} />
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={this.onFileChange}
            />
          </Label>
          <ImageIcon src={gallery} />
        </IconSection>
        <CropSection>
          {imageUrl && (
            <Fragment>
              <CropImage
                image={imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                style={{ height: '100%' }}
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
  box-sizing: border-box;
  text-align: center;
`;

const IconSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: ${calculateRem(20)} ${calculateRem(40)};
  min-height: ${calculateRem(80)};
  box-sizing: border-box;
`;
const CropSection = styled.div`
  width: 100%;
`;

const Label = styled.label`
  height: 100%;
  input {
    display: none;
  }
`;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { hideModal, selectImage, startLoader, stopLoader },
    dispatch
  ),
});

export default connect(
  null,
  mapDispatchToProps
)(SelectImage);
