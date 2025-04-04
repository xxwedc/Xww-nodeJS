// pages/searchAdv/searchAdv.js
import {
  req
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foundData: [],
    key: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  searchResult(e) {
    this.setData({
      key: e.detail.value
    })
    if (e.detail.value) {
      req('http://localhost:8080/found/keySelect?foundKey=' + e.detail.value).then(result => {
        // 不为空才赋值
        if (result.data.data) {
          this.setData({
            foundData: result.data.data
          })
        }

      })
    }

  },

})