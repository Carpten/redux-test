//index.js
import {
  connect
} from '../../libs/wechat-weapp-redux.min';
import {
  login
} from './index.reducer'

const pageConfig = {
  data: {
  },
}

const mapStateToData = state => ({
  ...state.indexReducer
})

const mapDispatchToPage = dispatch => ({
  login: () => dispatch(login),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)

Page(nextPageConfig);