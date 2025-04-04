const { request } = require("express");
const express = require("express");

let router = express.Router();

// 发表评论，插入评论数据
router.post("/insertComment", require("../controller/comment").insertComment);
// 查询评论数据
router.get("/IDSelect", require("../controller/comment").IDSelect)
//查询用户的评论
router.get('/IDCommentSelect', require('../controller/comment').IDCommentSelect)
//根据ID删除评论
router.get('/commentDelete', require('../controller/comment').commentDelete)

module.exports = router;