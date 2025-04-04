// 引入express
const express = require("express");

const bodyParser=require('body-parser');

const server=express();

// // 引入中间件
// server.use(bodyParser.urlencoded({extended:false}));
// server.use(bodyParser.json());

server.use(express.urlencoded({extended:false}));
server.use(express.json());

// test
server.use("/api",require('./controller/apiController'));


// 校园新闻
server.use("/news",require('./routers/news'));
// 表白墙
server.use("/confessionWall",require('./routers/confessionWall'));
//失物认领&&寻物启事
server.use("/found",require('./routers/found'));
//用户信息路由
server.use('/user',require('./routers/user'));

//图片转为URL
server.use('/user',require('./routers/imgURL'))


// 监听端口
server.listen(8080,()=>{
    console.log("服务器启动完毕！")
})