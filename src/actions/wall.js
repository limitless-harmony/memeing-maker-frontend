import { SET_WALLS, SET_A_WALL } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';

const setWalls = (walls, meta) => {
  return {
    type: SET_WALLS,
    walls,
    meta,
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
    const response = await api.post('/walls', wall);
    const { data } = response.data;
    const newWall = parseResponse(data);
    return dispatch(setWalls([newWall]));
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
export const getWalls = page => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/walls?page=${page}`);
    const { data } = response.data;
    const { docs, ...rest } = data;
    const walls = parseResponse(docs);
    return dispatch(setWalls(walls, rest));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
