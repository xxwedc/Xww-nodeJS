// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var historyData=wx.getStorageSync('history')
   this.setData({historyData:historyData})
  },

})