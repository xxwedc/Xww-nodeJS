const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询用户是否存在，并存入数据库
router.post("/insertUser",require("../controller/user").insertUser);


module.exports=router;