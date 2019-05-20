import { SET_WALLS, SET_A_WALL } from 'constants/actionTypes';

const initialState = {
  current: null,
  meta: {},
  walls: [],
};

const meme = (state = initialState, { type, walls, current, meta }) => {
  switch (type) {
    case SET_WALLS:
      return {
        ...state,
        walls: [...state.walls, ...walls],
        meta,
      };
    case SET_A_WALL:
      return {
        ...state,
        current,
      };
    default:
      return state;
  }
};

export default meme;
