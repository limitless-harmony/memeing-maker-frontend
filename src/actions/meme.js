import {
  SET_MEMES,
  SET_FEATURED_MEMES,
  SET_A_MEME,
} from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/common';
import { parseResponse } from 'helpers';
import { history } from 'store';

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
    await api.post('/memes', meme);
    return history.push('/');
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const edit = (meme, id) => async dispatch => {
  try {
    dispatch(startLoader());
    await api.put(`/memes/${id}/edit`, meme);
    return history.push(`/memes/${id}`);
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
export const getOne = id => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get(`/memes/${id}`);
    const { data } = response.data;
    const meme = parseResponse(data);
    meme.creator = parseResponse(meme.creator);
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
export const getMany = page => async dispatch => {
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
    await api.put(`/memes/${memeId}/react`, { reactions });
    return history.push(`/memes/${memeId}`);
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
