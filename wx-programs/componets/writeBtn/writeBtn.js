// componets/writeBtn/writeBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    typeName:{type:String,value:""},
    userInfo: {
      type: Object,
      value: []
    },
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
    showMsg() {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 2000
      })
    }


  }
})
