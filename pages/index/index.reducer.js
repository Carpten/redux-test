import {
  requestLogin,
  requestUserInfo,
  requestLogout
} from './index.servers'

const LOGIN = 'LOGIN';
const FETCH_USERINFO = 'FETCH_USERINFO';
const LOGOUT = 'LOGOUT';

export const login = dispatch => {
  requestLogin().then(succ => {
    dispatch({
      type: LOGIN,
      data: succ
    })
  })
}

export const fetchUserInfo = dispatch => {
  requestUserInfo().then(succ => {
    dispatch({
      type: FETCH_USERINFO,
      data: succ
    })
  })
}

export const logout = dispatch => {
  requestLogout().then(succ => {
    dispatch({
      type: LOGOUT,
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
    case FETCH_USERINFO:
      return Object.assign({}, state, {
        userInfo: action.data
      });
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};