// pages/found/found.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foundData:[],
    userInfo:[],
    type:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取判断要查询的是found还是lost
    var that=this;
    this.setData({
      type:options.type
    })
    //数据获取，失物招领
    req('http://localhost:8080/found/getFound?type='+that.data.type).then( result=>{
      this.setData({foundData:result.data.data})
    })
    //获取用户登录状态，用于判断是否可以跳转发布页面
    var userInfo= wx.getStorageSync('userInfo');
      this,this.setData({
        userInfo:userInfo
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})