const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询found表
router.get("/getFound",require("../controller/found").getFound);
//根据关键字模糊查询
router.get("/keySelect",require("../controller/found").keySelect);
// 根据ID查询
router.get("/IDSelect",require("../controller/found").IDSelect)
//插入信息
router.post("/insertFound",require("../controller/found").insertFound);
// 查询用户所发的帖子
router.get("/postsSelect",require("../controller/found").postsSelect);
//根据ID删除
router.get("/postsDelete",require("../controller/found").postsDelete);

module.exports=router;