//index.js
import {
  connect
} from '../../libs/wechat-weapp-redux.min';
import {
  login
} from '../../redux/reducers'

const pageConfig = {}

const mapStateToData = state => ({
  // ...state.appReducer
})

const mapDispatchToPage = dispatch => ({
  login: async() => {
    await dispatch(login);
    wx.navigateTo({
      url: '../../pages/detail/detail',
    })
  }
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig);