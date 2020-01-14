//index.js
import {
  connect
} from '../../libs/wechat-weapp-redux.min';
import {
  login,
  fetchUserInfo,
  logout
} from './index.reducer'

const pageConfig = {
}

const mapStateToData = state => ({
  ...state.indexReducer
})

const mapDispatchToPage = dispatch => ({
  login: () => dispatch(login),
  fetchUserInfo: () => dispatch(fetchUserInfo),
  logout: () => dispatch(logout),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig);