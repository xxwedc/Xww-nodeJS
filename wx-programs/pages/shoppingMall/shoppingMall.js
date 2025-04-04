// pages/shoppingMall/shoppingMall.js
const app = getApp()
import {
  req
} from '../../utils/request'
Page({
  data: {
    // 获取导航的位置ID
    select: 0,
    // 种类数据获取
    typeData: [],
    // 商品数据
    GoodsData:[],
  },

  onLoad() {
    // 种类数据获取
    req('http://localhost:8080/mall/getMalltype').then(result => {
      this.setData({
        typeData: result.data.data
      })
    })
    this.getGoodsData()
  },
  // 商品数据获取
  getGoodsData() {
    if (this.data.select == 0) {
      // 推荐商品数据获取
      req('http://localhost:8080/mall/getCommend').then(result => {
        this.setData({
          GoodsData: result.data.data
        })
      })
    } else if(this.data.select != 0){
      // 不同种类商品获取
      req('http://localhost:8080/mall/getGoodsType?type='+this.data.select).then(result => {
        this.setData({
          GoodsData: result.data.data
        })
      })
    }
  },
  // 导航栏运动
  activeTab(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      select: index
    })
    this.getGoodsData()
  },





})