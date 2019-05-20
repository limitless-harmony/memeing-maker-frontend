import {
  REMOVE_IMAGE,
  SELECT_IMAGE,
  IS_COMPLETE,
  IS_LOADING,
  TOGGLE_MENU,
  HIDE_MODAL,
  SHOW_MODAL,
} from 'constants/actionTypes';

export const selectImage = imageUrl => {
  return {
    type: SELECT_IMAGE,
    imageUrl,
  };
};

export const removeImage = () => {
  return {
    type: REMOVE_IMAGE,
  };
};

export const startLoader = () => {
  return { type: IS_LOADING };
};

export const stopLoader = () => {
  return { type: IS_COMPLETE };
};

export const toggleMenu = status => {
  return {
    type: TOGGLE_MENU,
    status,
  };
};

export const showModal = modalId => {
  return {
    type: SHOW_MODAL,
    modalId,
  };
};

export const hideModal = modalId => {
  return {
    type: HIDE_MODAL,
    modalId,
  };
};
