// pages/MyPosts/MyPosts.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postsData:{},
    deteleID:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "我的发帖"
    })
    this.getpostsData();

  },

  // 查询数据
  getpostsData(){
    // 根据openID获取数据
    let openID=wx.getStorageSync('openID')
    req('http://localhost:8080/found/postsSelect?Publisher='+openID).then( result=>{
      this.setData({postsData:result.data.data})
      //console.log(this.data.postsData)
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