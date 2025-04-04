// pages/mall_myGoods/mall_myGoods.js
import{req} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MyGoodsData:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userid=wx.getStorageSync('openID')
    // 数据获取
    req('http://localhost:8080/mall/getgoodsMsg?userid='+userid).then( result=>{
      this.setData({MyGoodsData:result.data.data})
    } )

  },
})