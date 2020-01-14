//app.js
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from '../libs/redux.min'

import {
  indexReducer
} from '../pages/login/index.reducer';
import thunk from '../libs/redux-thunk';
import {
  Provider
} from '../libs/wechat-weapp-redux.min.js';


function configureStore() {
  return createStore(combineReducers({
    indexReducer
  }), compose(applyMiddleware(thunk))) // redux store
}

module.exports = configureStore;