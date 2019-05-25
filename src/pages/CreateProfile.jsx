import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, showModal, removeImage } from 'actions/common';
import { edit, getOne } from 'actions/meme';
import Input from 'components/Input';
import { GoArrow } from 'components/Icons';
import Preview from 'components/Preview';
import { inputFill } from 'styles/colors';
import { calculateRem } from 'styles';
import { name } from 'helpers';
import defaultImage from 'assets/images/create-meme.svg';

export class CreateProfile extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const {
      params: { id },
    } = match;
    await this.fetchData(id);
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
    this.setState(() => {
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
          <Submit onClick={this.editMeme}>{name}</Submit>
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

export const Submit = styled.button`
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
)(CreateProfile);
