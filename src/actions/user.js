/* eslint-disable import/prefer-default-export */
import { SET_PROFILE } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';

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
