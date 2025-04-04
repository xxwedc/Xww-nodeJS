const { request } = require("express");
const express=require("express");

let router =express.Router();

// 文件上传
router.post("/fileUpload",require("../controller/fileUpload").fileUpload);


module.exports=router;