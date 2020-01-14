import {
  connect
} from '../../libs/wechat-weapp-redux.min';
import {
  fetchUserInfo,
  logout
} from '../../redux/reducers'

const pageConfig = {}

const mapStateToData = state => ({
  ...state.appReducer
})

const mapDispatchToPage = dispatch => ({
  fetchUserInfo: () => dispatch(fetchUserInfo),
  logout: async() => {
      await dispatch(logout);
      wx.navigateBack()
  }
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig);