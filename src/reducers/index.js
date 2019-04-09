import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from 'reducers/modal';
import menu from 'reducers/menu';
import auth from 'reducers/auth';
import image from 'reducers/image';
import loading from 'reducers/loading';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    menu,
    modal,
    auth,
    image,
    loading,
  });

export default rootReducer;
