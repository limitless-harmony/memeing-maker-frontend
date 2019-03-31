import { SHOW_MODAL, HIDE_MODAL } from 'shared/constants/actionTypes';

const initialState = {
  id: '',
  show: false,
};

const modal = (state = initialState, { type, id }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        id,
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: false,
        id,
      };
    default:
      return state;
  }
};

export default modal;
