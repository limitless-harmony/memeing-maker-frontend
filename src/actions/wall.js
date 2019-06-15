import { SET_WALLS, SET_A_WALL } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';

const setWalls = walls => {
  return {
    type: SET_WALLS,
    walls,
  };
};

const setAWall = current => {
  return {
    type: SET_A_WALL,
    current,
  };
};

export const create = wall => async dispatch => {
  try {
    dispatch(startLoader());
    return api.post('/walls', wall);
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const getAWall = id => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/walls/${id}`);
    const { data } = response.data;
    const wall = parseResponse(data);
    wall.memes = parseResponse(wall.memes);
    wall.creator = parseResponse(wall.creator);
    return dispatch(setAWall(wall));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const getWalls = () => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get('/walls');
    const { data } = response.data;
    const walls = parseResponse(data);
    return dispatch(setWalls(walls));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const addMeme = (wallId, memeId) => async dispatch => {
  try {
    dispatch(startLoader());
    return api.put(`/walls/${wallId}/${memeId}`);
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
