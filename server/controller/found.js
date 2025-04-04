const express = require('express');
//引入封装好的mysql文件
const db = require("../core/mysql")
const moment = require('moment');
//创建路由
const router = express.Router();


/*操作found表
*@author xxwedc
*
*/
class foundController {

    //根据关键字决定遍历失物招领还是寻物启事
    async getFound(request, response, next) {

        let type = request.query.type;
        let sql = "select * from found where type =?; ";
        let parmas = [type];
        console.log(parmas);
        let result = await db.query(sql, parmas);
        // console.log(result);
        //返回数据为json，到前端
        response.json({
            code: 200,
            data: result,
            message: "查询成功"
        })
    }

    //根据关键字查询内容
    async keySelect(request, response, next) {

        let foundKey = request.query.foundKey;
        let parmas = ["%" + foundKey + "%"];
        let sql = "select * from found where detail like ? ";
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
                    message: "未查询到相关内容"
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
    //根据ID查询帖子详情
    async IDSelect(request, response, next) {

        let id = request.query.id;
        let parmas = [id];
        let sql = "select * from found where id = ? ";
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
                    message: "未查询到相关内容"
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
    //插入信息
    async insertFound(request, response, next) {
        let insertSql = ' INSERT INTO `found`(`Publisher`, `nickName`, `avatarUrl`, `detail`, `type`, `img1`, `img2`, `img3`, `time`) VALUES (?,?,?,?,?,?,?,?,?);';
        let params = [
            request.body.Publisher,
            request.body.nickName,
            request.body.avatarUrl == "" ? "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7x0IEdeE8xNAnPTca0IMMyicWGiaRVy2mZHibxoeyIlEXpibhpEfCdPGZibVQtG9SZelslkTEQF6daMQ/132" : request.body.avatarUrl,
            request.body.detail,
            request.body.type,
            request.body.img1 == "" ? "" : request.body.img1,
            request.body.img2 == "" ? "" : request.body.img2,
            request.body.img3 == "" ? "" : request.body.img3,
            moment().format("YYYY-MM-DD HH:mm:ss")
        ];
        console.log(params);
        try {
            let result = await db.exec(insertSql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    sqldata: result,
                    data: params,
                    msg: "发布成功",
                })
            } else {
                response.json({
                    code: 200,
                    sqldata: result,
                    data: params,
                    msg: "发布失败",
                })
            }

        } catch (error) {
            response.json({
                code: -200,
                data: params,
                msg: "服务器异常",
                error
            })
        }

    }
    // 查询个人所发的帖子
    async postsSelect(request, response, next) {

        let Publisher = request.query.Publisher;
        let parmas = [Publisher];
        let sql = "select * from found where Publisher = ? ";
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
                    message: "未查询到相关内容"
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
    //根据ID删除
    async postsDelete(request, response, next) {

        let id = request.query.id;
        let parmas = [id];
        let sql = "DELETE FROM `found` WHERE id = ? ";
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


module.exports = new foundController();