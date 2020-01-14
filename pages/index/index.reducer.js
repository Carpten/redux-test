import {
  requestLogin,
  requestUserInfo
} from './index.servers'

const LOGIN = 'LOGIN';
const FETCH_USERINFO = 'FETCH_USERINFO';

export const login = dispatch => {
  requestLogin().then(succ => {
    dispatch({
      type: LOGIN,
      data: succ
    })
  })
}

// 仓库数据结构预定义
const initState = {
  token:null,
  userInfo: null
};

export const indexReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        token: action.data
      });
    default:
      return state;
  }
};