import { TOGGLE_MENU } from 'constants/actionTypes';

const initialState = {
  show: false,
};

const menu = (state = initialState, { type, status }) => {
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        show: status,
      };
    default:
      return state;
  }
};

export default menu;
