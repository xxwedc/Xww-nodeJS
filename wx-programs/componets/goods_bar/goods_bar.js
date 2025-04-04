// componets/goods_bar/goods_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsDetailData:{
      type:Array,
      value:""
    },
    userData:{
      type:Array,
      value:""
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isCollect:false
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 添加收藏方法
    changeCollection(){
      var goodsData = this.properties.goodsDetailData[0];
      
      var isCollect=this.data.isCollect;

      console.log(isCollect)
      // 获取收藏缓存
      var obj = wx.getStorageSync('collection') || [];
      // 判断当前商品在缓存数组中的下标
      var index=obj.findIndex(collection=>collection.id===goodsData.id)
      
      isCollect=!isCollect
      this.setData({isCollect:isCollect})
      
      if(isCollect){
        // 点击后collect变为true，图标变红，把商品加入缓存数组
        console.log("加入收藏")
        // 添加商品到obj数组末尾
        obj.push(goodsData),
        // 把obj数组写入缓存
        wx.setStorageSync('collection', obj)

      }else{
        // 反之图标变回不收藏，删除收藏
        console.log("删除收藏")
       // var obj = wx.getStorageSync('collection') || [];
        console.log(obj)
        
        console.log(index)
        // 删除缓存
        obj.splice(index,1);
        // 删除后重新写入缓存
        wx.setStorageSync('collection', obj)

      }
      
      
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
    }
  },

})