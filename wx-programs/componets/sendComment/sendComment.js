// componets/sendComment/sendComment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foundID:{
      type:String,
      value:''
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:''

  },

  /**
   * 组件的方法列表
   */
  /*
  *监听函数
  */
  observers:{
    
  },
  methods: {
    //获取输入评论内容
    getInputValue(e){
      this.setData({
        inputValue:e.detail.value
      })
    },
    sendComment(){
      let userInfo=wx.getStorageSync('userInfo')
      let userID=wx.getStorageSync('openID')
      let that=this
      if(userID&&this.data.inputValue){
        wx.request({
          url: 'http://localhost:8080/comment/insertComment',
          data:{
            foundID:this.properties.foundID,
            userID:userID,
            detail:this.data.inputValue,
            userName:userInfo.nickName,
            avatarUrl:userInfo.avatarUrl,
          },
          method:'post',
          header: { 'content-type': 'application/json'},
          success:function(res){
            var data=res.data
            wx.showToast({
              title: '发表成功',
              icon:'success',
              duration: 1000
            })
            setTimeout(function(){
              wx.redirectTo({
                url: '/pages/foundDetail/foundDetail?FoundID='+that.properties.foundID,
              })
            },1000);
          },
          fail:function(err){
            wx.showToast({
              title: '发表失败',
              icon:'error',
              duration: 2000
            })
          }
        })
      }else if(this.data.inputValue==0){
        // 如果登录了,没有输入内容
        wx.showToast({
          title: '未输入内容',
          icon:'error',
          duration:1000
        })
      }else{
        //如果未登录，则提示，然后跳转到登录页面
        wx.showToast({
          title: '登录后即可评论',
          icon:'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.switchTab({
            url: '/pages/myMes/myMes',
          })
        }, 2000);
        
      }

    }

  }
})
