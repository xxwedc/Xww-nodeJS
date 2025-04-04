// pages/writeFound/write.js
import {
  req
} from '../../utils/request'
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Userdata: [],
    imgData: [],
    count: '',
    nowDate: '',
    type: '',
    foundData: '',
    path: [],
    checkBtn: true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前时间，格式为YY-MM-DD
    var date = util.FormatDate(new Date());
    this.setData({
      //获取type
      type: options.type,
      nowDate: date
    })
    //获取当前用户openID
    var openID = wx.getStorageSync('openID');
    //获取当前用户
    req('http://localhost:8080/user/IDSelect?openID=' + openID).then(result => {
      this.setData({
        Userdata: result.data.data
      })
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
          //console.log(typeof (str1))
          that.data.path[i] = str1.data
          //console.log('上传事件',that.data.path)
        },
        fail(err){
          console.log(err)
        }
      })
    }

  },
  // 点击图片预览事件
  checkImg(e) {
    var url = e.currentTarget.dataset.url
    wx.previewImage({
      urls: [url],
    })
  },
  //获取用户输入的信息
  getFoundData(e) {
    this.setData({
      foundData: e.detail.value
    })
  },
  // 长按删除事件
  bindlongpressimg(e) {
    var that = this;
    var images = that.data.imgData;
    //获取图片下标位置
    var deleteImg = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          that.data.imgData.splice(deleteImg, 1)
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          imgData: images,
          count: images.length
        })
      }
    })

  },
  // 先上传图片得到图片链接再插入数据库
  asyncUpload() {
    let that = this;
    if (this.data.imgData.length!=0 && this.data.foundData.length!= 0) {
      this.imgUpload()
      this.checkBtn();
      wx.showToast({
        title: '上传图片中',
        icon: 'loading',
        duration: 7000
      })
      setTimeout(function () {
        that.insertFound();
        wx.reLaunch({
          url: '/pages/found/found?type=' + that.data.type,
        })
      }, 8000);

    }else if(this.data.imgData.length==0 && this.data.foundData.length!= 0){
        this.checkBtn();
        this.insertFound();
        setTimeout(function () {
          wx.reLaunch({
            url: '/pages/found/found?type=' + that.data.type,
          })
        }, 2000);
    } else {
        this.checkBtn();
        this.insertFound();
    }


  },
  // 防止按钮被恶意点击
  checkBtn(){
    var that = this;
    if (that.data.checkBtn==true) {
      //console.log(that.data.checkBtn)
      //8秒内不能重复点击
      that.setData({
        checkBtn: false
      })
      //console.log(that.data.checkBtn)
      setTimeout(function () {
        that.setData({
          checkBtn: true
        })
        //console.log(that.data.checkBtn)
      }, 8000);
    }
  },
  //把信息插入到数据库
  insertFound() {
    var that = this;
    // 插入失物认领信息
    var img1 = that.data.path[0];
    var img2 = that.data.path[1];
    var img3 = that.data.path[3];
    //console.log("在线链接",img1)
    const type = that.data.type;
    const Publisher = wx.getStorageSync('openID');
    const user = wx.getStorageSync('userInfo');
    const nickName = user.nickName;
    const avatarUrl = user.avatarUrl;
    const detail = that.data.foundData;
    if (that.data.foundData == "") {
      wx.showToast({
        title: '请输入内容',
        icon: 'error',
        duration: 2000

      })
    } else {
      wx.request({
        url: 'http://localhost:8080/found/insertFound',
        data: {
          Publisher: Publisher,
          nickName: nickName,
          avatarUrl: avatarUrl,
          type: type,
          detail: detail,
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

    }

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

      }
    })
  },

})