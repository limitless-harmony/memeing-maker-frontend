import { SET_MEMES, SET_FEATURED_MEMES } from 'constants/actionTypes';

const initialState = {
  memes: [],
  featured: [],
};

const meme = (state = initialState, { type, memes }) => {
  switch (type) {
    case SET_MEMES:
      return {
        ...state,
        memes,
      };
    case SET_FEATURED_MEMES:
      return {
        ...state,
        featured: memes,
      };
    default:
      return state;
  }
};

export default meme;
