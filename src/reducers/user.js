import { SET_PROFILE } from 'constants/actionTypes';

const initialState = {
  profile: null,
  memes: [],
  walls: [],
};

const meme = (state = initialState, { type, profile, memes, walls }) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        profile,
        memes,
        walls,
      };
    default:
      return state;
  }
};

export default meme;
