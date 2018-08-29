import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import price from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const store = createStore(
  combineReducers({ price }),
  reduxDevToolsExtension && reduxDevToolsExtension(),
  applyMiddleware(thunk)
);

export default store;
