import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage } from 'actions/image';
import { showModal } from 'actions/modal';
import Input from 'components/Input';
import { GoArrow } from 'components/Icons';
import MemePreview from 'components/MemePreview';
import { inputFill } from 'styles/colors';
import { calculateRem } from 'styles';
import { getFullImage, composeImage } from 'helpers/image';
import { name } from 'helpers';
import defaultImage from 'assets/images/dank.png';

export class CreateMeme extends Component {
  state = {
    topText: '',
    bottomText: '',
  };

  componentDidMount() {
    this.loadImage();
  }

  selectImage = () => {
    const { actions } = this.props;
    return actions.showModal('select-image');
  };

  loadImage = () => {
    const { actions } = this.props;
    const img = document.createElement('img');
    img.setAttribute('src', `${defaultImage}`);
    img.onload = () => {
      const base64 = getFullImage(img);
      actions.selectImage(base64);
    };
  };

  composeMeme = () => {
    const style = {
      viewBox: '0 0 800 1200',
    };
    composeImage(this.captureDiv, style);
  };

  changeText = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    const { topText, bottomText } = this.state;
    const { selectedImage } = this.props;
    return (
      <Fragment>
        <PreviewContainer
          ref={div => {
            this.captureDiv = div;
          }}
        >
          <MemePreview
            image={selectedImage}
            topText={topText}
            bottomText={bottomText}
            onImageClick={this.selectImage}
          />
        </PreviewContainer>
        <Input
          value={topText}
          name="topText"
          underline
          onChange={this.changeText}
          placeholder="Click to enter top text"
        />
        <Input
          value={bottomText}
          name="bottomText"
          onChange={this.changeText}
          underline
          placeholder="Click to enter bottom text"
        />
        <ButtonContainer>
          Post to
          <SubmitMeme onClick={this.composeMeme}>{name}</SubmitMeme>
          <GoArrow />
        </ButtonContainer>
      </Fragment>
    );
  }
}

export const PreviewContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  padding: 0 ${calculateRem(18)};
  margin: ${calculateRem(4)} ${calculateRem(10)};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export const SubmitMeme = styled.button`
  color: #4a4a4a;
  background-color: ${inputFill};
  margin: 0 ${calculateRem(14)};
  padding: ${calculateRem(6)} ${calculateRem(13)};
  border: none;
  border-radius: ${calculateRem(10)};
  min-width: 60%;
  text-align: left;
`;

const mapStateToProps = state => ({
  selectedImage: state.image.imageUrl,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ showModal, selectImage }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeme);
