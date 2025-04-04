const express=require('express');
// 引入got模块发送https请求
const got=require('got');


//创建路由
const router=express.Router();


/*图片转为imgURL
*@author xxwedc
*
*/
class imgURLController{
    

//查询openID
     getImgURL(request,response,next){

        let filePath=request.query.filePath;
        let parmas=[filePath];

        (async () => {
            const {body} = await got.post('https://www.hualigs.cn/api/upload', {
                json: {
                    image: this.filePath,
                    apiType:'ai58',
                    token:'3a20c09e31237618db6ce74e8f5a1a4e'
                },
                responseType: 'json'
            });
        
            console.log(body.data);
            //=> {hello: 'world'}
        })();


        
    }

}


module.exports = new imgURLController();