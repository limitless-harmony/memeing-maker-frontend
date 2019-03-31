import { USER_LOGGED_IN, LOG_OUT } from 'shared/constants/actionTypes';

export const login = user => {
  return {
    type: USER_LOGGED_IN,
    user,
  };
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};
