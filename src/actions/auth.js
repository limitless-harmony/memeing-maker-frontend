import {
  USER_LOGGED_IN,
  PROFILE_UPDATED,
  LOG_OUT,
  SET_PATH_FROM,
  CLEAR_PATH_FROM,
} from 'constants/actionTypes';
import { startLoader, stopLoader } from 'actions/common';
import api from 'services/api';
import { setAuthToken } from 'helpers/auth';

const setPathFrom = previous => ({
  type: SET_PATH_FROM,
  previous,
});

const clearPath = () => ({ type: CLEAR_PATH_FROM });

const setUser = user => ({
  type: USER_LOGGED_IN,
  user,
});

const updateUser = user => ({
  type: PROFILE_UPDATED,
  user,
});

export const savePathFrom = path => async dispatch =>
  dispatch(setPathFrom(path));

export const clearPathFrom = () => async dispatch => dispatch(clearPath());

export const login = (accessToken, provider) => async dispatch => {
  if (!accessToken) return null;
  try {
    dispatch(startLoader());
    const url = `auth/${provider}/success?code=${accessToken}`;
    const response = await api.get(url);
    const { data } = response.data;
    const { token, ...user } = data;
    await setAuthToken(token);
    return dispatch(setUser(user));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const edit = profile => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.put('/users', profile);
    const { data } = response.data;
    return dispatch(updateUser(data));
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
