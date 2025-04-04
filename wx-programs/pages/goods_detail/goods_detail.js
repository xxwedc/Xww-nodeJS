// pages/goods_detail/goods_detail.js
import {
  req
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetailData: [],
    userData: [],
    bannerImg: [],
    isCollect:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 商品数据获取
    req('http://localhost:8080/mall/getGoodsID?id=' + options.id).then(result => {
      //轮播图数据
      this.setData({
        bannerImg: result.data.data
      })


      // 商品详情数据
      // 获取收藏缓存
      var obj = wx.getStorageSync('collection') || [];
      // 判断当前商品在缓存数组中的下标
      var index = obj.findIndex(collection => collection.id === result.data.data[0].id)
      //console.log(result.data.data[0].id)
      if (index != -1) {
        // 如果找到了，添加收藏属性，并赋值为true
        result.data.data.forEach((r) => {
          r.isCollect = true;
        })
        this.setData({
          goodsDetailData: result.data.data,
          isCollect:true
        })
      } else {
        // 找不到，添加收藏属性，并赋值为false
        result.data.data.forEach((r) => {
          r.isCollect = false;
          isCollect:false
        })
        this.setData({
          goodsDetailData: result.data.data,
        })
      }


      
    })
    // 用户数据获取
    req('http://localhost:8080/user/IDSelect?openID=' + options.userid).then(result => {
      this.setData({
        userData: result.data.data
      })
    })

  },
  // 添加到购物车
  addCar() {
    var goodsData = this.properties.goodsDetailData[0];
    //获取购物车缓存
    var arr = wx.getStorageSync('car') || [];
    if (arr.length > 0) {
      for (var i in arr) {
        if (arr[i].id == goodsData.id) {
          wx.showToast({
            title: '已在购物车中',
            icon: 'success',
            duration: 2000
          });
          //如果存在，展示信息后跳出循环 return
          return;
        }
      }
      arr.push(goodsData);
    } else {
      arr.push(goodsData);
    }
    try {
      wx.setStorageSync('car', arr)
      wx.showToast({
        title: '加入成功',
        icon: 'success',
        duration: 2000
      });
      return;
    } catch (e) {
      console.log(e)
    }
  },
  // 添加收藏方法
  changeCollection(){
    var goodsData = this.data.goodsDetailData[0];
    
    var isCollect=this.data.isCollect;

    // 获取收藏缓存
    var obj = wx.getStorageSync('collection') || [];
    // 判断当前商品在缓存数组中的下标
    var index=obj.findIndex(collection=>collection.id===goodsData.id)
    
    isCollect=!isCollect
    this.setData({isCollect:isCollect})
    
    if(isCollect){
      // 点击后collect变为true，图标变红，把商品加入缓存数组
      // 添加商品到obj数组末尾
      obj.push(goodsData),
      // 把obj数组写入缓存
      wx.setStorageSync('collection', obj)

    }else{
      // 反之图标变回不收藏，删除收藏
      // 删除缓存
      obj.splice(index,1);
      // 删除后重新写入缓存
      wx.setStorageSync('collection', obj)

    }
    
    
  },



})