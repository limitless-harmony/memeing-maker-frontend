import { USER_LOGGED_IN, LOG_OUT, SET_PATH_FROM } from 'constants/actionTypes';
import { startLoader, stopLoader } from 'actions/loading';
import api from 'services/api';

const setPathFrom = path => {
  return {
    type: SET_PATH_FROM,
    path,
  };
};

const setUser = user => {
  return {
    type: USER_LOGGED_IN,
    user,
  };
};

export const savePathFrom = path => async dispatch =>
  dispatch(setPathFrom(path));

export const login = (accessToken, provider) => async dispatch => {
  if (!accessToken) return null;
  try {
    dispatch(startLoader());
    const url = `auth/${provider}/success?code=${accessToken}`;
    const response = await api.get(url);
    const { data } = response.data;
    return dispatch(setUser(data));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};
