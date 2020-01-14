import configureStore from './redux/configureStore';
const store = configureStore();

App({
  store,
  onLaunch: function() {},
  globalData: {
    userInfo: null
  }
})