import { USER_LOGGED_IN, LOG_OUT, SET_PATH_FROM } from 'constants/actionTypes';
import storage from 'helpers/storage';

const initialState = {
  authenticated: false,
  user: null,
  previous: '',
};

const auth = (state = initialState, { type, user, path }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        authenticated: true,
        user,
      };
    case SET_PATH_FROM:
      return {
        ...state,
        previous: path,
      };
    case LOG_OUT:
      storage.clear();
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
