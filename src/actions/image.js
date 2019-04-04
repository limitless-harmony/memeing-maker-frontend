import { REMOVE_IMAGE, SELECT_IMAGE } from 'shared/constants/actionTypes';

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
