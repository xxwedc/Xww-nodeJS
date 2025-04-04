const express=require('express');
//引入封装好的mysql文件
const db=require("../core/mysql")

//创建路由
const router=express.Router();


/*操作新闻表
*@author xxwedc
*
*/
class newsController{
    //查询整张news表
    async getNews(request,response,next){
        //查询整张news表
        let sql="select * from news";
        let result = await db.query(sql)
        //按照时间先后排序，并返回json字符串
        var b = result.sort((c,b) => {return (c.time<b.time)?1:-1});
        // console.log(result);
        //返回数据为json，到前端
        response.json({
            code:200,
            data:b,
            message:"新闻查询成功"
        })
    }
    //分页查询news
    async getNewsPage(request,response,next){
         // 如果没有传入参数，则使用默认值
        let pageSize=request.query.pageSize==undefined?5:request.query.pageSize;
        let pageIndex=request.query.pageIndex==undefined?1:request.query.pageIndex;
        
        let parmas=[ (parseInt(pageIndex) - 1) * parseInt(pageSize) , parseInt(pageSize)];

        let sql="SELECT * FROM news LIMIT ? , ?;";

        let result =await db.query(sql,parmas)
        response.json({
            code:200,
            data:result,
            message:"分页查询成功"
        })


    }

    //根据id查询新闻
    async IDSelect(request,response,next){
        
        let newsID=request.query.newsID;
        let parmas=[newsID];
        let sql="select * from news where id = ? ";

        console.log(parmas)
        
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
                    message:"未查询到相关新闻"
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
    
    // 根据关键字查询新闻内容
    async keySelect(request,response,next){

        
        let newsKey=request.query.newsKey;
        let parmas=["%"+newsKey+"%"];
        let sql="select * from news where detail like ? ";

        console.log(parmas)
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
                        message:"未查询到相关新闻"
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


module.exports = new newsController();