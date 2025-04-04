const { request } = require("express");
const express = require("express");

let router = express.Router();

// 查询type
router.get("/getMallType", require("../controller/mall").getMallType);
//查询推荐商品
router.get("/getCommend", require("../controller/mall").getCommend);
//根据type查询商品
router.get("/getGoodsType", require("../controller/mall").getGoodsType);
//根据Id查询商品
router.get("/getGoodsID", require("../controller/mall").getGoodsID);
//查询个人发布的闲置物品
router.get("/getGoodsMsg", require("../controller/mall").getGoodsMsg);
//根据ID下架商品
router.post("/deletedMyGoods", require("../controller/mall").deletedMyGoods);
//发布商品
router.post("/insertGoods", require("../controller/mall").insertGoods);
//编辑商品
router.post("/updateGoods", require("../controller/mall").updateGoods);


module.exports = router;