const db=require('../core/mysql');
const moment=require('moment');

class ConfessionWall{
    //查询表白墙全部内容
    async getWall(request,response,next){
        //查询confessionWall表
        let sql="SELECT * FROM `ConfessionWall` ";
        let result = await db.query(sql)
        // console.log(result);
        //返回数据为json，到前端
         response.json({
            code:200,
            data:result,
            message:"wall查询成功"
        })

    }
    //表白墙插入内容
    async insertWall(request,response,next){

        let insertSql = 'INSERT INTO `ConfessionWall` (`addressee`,`detail`,`sender`,`time`)VALUES(?,?,?,?);';
        let params = [
            request.body.addressee,
            request.body.detail,
            request.body.sender == "" ? "匿名用户" : request.body.sender,
            moment().format("YYYY-MM-DD HH:mm:ss")
        ];
        console.log(params);
        try {
            let result = await db.exec(insertSql, params);
            if (result && result.affectedRows >= 1) {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "发布成功",
                })
            } else {
                response.json({
                    code: 200,
                    sqldata:result,
                    data:params,
                    msg: "发布失败",
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
    //根据关键字查询内容
    async keySelect(request,response,next){

        let wallKey=request.query.wallKey;
        let parmas=["%"+wallKey+"%"];
        let sql="select * from ConfessionWall where detail like ? ";
        let result= await db.query(sql,parmas);
        try {
                if(result.length != 0){
                    response.json({
                        code:200,
                        data:result,
                        message:"查询成功"
                    })
                }else{
                    response.json({
                        code:200,
                        message:"未查询到相关内容"
                    })
                }

                
        } catch (error) {
            console.log(error)
            response.json({
                code:-200,
                data:error,
                message:"查询失败"
            })
        }

    }

}


module.exports = new ConfessionWall();