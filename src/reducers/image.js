import { REMOVE_IMAGE, SELECT_IMAGE } from 'shared/constants/actionTypes';
import defaultImage from 'assets/images/dank.png';

const initialState = {
  imageUrl: defaultImage,
};

const modal = (state = initialState, { type, imageUrl }) => {
  switch (type) {
    case SELECT_IMAGE:
      return {
        ...state,
        imageUrl,
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        imageUrl: '',
      };
    default:
      return state;
  }
};

export default modal;
