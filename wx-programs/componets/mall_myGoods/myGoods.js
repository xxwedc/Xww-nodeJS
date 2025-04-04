// componets/mall_myGoods/myGoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    MyGoodsData:{
      type:Array,
      value:''
    }

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
    //商品编辑
    navEdit(e){
      var goodsid=e.currentTarget.dataset.goodsid;
      wx.navigateTo({
        url: '/pages/mall_EditGoods/mall_EditGoods?goodsid='+goodsid,
      })
    },
    // 下架商品事件
    deleteMyGoods(e){
      let deleteid=e.currentTarget.dataset.goodsid

      //console.log(deleteid)
      wx.request({
        url: 'http://localhost:8080/mall/deletedMyGoods?id='+deleteid,
        method: 'get',
        header: { 'content-type': 'application/json'},
        success: function(){
          wx.redirectTo({
            url: '/pages/mall_myGoods/mall_myGoods',
          })
        },
        fail: function(error) {
            console.info(error);
        }
     })
    }
    



  }
})
