import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import meme from 'reducers/meme';
import wall from 'reducers/wall';
import auth from 'reducers/auth';
import common from 'reducers/common';

const rootReducer = history =>
  combineReducers({
    auth,
    meme,
    wall,
    common,
    router: connectRouter(history),
  });

export default rootReducer;
