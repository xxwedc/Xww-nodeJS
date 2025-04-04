const express = require('express');
const moment = require('moment');
//引入封装好的mysql文件
const db = require("../core/mysql")

//创建路由
const router = express.Router();


/*操作comment表
*@author xxwedc
*
*/
class commentController {

    //存储评论数据
    async insertComment(request, response, next) {

        try {
            let params = [
                request.body.foundID,
                request.body.userID,
                request.body.detail,
                request.body.userName,
                request.body.avatarUrl,
                moment().format("YYYY-MM-DD")
            ];
            let sql = "INSERT INTO `comment`(`foundID`, `userID`, `detail`, `userName`, `avatarUrl`, `time`) VALUES (?,?,?,?,?,?);";
            console.log(params)
            let result = await db.query(sql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    data: result,
                    message: "发表成功"
                })

            } else {
                response.json({
                    code: 200,
                    data: result,
                    message: "发布失败"
                })

            }

        } catch (error) {
            console.log(error);
            response.json({
                code: -200,
                data: error,
                message: "服务器出错！"
            })
        }

    }
    //根据ID查询评论信息
    async IDSelect(request, response, next) {

        let foundID = request.query.foundID;
        let parmas = [foundID];
        let sql = "select * from comment where foundID = ? ";

        console.log(parmas)

        let result = await db.query(sql, parmas);
        try {
            if (result.length != 0) {
                response.json({
                    code: 200,
                    data: result,
                    message: "查询成功"
                })
            } else {
                response.json({
                    code: 200,
                    message: "评论数据为空"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "查询失败"
            })
        }

    }
    //查询用户所发评论
    async IDCommentSelect(request, response, next) {

        let userID = request.query.userID;
        let parmas = [userID];
        let sql = "select * from comment where userID = ? ";

        console.log(parmas)

        let result = await db.query(sql, parmas);
        //按照时间先后排序，并返回json字符串
        var b = result.sort((c,b) => {return (c.time<b.time)?1:-1});
        try {
            if (result.length != 0) {
                response.json({
                    code: 200,
                    data: b,
                    message: "查询成功"
                })
            } else {
                response.json({
                    code: 200,
                    message: "该用户为评论数据为空"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "查询失败"
            })
        }

    }
    //根据ID删除评论
    async commentDelete(request, response, next) {

        let id = request.query.id;
        let parmas = [id];
        let sql = "DELETE FROM `comment` WHERE cid = ? ";
        console.log(parmas)
        let result = await db.query(sql, parmas);
        try {
            if (result.length != 0) {
                response.json({
                    code: 200,
                    data: result,
                    message: "删除成功"
                })
            } else {
                response.json({
                    code: 200,
                    message: "删除失败"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "出错！"
            })
        }

    }


}


module.exports = new commentController();


