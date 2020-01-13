//app.js
import { createStore } from './libs/redux.min'
import { appReducer } from './app.redux.js';
import { Provider } from './libs/wechat-weapp-redux.min.js';

const store = createStore(appReducer) // redux store

App({
  store,
  onLaunch: function() {},
  globalData: {
    userInfo: null
  }
})