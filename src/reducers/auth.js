import {
  USER_LOGGED_IN,
  LOG_OUT,
  SET_PATH_FROM,
  CLEAR_PATH_FROM,
  PROFILE_UPDATED,
} from 'constants/actionTypes';
import storage from 'helpers/storage';

const initialState = {
  authenticated: false,
  user: null,
  previous: '',
};

const auth = (state = initialState, { type, user, previous }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        authenticated: true,
        user,
      };
    case PROFILE_UPDATED:
      return {
        ...state,
        user,
      };
    case SET_PATH_FROM:
      return {
        ...state,
        previous,
      };
    case CLEAR_PATH_FROM:
      return {
        ...state,
        previous: '',
      };
    case LOG_OUT:
      storage.clear();
      return initialState;
    default:
      return state;
  }
};

export default auth;
