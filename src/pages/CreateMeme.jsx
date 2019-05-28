import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, removeImage, showModal } from 'actions/common';
import { create } from 'actions/meme';
import { name } from 'helpers';
import defaultImage from 'assets/images/create-meme.svg';
import MemeForm from 'components/MemeForm';

export class CreateMeme extends Component {
  state = {
    topText: '',
    bottomText: '',
    size: '',
    imageUrl: defaultImage,
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
          submitText={name}
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
    { showModal, selectImage, removeImage, create },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMeme);
