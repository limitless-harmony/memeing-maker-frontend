import { HIDE_MODAL, SHOW_MODAL } from 'constants/actionTypes';

export const showModal = id => {
  return {
    type: SHOW_MODAL,
    id,
  };
};

export const hideModal = id => {
  return {
    type: HIDE_MODAL,
    id,
  };
};
