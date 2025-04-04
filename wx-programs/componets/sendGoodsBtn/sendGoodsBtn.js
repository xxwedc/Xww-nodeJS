// componets/sendGoodsBtn/sendGoodsBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转
    navSell(){
      var user=wx.getStorageSync('openID')
      if(user){
        wx.redirectTo({
          url: '/pages/mall_SellGoods/mall_SellGoods',
        })
      }else{
        wx.showToast({
          title: '请先登录',
          icon:"error",
          duration:2000
        })
      }
    }

  }
})
