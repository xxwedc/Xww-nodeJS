const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询新闻表
router.get("/getNews",require("../controller/news").getNews)
// 分页查询新闻表
router.get("/getNewsPage",require("../controller/news").getNewsPage)
//根据关键字查询新闻
router.get("/keySelect",require('../controller/news').keySelect)
//根据id查询返回新闻数据
router.get("/IDSelect",require('../controller/news').IDSelect)

module.exports=router;