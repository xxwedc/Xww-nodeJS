var express = require('express');
var fs = require('fs');
//引入处理上传文件的模块
var Formidable = require('formidable')
// 引入 url 模块：url 是对用户提交的路径进行解析
const url = require('url');
// 引入获取时间模块
const moment = require('moment');
const path = require('path');

//创建路由
const router = express.Router();


/*文件上传
*@author xxwedc
*
*/
class fileUploadController {

    //文件上传
    async fileUpload(request, response, next) {
        var form = new Formidable.IncomingForm();
        try {
            form.parse(request, function (err, fields, files) {
                //获取临时路径
                var temPath = files.files.filepath;
                // 有了临时路径，将临时路径以可读流的形式读出来，再找一个文件夹存进去
                var fileURl = '/www/wwwroot/nodejs.blanche.cloud/imgUpload';
                if (!fs.existsSync(fileURl)) {//同步创建文件夹，必须同步执行，先判断有没有文件夹，才能存，如果是异步，没有文件夹也会执行下面的操作，导致上传失败
                    fs.mkdirSync(fileURl)//如果没有该文件夹的话就创建一个
    
                }
    
                var rs = fs.createReadStream(temPath);
                var date = moment().format('X');
                //获取后缀,用于重新命名文件
                var extension = path.extname(files.files.originalFilename);
                //保存文件名
                var fileName=date + extension;
                console.log('fileName:',fileName)
                //创建写入流，把文件写入
                var ws = fs.createWriteStream(fileURl + '/' + date + extension);
                rs.pipe(ws);
                var imgURL = 'https://nodejs.blanche.cloud/imgUpload/'+fileName;
                console.log('图片地址为：', imgURL)
                response.json({
                    code:200,
                    data: imgURL,
                    msg: '上传成功',
                    
                })
            })
            
        } catch (error) {
            res.json({
                code:400,
                msg: '上传失败',
                data: error
            })
            
        }
        

    }

}


module.exports = new fileUploadController();
