import { USER_LOGGED_IN, LOG_OUT } from 'constants/actionTypes';

const initialState = {
  isLoggedIn: true,
  user: null,
};

const auth = (state = initialState, { type, user }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        user,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
