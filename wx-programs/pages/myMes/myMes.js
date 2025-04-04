const { req } = require("../../utils/request")

Page({
  data: {
    userInfo:{},
    openID:"",
    
  },
  onLoad() {
    
    
  },
  //获取用户头像和昵称
  getUserProfile(e){
    var that=this;
    wx.getUserProfile({
      desc: '用于发表言论等', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 将数据写入缓存流
        wx.setStorageSync('userInfo', res.userInfo);
        
        this.onShow();
      }
    }),
    this.getUserOpenID();
    
     
  },
  // 获取用户openID方法
  getUserOpenID(){
    //获取用户openID
    wx.login({
      success: function (res) {
          // console.log(res)
           if (res.code) {
              //通过login接口的code换取openid
               wx.request({
                 url: 'https://api.weixin.qq.com/sns/jscode2session',
                 data: {
                    //小程序唯一标识
                   appid: 'wx5d8b13bf04c2bed5',
                    //小程序的 app secret
                   secret: '7d1140194504d2ab3044c8e8009f5f74',
                   grant_type: 'authorization_code',
                   js_code: res.code
                 },
                 method: 'GET',
                 header: { 'content-type': 'application/json'},
                 success: function(openIDRes){
                      // console.info("登录成功返回的openId：" ,openIDRes.data.openid);
                      // console.info("登录成功返回的session_key：" ,openIDRes.data.session_key);
                      // 把openID写入缓存
                      wx.setStorageSync('openID', openIDRes.data.openid);
                 },
                 fail: function(error) {
                     console.info("获取用户openId失败");
                     console.info(error);
                 }
              })
            }
          }
    })

  },
  // 存储用户
  insertUser(){
    const userInfo=wx.getStorageSync('userInfo')
    const openIDRes=wx.getStorageSync('openID')
    // 判断openID是否获取了，获取到了则把用户存入数据库
    if (openIDRes) {
      wx.request({
        url: 'http://localhost:8080/user/insertUser',
          data:{
            nickName:userInfo.nickName,
            openID:openIDRes,
            avatarUrl:userInfo.avatarUrl,
            city:'',
            sex:''
          },
          method:'post',
          header: { 'content-type': 'application/json'},
          success:function(res){
            var data=res.data
          },
          fail:function(err){
            console.log('出错！！！')
          }
      })
    } else {
      
    }

  },
  onShow(){
      this.insertUser();
      const userInfo=wx.getStorageSync('userInfo')
      // console.log('缓存数据为：',userInfo);
      this.setData({userInfo:userInfo})
  },
  
})