import { SET_MEMES, SET_FEATURED_MEMES } from 'constants/actionTypes';
import api from 'services/api';
import { startLoader, stopLoader } from 'actions/loading';

const setMemes = memes => {
  return {
    type: SET_MEMES,
    memes,
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
    const response = await api.get(`/memes/${id}`);
    const { data } = response.data;
    return dispatch(setMemes([data]));
  } catch (error) {
    return console.error(error);
  }
};
export const getFeatured = () => async dispatch => {
  try {
    const response = await api.get('/memes/featured');
    const { data } = response.data;
    return dispatch(setFeaturedMemes(data));
  } catch (error) {
    return console.error(error);
  }
};
