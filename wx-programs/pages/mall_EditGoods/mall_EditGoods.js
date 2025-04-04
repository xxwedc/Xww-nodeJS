// pages/mall_EditGoods/mall_EditGoods.js
import {
  req
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsid: 0,
    goodsData: [],
    typeData: ['推荐', '书籍', '数码', '服饰', '电器', '运动户外', '其它'],
    // 商品分类
    index: 0,
    GoodsName: '',
    GoodsDetail: '',
    price: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.goodsid;
    this.setData({
      goodsid: id
    })
    // 根据id查找商品数据，并渲染到前端
    req('http://localhost:8080/mall/getGoodsID?id=' + options.goodsid).then(result => {
      //console.log(result.data.data)
      this.setData({
        goodsData: result.data.data[0],
        index: result.data.data[0].type,
        GoodsName:result.data.data[0].name,
        GoodsDetail:result.data.data[0].detail,
        price:result.data.data[0].price
      })
    })
  },
  // 修改按钮事件
  changeBtn() {
    var id = this.data.goodsid
    var name = this.data.GoodsName
    var type = this.data.index
    var price = this.data.price
    var detail = this.data.GoodsDetail
    var img1 = this.data.goodsData.img1
    var img2 = this.data.goodsData.img2
    var img3 = this.data.goodsData.img3
    wx.request({
      url: 'http://localhost:8080/mall/updateGoods',
      data: {
        name: name,
        type: type,
        detail: detail,
        price: price,
        img1: img1,
        img2: img2,
        img3: img3,
        id: id,
      },
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data)
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function(){
          wx.navigateBack({
            // 修改成功后返回上一页
            delta: 2
          })
        },2000)
      },
      fail: function (err) {
        wx.showToast({
          title: '修改失败',
          icon: 'error',
          duration: 2000
        })
      }
    })

  },
  // 分类
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 获取商品名称
  getGoodsName(e) {
    this.setData({
      GoodsName: e.detail.value
    })
  },
  //获取商品描述
  getGoodsDetail(e) {
    //console.log(e.detail.value)
    this.setData({
      GoodsDetail: e.detail.value
    })
  },
  // 获取价格
  getPrice(e) {
    this.setData({
      price: e.detail.value
    })
  },
})