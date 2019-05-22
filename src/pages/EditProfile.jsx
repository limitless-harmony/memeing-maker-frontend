import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, showModal, removeImage } from 'actions/common';
import { edit } from 'actions/auth';
import Input from 'components/Input';
import { GoArrow } from 'components/Icons';
import Preview from 'components/Preview';
import { inputFill, pink, dark } from 'styles/colors';
import { calculateRem } from 'styles';
import defaultImage from 'assets/images/serious-cat.jpg';

export class EditProfile extends Component {
  state = {
    topText: '',
    bottomText: '',
    image: '',
    username: '',
    error: '',
  };

  async componentDidMount() {
    const { authenticated, history, actions } = this.props;
    if (!authenticated) {
      const { pathname } = history.location;
      actions.savePathFrom(pathname);
      return history.push('/login');
    }
    return this.loadData();
  }

  loadData = async () => {
    const { user } = this.props;
    const { topText, bottomText, username, image } = user;
    await this.setState(() => {
      return {
        topText,
        bottomText,
        image: image || defaultImage,
        username,
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
    const { image } = this.state;
    actions.selectImage(image);
  };

  editProfile = async () => {
    const { topText, bottomText, username } = this.state;
    const { actions, selectedImage, history, previousPath } = this.props;
    if (!username)
      return this.setState({ error: 'Please choose a unique username!' });
    await actions.edit({
      topText,
      bottomText,
      image: selectedImage,
      username,
    });
    this.loadData();
    actions.removeImage();
    const path = previousPath || '/';
    return history.push(path);
  };

  changeText = event => {
    if (event.currentTarget.name === 'username') this.setState({ error: '' });
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    const { topText, bottomText, username, error } = this.state;
    const { selectedImage } = this.props;
    return (
      <>
        <PreviewContainer>
          <Preview
            image={selectedImage}
            topText={topText}
            bottomText={bottomText}
            onImageClick={this.selectImage}
          />
        </PreviewContainer>
        <Input
          value={username}
          name="username"
          underline
          onChange={this.changeText}
          placeholder="Choose a username"
          required
        />
        {error && <Error>{error}</Error>}
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
          <Submit onClick={this.editProfile}>Player Profile</Submit>
          <GoArrow />
        </ButtonContainer>
      </>
    );
  }
}

export const PreviewContainer = styled.div`
  width: 100%;
`;

const Error = styled.div`
  width: 100%;
  font-size: ${calculateRem(13)};
  color: ${pink};
  text-align: center;
  margin: 0 auto;
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
  color: ${dark};
  background-color: ${inputFill};
  margin: 0 ${calculateRem(14)};
  padding: ${calculateRem(6)} ${calculateRem(13)};
  border: none;
  cursor: pointer;
  border-radius: ${calculateRem(10)};
  min-width: 60%;
  text-align: center;
`;

const mapStateToProps = state => ({
  selectedImage: state.common.imageUrl,
  authenticated: state.auth.authenticated,
  previousPath: state.auth.previous,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, selectImage, edit, removeImage },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
