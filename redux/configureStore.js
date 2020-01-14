//app.js
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from '../libs/redux.min'
import {
  appReducer
} from '../app.redux';

import {
  indexReducer
} from '../pages/index/index.reducer';
import thunk from '../libs/redux-thunk';
import {
  Provider
} from '../libs/wechat-weapp-redux.min.js';


function configureStore() {
  return createStore(combineReducers({ appReducer}), compose(applyMiddleware(thunk))) // redux store
}

module.exports = configureStore;