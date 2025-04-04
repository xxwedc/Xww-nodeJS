const express=require('express');
//引入封装好的mysql文件
const db=require("../core/mysql")

//创建路由
const router=express.Router();


//get请求要拿到前端传输过来的参数，使用query
//post请求要拿到前端传输过来的参数，使用body
router.get("/getNews",async(request,response,next)=>{
    // let detail = request.query.detail
    // console.log(detail)
    // //Sql的参数
    // let parmas=[detail];

    //查询整张news表
    let sql="select * from news";
    let result = await db.query(sql)
    // console.log(result);
    //返回数据为json，到前端
    response.json({
        code:200,
        data:result,
        message:"新闻查询成功"
    })
})

router.get("/getNewsPage",async(request,response,next)=>{
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

})


module.exports = router