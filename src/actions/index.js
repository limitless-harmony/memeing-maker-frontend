import { WELCOME_ACTION, CURRENT_TIME } from 'shared/constants/actionTypes';

export const welcome = () => {
  return {
    type: WELCOME_ACTION,
    payload: 'Welcome to Memeing Maker',
  };
};

export const currentTime = time => {
  return {
    type: CURRENT_TIME,
    payload: time,
  };
};
