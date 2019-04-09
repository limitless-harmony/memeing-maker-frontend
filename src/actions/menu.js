import { TOGGLE_MENU } from 'constants/actionTypes';

const toggleMenu = status => {
  return {
    type: TOGGLE_MENU,
    status,
  };
};

export default toggleMenu;
