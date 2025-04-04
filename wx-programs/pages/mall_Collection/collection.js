// pages/mall_Collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collection:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var collection=wx.getStorageSync('collection')
    this.setData({
      collection:collection
    })
  },
  // 取消收藏
  delCet(e){
    var index=e.currentTarget.dataset.cetid;
    // 获取收藏缓存
    var obj = wx.getStorageSync('collection') || [];
    // 删除缓存
    obj.splice(index,1);
    // 删除后重新写入缓存
    wx.setStorageSync('collection', obj)
    this.onLoad();
  },

  
})