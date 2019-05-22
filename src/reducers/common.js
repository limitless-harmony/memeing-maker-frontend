import {
  REMOVE_IMAGE,
  SELECT_IMAGE,
  IS_LOADING,
  IS_COMPLETE,
  TOGGLE_MENU,
  SHOW_MODAL,
  HIDE_MODAL,
} from 'constants/actionTypes';

const initialState = {
  imageUrl: '',
  loading: false,
  showMenu: false,
  showModal: false,
  modalId: '',
};

const modal = (state = initialState, { type, imageUrl, modalId }) => {
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
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case IS_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        modalId,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        modalId,
      };
    default:
      return state;
  }
};

export default modal;
