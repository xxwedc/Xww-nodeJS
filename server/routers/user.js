const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询用户是否存在，并存入数据库
router.post("/insertUser",require("../controller/user").insertUser);
//根据openID查询用户信息
router.get("/IDSelect",require("../controller/user").IDSelect);
// 修改用户信息
router.post("/updateUser",require("../controller/user").updateUser);


module.exports=router;