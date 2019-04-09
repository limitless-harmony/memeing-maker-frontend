import { IS_LOADING, IS_COMPLETE } from 'constants/actionTypes';

const initialState = {
  status: false,
};

const modal = (state = initialState, { type }) => {
  switch (type) {
    case IS_LOADING:
      return { status: true };

    case IS_COMPLETE:
      return { status: false };

    default:
      return state;
  }
};

export default modal;
