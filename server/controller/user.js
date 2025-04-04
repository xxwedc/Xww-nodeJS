const express = require('express');
const moment = require('moment');
//引入封装好的mysql文件
const db = require("../core/mysql")

//创建路由
const router = express.Router();


/*操作user表
*@author xxwedc
*
*/
class userController {

    //存储用户信息
    async insertUser(request, response, next) {

        try {
            let params = [
                request.body.nickName,
                request.body.openID,
                request.body.avatarUrl,
                request.body.sex == "" ? "2" : request.body.sex,
                moment().format("YYYY-MM-DD HH:mm:ss")
            ];
            let sql = "INSERT INTO `user`(`name`,`id`, `avatarUrl`, `sex`,`time`) VALUES (?,?,?,?,?)";
            console.log(params)
            let result = await db.query(sql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    data: result,
                    message: "用户存储成功！"
                })

            } else {
                response.json({
                    code: 200,
                    data: result,
                    message: "用户已存在！"
                })

            }

        } catch (error) {
            console.log(error);
            response.json({
                code: -200,
                data: error,
                message: "用户存储失败！"
            })
        }

    }
    //根据openID查询用户信息
    async IDSelect(request, response, next) {

        let openID = request.query.openID;
        let parmas = [openID];
        let sql = "select * from user where id = ? ";

        console.log(parmas)

        let result = await db.query(sql, parmas);
        try {
            if (result.length != 0) {
                response.json({
                    code: 200,
                    data: result,
                    message: "用户查询成功"
                })
            } else {
                response.json({
                    code: 200,
                    message: "未查询到用户"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "用户查询失败"
            })
        }

    }
    //修改用户信息
    async updateUser(request,response,next){

        let sql = "UPDATE user SET sex = ?, city = ? ,phone=?,email=? WHERE id = ?";
        let params = [
            request.body.sex,
            request.body.city,
            request.body.phone,
            request.body.email,
            request.body.openID,
        ];
        console.log(params);
        try {
            let result = await db.exec(sql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "保存成功",
                })
            } else {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "保存失败",
                })
            }

        } catch (error) {
            response.json({
                code: -200,
                data:params,
                msg: "服务器异常",
                error
            })
        }

    }
    


}


module.exports = new userController();


