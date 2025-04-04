// pages/mall_car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carData: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var car = wx.getStorageSync('car')
    if (car) {
      // 添加isSeleted属性
      car.forEach((r) => {
        r.isSeleted = false;
      })
      this.setData({
        carData: car
      })
    }


  },

})