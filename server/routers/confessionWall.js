const express=require("express");

let router =express.Router();

// 查询表白墙内容
router.get("/getWall",require("../controller/confessionWall").getWall)
// 插入内容
router.post("/insertWall",require("../controller/confessionWall").insertWall)
//根据关键字查询内容
router.get("/keySelect",require("../controller/confessionWall").keySelect)

module.exports=router;