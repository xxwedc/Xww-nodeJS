const { request } = require("express");
const express=require("express");

let router =express.Router();

// 图片转为imgURL
router.get("/getImgURL",require("../controller/imgURL").getImgURL);


module.exports=router;