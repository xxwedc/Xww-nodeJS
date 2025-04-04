// componets/myComment/myComment.js
import {
  req
} from '../../utils/request'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentData: {
      type: Array,
      value: ''
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
    deleteComment(e) {
      var commentID = e.currentTarget.dataset.id
      wx.showModal({
        title: '删除提示',
        content: '确定删除此条评论吗？',
        success(res) {
          if (res.confirm) {
           // console.log('用户点击确定')
            //请求服务器 删除评论
           req('http://localhost:8080/comment/commentDelete?id=' + commentID).then(result => {})
            wx.redirectTo({
              url: '/pages/myComment/myComment',
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  }
})