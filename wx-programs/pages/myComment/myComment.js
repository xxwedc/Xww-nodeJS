// pages/myComment/myComment.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentData:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userID=wx.getStorageSync('openID')
    //console.log(userID)
    // 评论数据获取
    req('http://localhost:8080/comment/IDCommentSelect?userID='+userID).then( result=>{
      //console.log(result.data.data)
      this.setData({commentData:result.data.data})
      // console.log(result.data.data)
    } )

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