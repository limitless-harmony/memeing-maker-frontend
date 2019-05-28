import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectImage, showModal, removeImage } from 'actions/common';
import { edit, savePathFrom, clearPathFrom } from 'actions/auth';
import Input from 'components/Input';
import { pink } from 'styles/colors';
import { calculateRem } from 'styles';
import defaultImage from 'assets/images/serious-cat.jpg';
import MemeForm from 'components/MemeForm';

export class EditProfile extends Component {
  state = {
    topText: '',
    bottomText: '',
    image: '',
    username: '',
    error: '',
    size: '',
  };

  async componentDidMount() {
    this.setState({ size: this.widthRef.offsetWidth });
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
    history.push(path);
    return actions.clearPathFrom();
  };

  changeText = event => {
    if (event.currentTarget.name === 'username') this.setState({ error: '' });
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    const { topText, bottomText, username, error, size } = this.state;
    const { selectedImage } = this.props;
    return (
      <>
        <Container
          ref={widthRef => {
            this.widthRef = widthRef;
          }}
        >
          <Input
            value={username}
            name="username"
            underline
            focused
            onChange={this.changeText}
            placeholder="Choose a unique username"
          />
          {error && <Error>{error}</Error>}
          <MemeForm
            image={selectedImage}
            topText={topText}
            bottomText={bottomText}
            size={size}
            onChange={this.changeText}
            selectImage={this.selectImage}
            onSubmit={this.editProfile}
            submitText="Player Profile"
          />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  width: 100%;
`;

const Error = styled.div`
  width: 100%;
  font-size: ${calculateRem(13)};
  color: ${pink};
  text-align: center;
  margin: 0 auto;
`;

const mapStateToProps = state => ({
  selectedImage: state.common.imageUrl,
  authenticated: state.auth.authenticated,
  previousPath: state.auth.previous,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { showModal, selectImage, edit, removeImage, savePathFrom, clearPathFrom },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
