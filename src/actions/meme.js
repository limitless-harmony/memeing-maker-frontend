import {
  SET_MEMES,
  SET_FEATURED_MEMES,
  SET_A_MEME,
} from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';

const setMemes = (memes, meta = {}) => {
  return {
    type: SET_MEMES,
    memes,
    meta,
  };
};

const setFeaturedMemes = memes => {
  return {
    type: SET_FEATURED_MEMES,
    memes,
  };
};
const setCurrentMeme = current => {
  return {
    type: SET_A_MEME,
    current,
  };
};

export const create = meme => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.post('/memes', meme);
    const { data } = response.data;
    const newMeme = parseResponse(data);
    return dispatch(setMemes([newMeme]));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
export const getAMeme = id => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/memes/${id}`);
    const { data } = response.data;
    const meme = parseResponse(data);
    return dispatch(setCurrentMeme(meme));
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
    const featured = parseResponse(data);
    return dispatch(setFeaturedMemes(featured));
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
    const { docs, ...rest } = data;
    const memes = parseResponse(docs);
    return dispatch(setMemes(memes, rest));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const reactToMeme = (memeId, reactions) => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.put(`/memes/${memeId}/react`, {
      reactions,
    });
    const { data } = response.data;
    const meme = parseResponse(data);
    return dispatch(setCurrentMeme(meme));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
