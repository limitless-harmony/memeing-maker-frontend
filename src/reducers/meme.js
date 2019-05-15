import { SET_MEMES, SET_FEATURED_MEMES } from 'constants/actionTypes';

const initialState = {
  meta: {},
  memes: [],
  featured: [],
};

const meme = (state = initialState, { type, memes, meta }) => {
  switch (type) {
    case SET_MEMES:
      return {
        ...state,
        memes: [...state.memes, ...memes],
        meta,
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
