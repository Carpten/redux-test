//index.js
import {
  connect
} from '../../libs/wechat-weapp-redux.min';
import {
  login,
  fetchUserInfo,
  logout
} from '../../redux/reducers'

const pageConfig = {
}

const mapStateToData = state => ({
  ...state.appReducer
})

const mapDispatchToPage = dispatch => ({
  login: () => dispatch(login),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig);