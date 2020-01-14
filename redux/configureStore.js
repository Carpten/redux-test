//app.js
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from '../libs/redux.min'

import {
  appReducer
} from './reducers';
import thunk from '../libs/redux-thunk';
import {
  Provider
} from '../libs/wechat-weapp-redux.min.js';


function configureStore() {
  return createStore(combineReducers({
    appReducer
  }), compose(applyMiddleware(thunk))) // redux store
}

module.exports = configureStore;