// componets/mallReleted/mallReleted.js
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
    // 跳转我的闲置页面
    navMyGoods(){
      wx.navigateTo({
        url: '/pages/mall_myGoods/mall_myGoods',
      })
    }

  }
})
