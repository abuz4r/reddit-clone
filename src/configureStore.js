import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

import logger from 'redux-logger';

const middleware = [thunkMiddleware, logger];

let store;
const configureStore = (predefinedState) => {
  store = createStore(
    rootReducer,
    predefinedState,
    compose(applyMiddleware(...middleware)
    )
  );

  return store;
};

export const getStore = () => store;

export default configureStore;
