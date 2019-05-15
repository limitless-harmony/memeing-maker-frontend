import { SET_MEMES, SET_FEATURED_MEMES } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/loading';

const setMemes = memes => {
  const { docs, ...rest } = memes;
  return {
    type: SET_MEMES,
    memes: docs,
    meta: rest,
  };
};

const setFeaturedMemes = memes => {
  return {
    type: SET_FEATURED_MEMES,
    memes,
  };
};

export const create = meme => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.post('/memes', meme);
    const { data } = response.data;
    return dispatch(setMemes([data]));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
export const getSingle = id => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/memes/${id}`);
    const { data } = response.data;
    return dispatch(setMemes([data]));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
export const getFeatured = () => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get('/memes/featured');
    const { data } = response.data;
    return dispatch(setFeaturedMemes(data));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
export const getMemes = page => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/memes?page=${page}`);
    const { data } = response.data;
    return dispatch(setMemes(data));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
