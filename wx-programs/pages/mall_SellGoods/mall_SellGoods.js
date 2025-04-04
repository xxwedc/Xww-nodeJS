// pages/mall_SellGoods/mall_SellGoods.js
import {
  req
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeData: ['推荐', '书籍', '数码', '服饰', '电器', '运动户外', '其它'],
    // 商品分类
    index: 3,
    // 图片临时路径
    imgData: [],
    // 选择的图片的数量
    count: '',
    // 图片得到的在线链接
    path: [],
    // 商品名称
    GoodsName: '',
    // 商品价格
    price: '',
    // 商品描述
    GoodsDetail: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 分类
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 选择图片，最多可选三张
  chooseImage() {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          imgData: tempFilePaths,
          count: tempFilePaths.length
        })
        that.imgUpload();
      }
    })
    
  },
  // 图片上传,得到在线链接
  imgUpload() {
    var that = this;
    // 此处的i必须使用let来定义，因为let定义的是块作用域，var定义的是全局
    for (let i = 0; i < that.data.imgData.length; i++) {
      wx.uploadFile({
        url: 'http://localhost:8080/file/fileUpload', //开发者服务器地址
        header: {
          "Content-Type": "multipart/form-data",
        },
        filePath: that.data.imgData[i], //要上传文件资源的路径
        name: "files", //文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
        success: (res) => {
          // 将string转换为object
          var str1 = JSON.parse(res.data);
          that.data.path[i] = str1.data
          //console.log('得到的',that.data.path)
        },
        fail(err) {
          console.log(err)
        }
      })
    }
  },
  // 获取商品名称
  getGoodsName(e) {
    this.setData({
      GoodsName: e.detail.value
    })
  },
  //获取商品描述
  getGoodsDetail(e) {
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
  //插入到数据库事件
  insertGoods() {
    var that = this;
    // 插入失物认领信息
    var img1 = that.data.path[0];
    var img2 = that.data.path[1];
    var img3 = that.data.path[3];
    const userid=wx.getStorageSync('openID');
    const name = that.data.GoodsName;
    const type = that.data.index;
    const detail = that.data.GoodsDetail;
    const price = that.data.price;
    wx.request({
        url: 'http://localhost:8080/mall/insertGoods',
        data: {
          userid: userid,
          name: name,
          type: type,
          detail: detail,
          price:price,
          img1: img1,
          img2: img2,
          img3: img3
        },
        method: 'post',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //console.log(res.data)
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail: function (err) {
          wx.showToast({
            title: '发布失败',
            icon: 'error',
            duration: 2000
          })
        }
    })

  },
  // 点击发布事件
  sendBtn(){
    var goodsName=this.data.GoodsName;
    var GoodsDetail=this.data.GoodsDetail;
    var price=this.data.price;
    var path=this.data.imgData;
    //console.log(goodsName,GoodsDetail,price)
    if(goodsName&&GoodsDetail&&price&&path.length!=0){
      var that=this;12
      wx.showToast({
        title: '上传图片中',
        icon: 'loading',
        duration: 7000
      })
      setTimeout(function () {
        that.insertGoods();
        wx.redirectTo({
          url: '/pages/shoppingMall/shoppingMall',
        })
      }, 8000);
    }else if(goodsName&&GoodsDetail&&price&&path.length==0){
      wx.showToast({
        title: '请上传商品图片',
        icon:'error',
        duration:2000
      })
    }else{
      wx.showToast({
        title: '请完善商品信息',
        icon:'error',
        duration:2000
      })
    }
  }

})