const LOGIN = 'LOGIN';

// 用法1
// 不用中间件，一个action每次只能dispatch一个action

export const login = () => ({
  type: LOGIN,
  data: {name:'zhangsan'}
})

// 仓库数据结构预定义
const initState = {
  userInfo: null
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        userInfo: action.data
      });
    default:
      return state;
  }
};