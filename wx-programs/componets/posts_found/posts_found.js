// componets/posts_found/posts_found.js
import{req} from '../../utils/request'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    postsData:{
      type:Object,
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
    gotoShowID(e){
      //根据id删除
      req('http://localhost:8080/found/postsDelete?id='+e.currentTarget.dataset.id).then( result=>{
      } )
      //redirectTo：当前页面不入栈，新页面入栈
      wx.redirectTo({
        url: '/pages/MyPosts/MyPosts',
      })
    }
    

  }
})
