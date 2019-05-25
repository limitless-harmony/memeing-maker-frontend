import { SET_PROFILE } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';
import { history } from 'store';

const setProfile = user => {
  const { memes, walls, ...profile } = user;
  return {
    type: SET_PROFILE,
    profile,
    memes,
    walls,
  };
};

export const getProfile = id => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/users/${id}`);
    const { data } = response.data;
    const profile = parseResponse(data);
    profile.memes = parseResponse(profile.memes);
    profile.walls = parseResponse(profile.walls);
    return dispatch(setProfile(profile));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const flagMeme = memeId => async dispatch => {
  try {
    dispatch(startLoader());
    await api.put(`/memes/${memeId}/flag`);
    return history.push(`/memes/${memeId}`);
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
