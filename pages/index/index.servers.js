//模拟登录
export const requestLogin = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      token: '我是获取的token'
    })
  }, 2000)
})
//模拟获取内容
export const requestUserInfo = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})