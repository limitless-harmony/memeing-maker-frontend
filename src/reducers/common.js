import {
  REMOVE_IMAGE,
  SELECT_IMAGE,
  IS_LOADING,
  IS_COMPLETE,
  TOGGLE_MENU,
  SHOW_MODAL,
  SET_RULES,
  HIDE_MODAL,
} from 'constants/actionTypes';

const initialState = {
  imageUrl: '',
  loading: false,
  showMenu: false,
  showModal: false,
  modalId: '',
  rules: [],
};

const modal = (state = initialState, { type, imageUrl, modalId, rules }) => {
  switch (type) {
    case SELECT_IMAGE:
      return {
        ...state,
        imageUrl,
      };
    case SET_RULES:
      return {
        ...state,
        rules,
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
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        showMenu: false,
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
