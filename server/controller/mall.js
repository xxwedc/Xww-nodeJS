const express = require('express');
const moment = require('moment');
//引入封装好的mysql文件
const db = require("../core/mysql")

//创建路由
const router = express.Router();


/*操作mall_type表
*@author xxwedc
*
*/
class mallController {
    //查询mall_type
    async getMallType(request, response, next) {
        let sql = "SELECT * FROM `mall_type` WHERE 1";
        let result = await db.query(sql);
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
                    message: "查询失败"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "出错"
            })
        }

    }
    //查询推荐商品
    async getCommend(request, response, next) {
        let sql = "SELECT * FROM `goods` WHERE recommend =1;"
        let result = await db.query(sql);
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
                    message: "查询失败"
                })
            }


        } catch (error) {
            console.log(error)
            response.json({
                code: -200,
                data: error,
                message: "出错"
            })
        }

    }
    //根据type查询商品
    async getGoodsType(request, response, next) {

        let type = request.query.type;
        let parmas = [type];
        let sql = "SELECT * FROM `goods` WHERE type =? ";
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
    //根据ID查询商品
    async getGoodsID(request, response, next) {

        let id = request.query.id;
        let parmas = [id];
        let sql = "SELECT * FROM `goods` WHERE id =? ";
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
    //查询个人发布的闲置物品
    async getGoodsMsg(request, response, next) {

        let userid = request.query.userid;
        let parmas = [userid];
        let sql = "SELECT * FROM `goods` WHERE userid=?";
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
    //根据ID下架商品
    async deletedMyGoods(request, response, next) {

        let id = request.query.id;
        let parmas = [id];
        let sql = "DELETE FROM `goods` WHERE id=?";
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
    //插入goods
    async insertGoods(request, response, next) {

        try {
            let params = [
                request.body.userid,
                request.body.name,
                request.body.type,
                request.body.detail,
                request.body.img1,
                request.body.img2,
                request.body.img3,
                request.body.price,
                moment().format("YYYY-MM-DD HH:mm:ss")
            ];
            let sql = "INSERT INTO `goods`(`userid`, `name`, `type`, `detail`, `img1`, `img2`, `img3`, `price`, `time`, `recommend`) VALUES (?,?,?,?,?,?,?,?,?,0)";
            console.log(params)
            let result = await db.query(sql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    data: result,
                    message: "发布成功！"
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
                message: "出错！"
            })
        }

    }
    // 编辑商品
    async updateGoods(request,response,next){
        let sql = "UPDATE `goods` SET `name`=?,`type`=?,`detail`=?,`img1`=?,`img2`=?,`img3`=?,`price`=? WHERE id = ?";
        let params = [
            request.body.name,
            request.body.type,
            request.body.detail,
            request.body.img1,
            request.body.img2,
            request.body.img3,
            request.body.price,
            request.body.id,
        ];
        console.log(params);
        try {
            let result = await db.exec(sql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "修改成功",
                })
            } else {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "修改失败",
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


module.exports = new mallController();


