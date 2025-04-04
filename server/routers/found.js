const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询found表
router.get("/getFound",require("../controller/found").getFound);
//根据关键字模糊查询
router.get("/keySelect",require("../controller/found").keySelect);


module.exports=router;