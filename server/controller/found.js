const express=require('express');
//引入封装好的mysql文件
const db=require("../core/mysql")

//创建路由
const router=express.Router();


/*操作found表
*@author xxwedc
*
*/
class foundController{

//根据关键字决定遍历失物招领还是寻物启事
    async getFound(request,response,next){
        
        let sql="select * from found where type =?; ";
        let type=request.query.type;
        let parmas=[type];
        console.log(parmas);
        let result = await db.query(sql,parmas);
        // console.log(result);
        //返回数据为json，到前端
        response.json({
            code:200,
            data:result,
            message:"查询成功"
        })
    }

//根据关键字查询内容
    async keySelect(request,response,next){

        let foundKey=request.query.foundKey;
        let parmas=["%"+foundKey+"%"];
        let sql="select * from found where detail like ? ";
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


module.exports = new foundController();