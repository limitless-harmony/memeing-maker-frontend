import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, removeImage, showModal } from 'actions/common';
import { create } from 'actions/meme';
import Input from 'components/Input';
import { GoArrow } from 'components/Icons';
import Preview from 'components/Preview';
import { inputFill, dark } from 'styles/colors';
import { calculateRem } from 'styles';
import { name } from 'helpers';
import defaultImage from 'assets/images/create-meme.svg';

export class CreateMeme extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: defaultImage,
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
    const { imageUrl } = this.state;
    actions.selectImage(imageUrl);
  };

  createMeme = async () => {
    const { topText, bottomText } = this.state;
    const { actions, selectedImage } = this.props;
    await actions.create({
      topText,
      bottomText,
      image: selectedImage,
    });
    actions.removeImage();
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
        <PreviewContainer>
          <Preview
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
          placeholder="Enter top text"
        />
        <Input
          value={bottomText}
          name="bottomText"
          onChange={this.changeText}
          underline
          placeholder="Enter bottom text"
        />
        <ButtonContainer>
          Post to
          <SubmitMeme onClick={this.createMeme}>{name}</SubmitMeme>
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
  padding: ${calculateRem(4)} ${calculateRem(28)};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const SubmitMeme = styled.button`
  color: ${dark};
  background-color: ${inputFill};
  margin: 0 ${calculateRem(14)};
  padding: ${calculateRem(6)} ${calculateRem(25)};
  border: none;
  cursor: pointer;
  border-radius: ${calculateRem(10)};
  min-width: 60%;
  text-align: left;
`;

const mapStateToProps = state => ({
  selectedImage: state.common.imageUrl,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, selectImage, removeImage, create },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeme);
