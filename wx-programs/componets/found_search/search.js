// componets/found_search/search.js
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
    searchAdv(){
      wx.navigateTo({
        url: '/pages/searchAdv/searchAdv',
      })
    },
  }
})