const req = urlString => {
  const promise = new Promise((res, rej) => {

    wx.request({
      url: urlString,
      success(result) {
        res(result)
      },
      fail(err) {
        rej(err)
      }
    })
  })
  return promise
}
module.exports = {
  req
}