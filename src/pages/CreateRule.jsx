import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  selectImage,
  removeImage,
  showModal,
  createRule,
} from 'actions/common';
import defaultImage from 'assets/images/create-meme.svg';
import MemeForm from 'components/MemeForm';

export class CreateRule extends Component {
  state = {
    topText: '',
    bottomText: '',
    size: '',
    defaultImageUrl: defaultImage,
  };

  componentDidMount() {
    this.setState({ size: this.widthRef.offsetWidth });
    this.loadImage();
  }

  selectImage = () => {
    const { actions } = this.props;
    return actions.showModal('select-image');
  };

  loadImage = () => {
    const { actions } = this.props;
    const { defaultImageUrl } = this.state;
    actions.selectImage(defaultImageUrl);
  };

  createMeme = async () => {
    const { topText, bottomText, defaultImageUrl } = this.state;
    const { actions, selectedImage } = this.props;
    if (selectedImage === defaultImageUrl)
      return toast.error('Please select an image first!');

    await actions.createRule({
      topText,
      bottomText,
      image: selectedImage,
    });
    return actions.removeImage();
  };

  changeText = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    const { topText, bottomText, size } = this.state;
    const { selectedImage } = this.props;
    return (
      <Container
        ref={widthRef => {
          this.widthRef = widthRef;
        }}
      >
        <MemeForm
          image={selectedImage}
          topText={topText}
          bottomText={bottomText}
          size={size}
          onChange={this.changeText}
          selectImage={this.selectImage}
          onSubmit={this.createMeme}
          submitText="Rules of play"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
`;

const mapStateToProps = state => ({
  selectedImage: state.common.imageUrl,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, selectImage, removeImage, createRule },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRule);
