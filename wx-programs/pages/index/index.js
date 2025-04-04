// index.js
// 获取应用实例
const app = getApp()
import{req} from '../../utils/request'
Page({
  data: {
    // 轮播图banner数据变量
    bannerImg:[],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // 轮播图banner数据获取
    req('http://localhost:8080/news/getnews').then( result=>{
      this.setData({bannerImg:result.data.data.slice(0,4)})
    } )
  },
  
})
