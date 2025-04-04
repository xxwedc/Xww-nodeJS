// 定义函数
var filesUpload = (path, count, err) => {

  // 获取到当前用户选择的图片的数量
  var sum = count;
  var URLdata = new Array();
    wx.uploadFile({
      url: 'http://localhost:8080/file/fileUpload', //开发者服务器地址
      header: {
        "Content-Type": "multipart/form-data",
      },
      filePath: path, //要上传文件资源的路径
      name: "files", //文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
      success: (res) => {
        // 将string转换为object
        var str1 = JSON.parse(res.data);
        URLdata[i] = str1.data;
        console.log(URLdata)
      }
    })
  return URLdata;
}
// 对外暴露
module.exports = {
  filesUpload
}