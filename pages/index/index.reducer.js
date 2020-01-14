import { requestLogin } from './index.servers'

const LOGIN = 'LOGIN';

export const login = dispatch => {
  requestLogin().then(succ => {
    dispatch({
      type: LOGIN,
      data: {
        name: 'zhangsan'
      }
    })
  })
}

// 仓库数据结构预定义
const initState = {
  userInfo: null
};

export const indexReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        userInfo: action.data
      });
    default:
      return state;
  }
};