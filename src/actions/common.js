import {
  REMOVE_IMAGE,
  SELECT_IMAGE,
  IS_COMPLETE,
  IS_LOADING,
  TOGGLE_MENU,
  HIDE_MODAL,
  SHOW_MODAL,
  SET_RULES,
} from 'constants/actionTypes';
import api from 'services/api';
import { parseResponse } from 'helpers';

const setRules = rules => {
  return { type: SET_RULES, rules };
};

export const selectImage = imageUrl => {
  return {
    type: SELECT_IMAGE,
    imageUrl,
  };
};

export const removeImage = () => {
  return {
    type: REMOVE_IMAGE,
  };
};

export const startLoader = () => {
  return { type: IS_LOADING };
};

export const stopLoader = () => {
  return { type: IS_COMPLETE };
};

export const toggleMenu = status => {
  return {
    type: TOGGLE_MENU,
    status,
  };
};

export const showModal = modalId => {
  return {
    type: SHOW_MODAL,
    modalId,
  };
};

export const hideModal = modalId => {
  return {
    type: HIDE_MODAL,
    modalId,
  };
};

export const createRule = rule => async dispatch => {
  try {
    dispatch(startLoader());
    return api.post('/rules', rule);
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};

export const getRules = () => async dispatch => {
  try {
    dispatch(startLoader());
    const response = await api.get('/rules');
    const { data } = response.data;
    const rules = parseResponse(data);
    return dispatch(setRules(rules));
  } catch (error) {
    return console.error(error);
  } finally {
    dispatch(stopLoader());
  }
};
