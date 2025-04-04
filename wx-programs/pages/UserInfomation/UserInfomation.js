// pages/UserInfomation/UserInfomation.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    sex:'',
    email:'',
    phone:'',
    jionTime:'',
    array: ['男', '女'],
    index: 0,
    region: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    wx.setNavigationBarTitle({
      title: "个人信息"
    })
    
  },
  // 退出登录方法
  exit(){
    try {
      wx.clearStorage({
        success: (res) => {
          wx.switchTab({
            url: '/pages/index/index'
          })
        },
      })
      
    } catch (error) {
      
    }

  },
  // 性别
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      sex:e.detail.value,
    })
    
  },
  // 城市
  bindRegionChange: function (e) {
    var city=e.detail.value[0]+e.detail.value[1]+e.detail.value[2]
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: city,
    })
  },
  // 获取用户信息
  getUserInfo(){
    const openIDRes=wx.getStorageSync('openID')
    req('http://localhost:8080/user/IDSelect?openID='+openIDRes).then( result=>{
      var time=JSON.stringify(result.data.data[0].time).slice(1,11)
      this.setData({
        userInfo:result.data.data[0],
        city:result.data.data[0].city,
        phone:result.data.data[0].phone,
        sex:result.data.data[0].sex,
        email:result.data.data[0].email,
        index:result.data.data[0].sex,
        region:result.data.data[0].city,
        
        jionTime:time
      })
      // console.log(result.data.data)
    } )

  },
  // 当用户点击保存按钮更新用户信息
  updateUser(){
    var that=this;
    const sex=that.data.index;
    const city=that.data.region;
    const phone=that.data.phone;
    const email=that.data.email;
    const openID=wx.getStorageSync('openID')
    wx.request({
      url: 'http://localhost:8080/user/updateUser',
      data:{
        sex:sex,
        city:city,
        phone:phone,
        email:email,
        openID:openID,
      },
      method:'post',
      header: { 'content-type': 'application/json'},
      success:function(res){
        var data=res.data
        wx.showToast({
          title: '保存成功',
          icon:'success',
          duration: 2000
        })
      },
      fail:function(err){
        wx.showToast({
          title: '保存失败',
          icon:'error',
          duration: 2000
        })
      }
    })

  },
  // 获取phone
  getInputValue(e){
    this.setData({phone:e.detail.value})
  },
  // 获取email
  getInputEmail(e){
    this.setData({email:e.detail.value})
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