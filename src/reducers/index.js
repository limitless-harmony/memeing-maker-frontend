import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from 'reducers/modal';
import auth from 'reducers/auth';
import image from 'reducers/image';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    modal,
    auth,
    image,
  });

export default rootReducer;
