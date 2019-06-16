import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, showModal, removeImage } from 'actions/common';
import { edit, getOne } from 'actions/meme';
import { inputFill, dark } from 'styles/colors';
import { calculateRem } from 'styles';
import { name } from 'helpers';
import defaultImage from 'assets/images/create-meme.svg';
import MemeForm from 'components/MemeForm';

export class Edit extends Component {
  state = {
    topText: '',
    bottomText: '',
    size: '',
    imageUrl: '',
  };

  componentDidMount() {
    this.setState({ size: this.widthRef.offsetWidth });
    const { match } = this.props;
    const {
      params: { id },
    } = match;
    return this.fetchData(id);
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = prevProps;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    if (id !== params.id) {
      this.fetchData(id);
    }
  }

  fetchData = async memeId => {
    const { actions } = this.props;
    await actions.getOne(memeId);
    const { meme, user, history } = this.props;
    if (user.id !== meme.creator.id) {
      return history.push(`/memes/${meme.id}`);
    }
    await this.setState(() => {
      return {
        topText: meme.topText,
        bottomText: meme.bottomText,
        imageUrl: meme.image || defaultImage,
      };
    });
    return this.loadImage();
  };

  selectImage = () => {
    const { actions } = this.props;
    return actions.showModal('select-image');
  };

  loadImage = () => {
    const { actions } = this.props;
    const { imageUrl } = this.state;
    actions.selectImage(imageUrl);
  };

  editMeme = async () => {
    const { topText, bottomText } = this.state;
    const { actions, selectedImage, meme } = this.props;
    await actions.edit(
      {
        topText,
        bottomText,
        image: selectedImage,
        name: meme.name,
      },
      meme.id
    );
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
          onSubmit={this.editMeme}
          submitText={name}
        />
      </Container>
    );
  }
}

export const Container = styled.div`
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
  color: ${dark};
  background-color: ${inputFill};
  margin: 0 ${calculateRem(14)};
  padding: ${calculateRem(6)} ${calculateRem(13)};
  border: none;
  cursor: pointer;
  border-radius: ${calculateRem(10)};
  min-width: 60%;
  text-align: left;
`;

const mapStateToProps = state => ({
  selectedImage: state.common.imageUrl,
  meme: state.meme.current,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, selectImage, edit, getOne, removeImage },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
