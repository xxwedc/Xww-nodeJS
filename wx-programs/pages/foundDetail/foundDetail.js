// pages/foundDetail/foundDetail.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foundDetailData:[],
    commentData:{},
    foundID:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //根据传过来的ID查询对应的数据
    req('http://localhost:8080/found/IDSelect?id='+options.FoundID).then( result=>{
      let foundID=result.data.data[0].id
      this.setData({
        foundDetailData:result.data.data,
        foundID:foundID
      })
    })
    //根据ID查询评论数据
    req('http://localhost:8080/comment/IDSelect?foundID='+options.FoundID).then( result=>{
      // 如果获取到的数据不为空，才赋值
      if(result.data.data){
        this.setData({
          commentData:result.data.data,
        })
      }
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