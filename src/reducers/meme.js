import {
  SET_MEMES,
  SET_FEATURED_MEMES,
  SET_A_MEME,
} from 'constants/actionTypes';

const initialState = {
  meta: {},
  memes: [],
  featured: [],
  current: null,
};

const meme = (state = initialState, { type, memes, meta, current }) => {
  switch (type) {
    case SET_MEMES:
      return {
        ...state,
        memes: meta.hasPrevPage ? [...state.memes, ...memes] : memes,
        meta,
      };
    case SET_FEATURED_MEMES:
      return {
        ...state,
        featured: memes,
      };
    case SET_A_MEME:
      return {
        ...state,
        current,
      };
    default:
      return state;
  }
};

export default meme;
