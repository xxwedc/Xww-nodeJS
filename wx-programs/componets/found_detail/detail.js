// componets/found_detail/detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foundData:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    thumbs:false

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击浏览详情后写入浏览历史缓存
    history(e){
      let id=e.currentTarget.dataset.id;
      var foundData=this.properties.foundData
      var i=foundData.findIndex(foundData=>foundData.id===id)
      // console.log(foundData[i])
      var history = wx.getStorageSync('history') || [];
      var index=history.findIndex(v=>v.id===foundData[i].id);
      if(index!==-1){
        // console.log('已经存在')
      }else{
        history.push(foundData[i]),
      // 把obj数组写入缓存
      wx.setStorageSync('history', history)
      }

    }
  }
})
