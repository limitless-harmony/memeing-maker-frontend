import { IS_COMPLETE, IS_LOADING } from 'constants/actionTypes';

export const startLoader = () => {
  return { type: IS_LOADING };
};

export const stopLoader = () => {
  return { type: IS_COMPLETE };
};
