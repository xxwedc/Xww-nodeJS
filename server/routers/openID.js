const { request } = require("express");
const express=require("express");

let router =express.Router();

// 查询openID
router.get("/getOpenID",require("../controller/openID").getOpenID);


module.exports=router;