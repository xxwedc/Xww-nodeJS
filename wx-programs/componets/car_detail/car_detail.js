// componets/car_detail/car_detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    carData: {
      type: Array,
      value: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 单项选择
    isSeleted: true,
    // 全选
    isSeletedAll: false,
    // 选中商品的数量
    count: 0,
    // 总价格
    totalPrice:0.00
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击修改选中状态
    changeIcon(e) {

      var index = e.currentTarget.dataset.index
      var carData = this.properties.carData
      var count = this.data.count

      carData[index].isSeleted = !carData[index].isSeleted;
      if (carData[index].isSeleted) {
        count++;
      } else{
        count--;
      }
      // 如果选中的数量等于数组长度，全选
      if (count==carData.length) {
        this.setData({
          isSeletedAll: true
        })
      } else {
        this.setData({
          isSeletedAll: false
        })
      }
      //数据重新渲染
      this.setData({
        carData: carData,
        count: count
      })
      // 价格函数
      this.gotTotalPrice()
    },
    // 计算价格
    gotTotalPrice(){
      var carData = this.properties.carData;
      var sum=0;
      // 遍历数组，计算总价
      for(let i =0;i<carData.length;i++){
        if(carData[i].isSeleted){
          var price=parseFloat(carData[i].price)
          sum+=price
        }
      }
      this.setData({
        totalPrice:sum.toFixed(2)
      })
    },
    //全选
    allCheck(){
      var isSeletedAll=!this.data.isSeletedAll
      var carData = this.properties.carData
      var count=this.data.count
      for(let i=0;i<carData.length;i++){
        carData[i].isSeleted=isSeletedAll
      }
      // 全选状态
      if(isSeletedAll){
        count=carData.length
      }else{//全不选状态
        count=0
      }
      this.setData({
        isSeletedAll:isSeletedAll,
        carData:carData,
        count:count
      })
      this.gotTotalPrice()
    },
    // 点击内容跳转详情页
    Navdetail(e){
      var index=e.currentTarget.dataset.index
      var carData=this.properties.carData
      var id=carData[index].id
      var userid=wx.getStorageSync('openID')
      wx.redirectTo({
        url: '/pages/goods_detail/goods_detail?id='+id+'&userid='+userid,
      })
    },
    // 清空购物车
    allDelCar(){
      wx.removeStorageSync("car");
      wx.redirectTo({
        url: '/pages/mall_car/car',
      })
    }

  }
})