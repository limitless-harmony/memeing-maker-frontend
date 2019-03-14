import { WELCOME_ACTION, CURRENT_TIME } from 'shared/constants/actionTypes';

const initialState = {
  message: '',
  time: null,
};

const sampleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WELCOME_ACTION:
      return {
        ...state,
        message: payload,
      };
    case CURRENT_TIME:
      return {
        ...state,
        time: payload,
      };
    default:
      return state;
  }
};

export default sampleReducer;
