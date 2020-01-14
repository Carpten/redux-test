//模拟登录
export const requestLogin = () => new Promise((resolve, reject) => {
  wx.showLoading({
    title: '登录中',
  })
  setTimeout(() => {
    wx.hideLoading()
    resolve({
      token: '我是获取的token'
    })
  }, 2000)
})
//模拟获取内容
export const requestUserInfo = () => new Promise((resolve, reject) => {
  wx.showLoading({
    title: '获取中',
  })
  setTimeout(() => {
    wx.hideLoading()
    resolve({
      name: 'Trump'
    })
  }, 2000)
})

//模拟登出
export const requestLogout = () => new Promise((resolve, reject) => {
  wx.showLoading({
    title: '退出登录中',
  })
  setTimeout(() => {
    wx.hideLoading()
    resolve()
  }, 2000)
})