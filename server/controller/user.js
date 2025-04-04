const express=require('express');
//引入封装好的mysql文件
const db=require("../core/mysql")

//创建路由
const router=express.Router();


/*操作user表
*@author xxwedc
*
*/
class userController{

//查询个人信息
    async insertUser(request,response,next){
        
        try {
            let params = [
                request.body.nickName,
                request.body.openID,
                request.body.avatarUrl,
                request.body.sex == "" ? "2" : request.body.sex,
                moment().format("YYYY-MM-DD HH:mm:ss")
            ];
            let sql = "INSERT INTO `user`(`name`, `sex`, `phone`, `city`, `email`, `avatarUrl`,`time`) VALUES ([?],[?],[?],[?],[?],[?],[?])";
            let result = await db.query(sql, parmas);
            response.json({
                code: 200,
                data: result,
                message: "用户存储成功！"
            })


        } catch (error) {
            response.json({
                code: -200,
                data: error,
                message: "用户存储失败！"
            })
        }
        
    }
    

}


module.exports = new userController();