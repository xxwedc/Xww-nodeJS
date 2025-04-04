-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-12-16 14:23:36
-- 服务器版本： 5.6.50-log
-- PHP 版本： 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mydata`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=gb2312;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'lisa', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE `comment` (
  `cid` int(20) NOT NULL COMMENT '表id',
  `foundID` int(20) NOT NULL COMMENT '被评论的信息的id',
  `userID` varchar(160) NOT NULL COMMENT '发表评论的用户的id',
  `detail` varchar(1500) NOT NULL COMMENT '评论的内容',
  `time` varchar(160) NOT NULL COMMENT '发表评论的时间',
  `userName` varchar(160) NOT NULL COMMENT '发表评论用户的昵称',
  `avatarUrl` varchar(160) NOT NULL COMMENT '发表评论用户的头像'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`cid`, `foundID`, `userID`, `detail`, `time`, `userName`, `avatarUrl`) VALUES
(50, 1005, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '2312', '2021-12-06', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132'),
(52, 1007, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '让我看看！', '2021-12-07', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132');

-- --------------------------------------------------------

--
-- 表的结构 `ConfessionWall`
--

CREATE TABLE `ConfessionWall` (
  `id` int(6) NOT NULL COMMENT '表白墙id',
  `addressee` varchar(200) DEFAULT NULL COMMENT 'to',
  `detail` varchar(10000) NOT NULL COMMENT '内容',
  `img` varchar(160) DEFAULT NULL COMMENT '用户上传的图片',
  `sender` varchar(200) NOT NULL DEFAULT '匿名用户' COMMENT 'for',
  `time` varchar(120) NOT NULL,
  `Publisher` varchar(160) NOT NULL COMMENT '发布者的openID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `ConfessionWall`
--

INSERT INTO `ConfessionWall` (`id`, `addressee`, `detail`, `img`, `sender`, `time`, `Publisher`) VALUES
(1, '林xh', '太酷了，帅气，nb，靓仔，欧里给', NULL, '匿名用户', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(2, 'everyone', '有一起去长隆看鬼的吗，请你看', NULL, '匿名用户', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(3, '图书馆里奋斗的人', '富丽堂皇的建筑物是有一块块独立的石块砌成，而石块本身并不美观，废志无以成学，肥学无以成材', NULL, 'XQP', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(4, '乐文学社', '今天偶尔进过乐文学社，发现一个酷似林峰的你，我可以要你的微信吗？', NULL, '一个仙女', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(5, '阿邓', '我好喜欢你啊！', 'http://inews.gtimg.com/newsapp_ls/0/14271273062/0', '匿名用户', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(6, 'M', '每天能见你一面就好一个背影就能让我开心好久！', NULL, '一个无名小卒', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(7, '思佳', '希望我们能在一起好久好久，最好是一辈子啦', NULL, 'BB机', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(8, '单身狗', 'Have not love ok,have not coat not ok', NULL, '匿名用户', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(9, 'zmm', '上学期和你在一个体育班的时候就喜欢你了，只不过一直装作没在意你！', NULL, '一直戴着链子的人', '2021-12-5', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(11, 'xm', '我们开始吧', NULL, 'xxx', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU'),
(22, 'mxl', '念念不忘，必有回响', NULL, 'xw', '2021-12-3', 'olAm85NPOkYxKI9NUi9Db6WL9uAU');

-- --------------------------------------------------------

--
-- 表的结构 `found`
--

CREATE TABLE `found` (
  `id` int(11) NOT NULL COMMENT '失物信息id',
  `Publisher` varchar(160) NOT NULL COMMENT '失物信息发布者id',
  `nickName` varchar(160) NOT NULL COMMENT '发布者的昵称',
  `avatarUrl` varchar(160) NOT NULL COMMENT '发布者的头像地址',
  `detail` varchar(1600) NOT NULL COMMENT '失物详情',
  `time` varchar(160) NOT NULL COMMENT '发布时间',
  `type` varchar(1600) NOT NULL COMMENT '信息类型，如果为lost为寻物启事，如果为found则为失物认领',
  `img1` varchar(1600) DEFAULT NULL COMMENT '图片',
  `img2` varchar(160) DEFAULT NULL,
  `img3` varchar(160) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `found`
--

INSERT INTO `found` (`id`, `Publisher`, `nickName`, `avatarUrl`, `detail`, `time`, `type`, `img1`, `img2`, `img3`) VALUES
(1005, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '早透', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '在上马克思课的时候，发现座位下有一个充电宝，罗马仕的，20000毫安的', '2021-10-06', 'found', 'https://img0.baidu.com/it/u=1469658150,2566612622&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=2996849444,3159923629&fm=26&fmt=auto', NULL),
(1007, 'abds', 'zaot!', 'https://thirdwx.qlogo.cn/mmopen/vi_32/NiadFVtMlR4THengML35cgveQFYFBDKTnibPyBlJHesU6q7JHugjVZCOibgnRF3dcG6Gm40opkuHyfZ4OYbtesjDA/132', '捡到一台19pro max1tb 远峰蓝', '2021-11-29', 'found', '', '', NULL),
(1141, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '丢失一串钥匙', '2021-12-06 17:45:15', 'lost', NULL, NULL, NULL),
(1145, 'olAm85CfQFlk15IysMnImyWUuGR8', 'Jy', 'https://thirdwx.qlogo.cn/mmopen/vi_32/NiadFVtMlR4THengML35cgveQFYFBDKTnibPyBlJHesU6q7JHugjVZCOibgnRF3dcG6Gm40opkuHyfZ4OYbtesjDA/132', '孤寡', '2021-12-11 15:16:28', 'found', NULL, NULL, NULL),
(1146, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '123123', '2021-12-11 15:18:04', 'found', NULL, NULL, NULL),
(1147, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '213', '2021-12-11 15:19:12', 'found', NULL, NULL, NULL),
(1148, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '早透！', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '213', '2021-12-11 15:20:14', 'found', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `id` int(16) NOT NULL COMMENT '商品主键id',
  `userid` varchar(160) DEFAULT NULL COMMENT '发布者的id',
  `name` varchar(160) NOT NULL COMMENT '商品名称',
  `type` int(16) NOT NULL COMMENT '商品种类',
  `detail` varchar(1600) NOT NULL COMMENT '商品介绍',
  `img1` varchar(160) DEFAULT NULL COMMENT '商品图片1',
  `img2` varchar(160) DEFAULT NULL COMMENT '商品图片2',
  `img3` varchar(160) DEFAULT NULL COMMENT '商品图片3',
  `price` varchar(16) NOT NULL COMMENT '商品价格',
  `time` varchar(160) NOT NULL COMMENT '商品发布时间',
  `recommend` int(1) NOT NULL DEFAULT '1' COMMENT '默认为1，0为不推荐，1为推荐'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `userid`, `name`, `type`, `detail`, `img1`, `img2`, `img3`, `price`, `time`, `recommend`) VALUES
(2, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '美的的吸尘器', 4, '美的牌吸尘器，九成新，包邮。大品牌，值得信赖', 'https://pic4.zhuanstatic.com/zhuanzh/9efb4e7f-d089-48ab-8136-3464b479fb5c.jpg?wt=%E8%BD%AC%E8%BD%AC%40%E5%A4%A7%E8%BF%9E%E5%A4%A7%E7%AA%91%E6%B9%BE%E9%A9%AC%E5%', 'https://pic3.zhuanstatic.com/zhuanzh/7a8589d4-7e8f-47ba-8058-165f1cca273d.jpg?wt=%E8%BD%AC%E8%BD%AC%40%E5%A4%A7%E8%BF%9E%E5%A4%A7%E7%AA%91%E6%B9%BE%E9%A9%AC%E5%', 'https://pic2.zhuanstatic.com/zhuanzh/5e4b5ea0-0fe9-4947-aea6-b0fc1454ad40.jpg?wt=%E8%BD%AC%E8%BD%AC%40%E5%A4%A7%E8%BF%9E%E5%A4%A7%E7%AA%91%E6%B9%BE%E9%A9%AC%E5%', '156.99', '2021-12-1', 1),
(3, 'olAm85M98YcTnU8sAWrUxy1wSjVo', 'PS4 slim', 2, 'PS4 slim 500g 国行 9新 各种线 原封无拆修', 'http://inews.gtimg.com/newsapp_ls/0/14274998246/0', 'http://inews.gtimg.com/newsapp_ls/0/14274998255/0', 'http://inews.gtimg.com/newsapp_ls/0/14274998287/0', '1999', '2021-11-6', 1),
(4, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '思路决定出路正版 书籍', 1, '思路决定出路正版 书籍 跨界思考逆转做人做事为人处世人际交往说话沟通技巧销售管理狼性社交职场创业经商谈判成功学全励志书籍', 'http://inews.gtimg.com/newsapp_ls/0/14275007735/0', 'http://inews.gtimg.com/newsapp_ls/0/14275007729/0', 'http://inews.gtimg.com/newsapp_ls/0/14275007738/0', '9.9', '2021-10-06', 1),
(5, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '三体全集3册', 1, '三体全集3册刘慈欣典藏雨果奖全套12黑暗森林3死神永生科幻小说书全套三本新华书店正版包邮畅销流浪地球', 'http://inews.gtimg.com/newsapp_ls/0/14275012508/0', 'http://inews.gtimg.com/newsapp_ls/0/14275012504/0', 'http://inews.gtimg.com/newsapp_ls/0/14275012569/0', '45.99', '2021-12-6', 1),
(6, 'olAm85M98YcTnU8sAWrUxy1wSjVo', 'suamoment字母刺绣针织帽', 3, 'suamoment字母刺绣针织帽潮流休闲时尚保暖防寒冬季套头帽子', 'http://inews.gtimg.com/newsapp_ls/0/14275021934/0', 'http://inews.gtimg.com/newsapp_ls/0/14275021938/0', 'http://inews.gtimg.com/newsapp_ls/0/14275021959/0', '699', '2021-12-08', 1),
(7, 'olAm85NPOkYxKI9NUi9Db6WL9uAU', 'ins港风毛呢大衣', 3, '2021新款假两件外套男秋冬季痞帅情侣装连帽风衣ins港风毛呢大衣', 'http://inews.gtimg.com/newsapp_ls/0/14275026759/0', 'http://inews.gtimg.com/newsapp_ls/0/14275026768/0', 'http://inews.gtimg.com/newsapp_ls/0/14275026771/0', '199', '2021-12-08', 1),
(8, 'olAm85JKcESTc3iKVQtzl6j7Vozo', '忠犬小八梨连帽毛呢大衣', 3, '【现货】忠犬小八梨形自制日系牛角扣连帽毛呢大衣外套加厚外衣女', 'http://inews.gtimg.com/newsapp_ls/0/14275032122/0', 'http://inews.gtimg.com/newsapp_ls/0/14275032131/0', 'http://inews.gtimg.com/newsapp_ls/0/14275032135/0', '399', '2021-12-8', 1),
(9, 'olAm85JKcESTc3iKVQtzl6j7Vozo', 'Prada/普拉达女士再生尼龙华达呢羽绒外套', 3, 'Prada/普拉达女士再生尼龙华达呢羽绒外套\r\n品牌名称：Prada/普拉达\r\n品牌: Prada/普拉达\r\n尺码: 40 42 36 38\r\n颜色分类: 乳白色 白色\r\n填充物: 白鹅绒\r\n货号: 291947_1WQ8_S_202\r\n上市年份季节: 2021年秋季\r\n充绒量: 250g(含)-300g(不含)\r\n含绒量: 90%', 'http://inews.gtimg.com/newsapp_ls/0/14275037559/0', 'http://inews.gtimg.com/newsapp_ls/0/14275037563/0', 'http://inews.gtimg.com/newsapp_ls/0/14275037584/0', '24700.00', '2021-12-07', 1),
(10, 'olAm85JKcESTc3iKVQtzl6j7Vozo', 'blackpink lisa同款中长款风衣女小个子秋季2021新款气质外套百搭', 3, 'blackpink lisa同款中长款风衣女小个子秋季2021新款气质外套百搭\r\n适用年龄: 25-29周岁材质: 涤纶尺码: XS S M L XL面料材质: 涤纶图案: 纯色风格: 通勤通勤: 韩版领子: 西装领衣门襟: 双排扣颜色分类: 图片色 经典黑袖型: 常规货号: QM-8208成分含量: 91%(含)-95%(含)年份季节: 2020年秋季袖长: 长袖厚薄: 常规衣长: 中长款服装版型: 修身型里料分类: 涤纶流行元素/工艺: 纽扣', 'http://inews.gtimg.com/newsapp_ls/0/14275047670/0', 'http://inews.gtimg.com/newsapp_ls/0/14275047729/0', 'http://inews.gtimg.com/newsapp_ls/0/14275047737/0', '469.99', '2021-12-08', 1),
(11, 'olAm85JKcESTc3iKVQtzl6j7Vozo', '立体压花短款宽松立领轻薄粉色羽绒服女ins潮2021年冬季新款外套', 3, '立体压花短款宽松立领轻薄粉色羽绒服女ins潮2021年冬季新款外套\r\n品牌: other/其他适用年龄: 18-24周岁尺码: S M L XL图案: 纯色风格: 街头街头: 中性领子: 立领衣门襟: 拉链颜色分类: 黑色 浅灰色 粉色 克莱因蓝材质: 其他袖型: 常规填充物: 灰鸭绒主材质含量: 96%及以上上市年份季节: 2021年冬季袖长: 长袖厚薄: 常规衣长: 常规服装版型: 直筒型流行元素/工艺: 压印 口袋 拉链充绒量: 200g(含)-250g(不含)含绒量: 80%', 'http://inews.gtimg.com/newsapp_ls/0/14275052694/0', 'http://inews.gtimg.com/newsapp_ls/0/14275052675/0', 'http://inews.gtimg.com/newsapp_ls/0/14275052690/0', '299', '2021-12-8', 1),
(12, 'olAm85JKcESTc3iKVQtzl6j7Vozo', '数码照相机学生小型入门级微单ccd复单反4K高清卡片机旅游摄影机', 2, '数码照相机学生小型入门级微单ccd复单反4K高清卡片机旅游摄影机\r\n品牌: 初步型号: DC101A像素: 2100万及以上成色: 全新售后服务: 店铺三包传感器尺寸: 1/1.7英寸传输类型: 有线传输电池类型: 锂电池颜色分类: 4K4800万官方标配【无卡】 4K4800万官方标配+32GB 4K4800万套餐一+32GB 4K4800万套餐二+32GB 4K4800万套餐三+32GB 4K4800万官方标配+64GB 4K4800万套餐一+64GB 4K4800万套餐二+64GB 4K4800万套餐三+64GB 4K4800万官方标配+128GB 4K4800万套餐一+128GB 4K4800万套餐二+128GB 4K4800万套餐三+128GB重量: 201g(含)-300g(含)套餐: 官方标配有效像素: 2000万以上防抖性能: 电子防抖高清摄像: 4K（3840x2160）显示屏尺寸: 2.7英寸感光元件类型: CMOS特殊功能: 广角 微距 高清摄像 可旋转镜头类型: 可更换镜头适用场景: 家用屏幕类型: 非触摸屏光学变焦: 其他/other上市时间: 2020-09-30', 'http://inews.gtimg.com/newsapp_ls/0/14275058607/0', 'http://inews.gtimg.com/newsapp_ls/0/14275058646/0', 'http://inews.gtimg.com/newsapp_ls/0/14275058705/0', '1999.00', '2021-12-07', 1),
(13, 'olAm85NPOkYxKI9NUi9Db6WL9uAU', '苏泊尔IH球釜电饭煲智能多功能家用5升l电饭锅柴火饭官方旗舰正品', 4, '苏泊尔IH球釜电饭煲智能多功能家用5升l电饭锅柴火饭官方旗舰正品\r\n品牌名称：SUPOR/苏泊尔\r\n更多参数产品参数：\r\n\r\n证书编号：2017010718995078证书状态：有效产品名称：IH电磁电饭煲3C规格型号：CFXB40HC17－130, SF40HC16,CFXB40HC30－130,4.0L; CFXB...产品名称：SUPOR/苏泊尔 SF50HC750品牌: SUPOR/苏泊尔型号: SF50HC750电饭煲多功能: 蒸煮 煮粥 煲仔饭 热饭 柴火饭 快速饭 杂粮内胆材质: 釜胆容量: 5L形状: 方形适用人数: 5人-6人颜色分类: 玫瑰金控制方式: 微电脑式加热方式: 电磁加热', 'http://inews.gtimg.com/newsapp_ls/0/14275065433/0', 'http://inews.gtimg.com/newsapp_ls/0/14275065544/0', 'http://inews.gtimg.com/newsapp_ls/0/14275065547/0', '499', '2021-12-07', 1),
(14, 'olAm85NPOkYxKI9NUi9Db6WL9uAU', '浮生六记 沈复正版原版文言文版 附白话文全译', 1, '浮生六记 沈复正版原版文言文版 附白话文全译\r\n产品参数：\r\n\r\n产品名称：浮生六记ISBN编号: 9787545550412书名: 浮生六记作者: 沈复定价: 25.00元书名: 浮生六记开本: 16开是否是套装: 否出版社名称: 天地出版社', 'http://inews.gtimg.com/newsapp_ls/0/14275074911/0', 'http://inews.gtimg.com/newsapp_ls/0/14275075043/0', 'http://inews.gtimg.com/newsapp_ls/0/14275075070/0', '12.9', '2021-12-06', 1),
(15, 'olAm85M98YcTnU8sAWrUxy1wSjVo', '赤兔Pro跑步机家用款健身房专用小型超静音折叠减震坡度智能减肥', 5, '赤兔Pro跑步机家用款健身房专用小型超静音折叠减震坡度智能减肥\r\n品牌名称：赤兔\r\n产品参数：\r\n\r\n品牌: 赤兔系列: pro系列售后服务: 全国联保产地: 中国颜色分类: 赤兔Pro 标准版 赤兔Pro 心率版（含心率手环） 赤兔Pro 会员版（含心率手环+App会员）上市时间: 2018年夏季是否可折叠: 是货号: pro1驱动类型: 电子健身器材分类: 家用跑步机心率测试: 无线心率测试配送方式: 送货到家并安装是否商场同款: 否跑步机类型: 单功能跑步机跑带宽度: 50cm以上（含）智能类型: 其他智能跑带区域: 136x51cm展开尺寸: 180x84x132cm折叠尺寸: 76x84x156cm跑步机净重: 105kg跑步机最大承重: 120kg坡度调整方式: 电动持续输出马力: 2.0hp峰值马力: 4.5hp速度调节范围: 1-16Km/h', 'http://inews.gtimg.com/newsapp_ls/0/14275087295/0', 'http://inews.gtimg.com/newsapp_ls/0/14275087160/0', 'http://inews.gtimg.com/newsapp_ls/0/14275087148/0', '8966', '2021-12-05', 1),
(16, 'olAm85NPOkYxKI9NUi9Db6WL9uAU', '厂家直销旅行功夫茶具套装家用户外车载便携迷你茶壶茶杯LOGO定制', 6, '厂家直销旅行功夫茶具套装家用户外车载便携迷你茶壶茶杯LOGO定制\r\n品牌: 创新陶瓷材质: 瓷风格: 日式产地: 德化县适用人数: 4人类型: 整套功夫茶具流行元素: 小清新颜色分类: 浅绿色企鹅一壶二杯 浅绿色企鹅一壶四杯 浅绿色企鹅一壶四杯红盒 浅绿色企鹅一壶四杯一盘长方包 浅绿色西施一壶四杯一盘长方包 浅绿色企鹅一壶四杯一白盘四方包 浅绿色西施一壶四杯一白盘四方包 绿色企鹅壶配工艺盒 绿企鹅一壶四杯一罐一白盘四方包 白企鹅一壶四杯一罐一白盘四方包 绿企鹅一壶四杯一海一白盘四方包 白西施一壶四杯一海一白盘四方包 绿企鹅大套组 白企鹅大套组 绿西施大套组 白企鹅一壶四杯长方黑包 绿色西施壶大套组 绿西施一壶四杯一罐一白盘四方包 绿企鹅一壶四杯长方黑包 绿色单 企鹅壶 绿色企鹅壶配红色工艺盒 国潮西施壶配2杯墨绿 国潮西施壶配4杯墨绿 国潮3杯+茶叶罐 墨绿主图来源: 自主实拍图茶具类型: 整套功夫茶具配茶盘材质: 竹是否手工: 是', 'http://inews.gtimg.com/newsapp_ls/0/14275095459/0', 'http://inews.gtimg.com/newsapp_ls/0/14275095481/0', NULL, '168', '2021-10-03', 0);

-- --------------------------------------------------------

--
-- 表的结构 `mall_type`
--

CREATE TABLE `mall_type` (
  `id` int(16) NOT NULL COMMENT 'typed的ID',
  `typeName` varchar(16) NOT NULL COMMENT 'type名称',
  `typedes` varchar(1600) DEFAULT NULL COMMENT 'type简介'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mall_type`
--

INSERT INTO `mall_type` (`id`, `typeName`, `typedes`) VALUES
(0, ' recommend', '推荐'),
(1, 'book', '书籍'),
(2, 'digital', '数码'),
(4, 'aclothes', '服饰'),
(5, 'furniture', '电器'),
(6, 'sports', '运动户外'),
(7, 'other', '其它');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(6) NOT NULL COMMENT '新闻id',
  `title` varchar(80) NOT NULL COMMENT '新闻标题',
  `detail` mediumtext NOT NULL COMMENT '新闻详情',
  `img` varchar(200) NOT NULL COMMENT '新闻图片',
  `author` varchar(100) NOT NULL COMMENT '新闻发布者',
  `time` varchar(160) NOT NULL COMMENT '新闻发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `detail`, `img`, `author`, `time`) VALUES
(1, '爱在工程，情满中秋——中秋节学校给全校学生送月饼了', ' “中秋月更圆，家国情愈浓”，今年中秋节受疫情影响，学生留在学校过中秋，恰逢新生军训，学校积极认真做好中秋假期疫情防控和留校师生服务保障工作，强化对留校师生的关心关爱，学校师生一起欢度佳节。\r\n\r\n9月21日中秋节当天，学校举办“爱在工程、情满中秋”慰问活动，学校党委书记吴琦琳和校长李丽等学校领导分别到广州校区、省职教城（清远）校区与在校师生一起欢度中国传统节日，向16000多名在校师生送上包含中秋月饼、牛奶和桔子的节日礼品，慰问了节假日坚守在工作岗位上的军训教官、教职工和校园防疫志愿者。校园锣鼓阵阵，醒狮文化表演，吸引了众多师生观看，气氛热烈。\r\n\r\n吴琦琳表示，中秋节是家的节日，饱含着亲情团聚与沟通情感的诉求，中秋节也是国的节日，是传统文化中对于国家统一、国泰民安等价值表达的重要载体，传递出人民对国家深沉的爱。中秋承载着深厚的故乡情、家国情，学校要大力弘扬中华民族优秀传统文化，坚守中华文化立场、传承中华文化基因，汲取中国智慧、弘扬中国精神、传播中国价值，不断增强中华优秀传统文化的生命力和影响力，把传递爱心关怀的慰问活动每年延续做下去，共建和谐美好的校园文化氛围。', 'https://5b0988e595225.cdn.sohucs.com/c_cut,x_18,y_178,w_622,h_414/images/20211111/ef6ec7b905a44158906773d23e1b263e.jpeg', '广东工程职业技术学院', '2021-09-21'),
(2, '省职教城校区喜迎新“工程人”', '9月23日，广东工程职业技术学院省职教城校区迎来了一批“新工程人”，五千多名怀揣着梦想的学子带着对大学的憧憬开启了筑梦之旅。\r\n每一张朝气蓬勃的面孔，\r\n都将在这里踏上人生的新征程。  \r\n迎着清晨的第一缕阳光，老师和志愿者们早早集合，满怀期盼的心情迎接小伙伴们。校园内温馨的提示和热情的工作人员，温暖的气氛充满校园的每一个角落。\r\n工程学子们，大学生活刚刚起步，希望你们不负韶华，勇敢追梦，在新的征途中创造新辉煌！\r\n\r\n', 'https://game.gtimg.cn/images/lol/act/a20211112champion/pic-m.png', '广东工程职业技术学院', '2021-09-24'),
(3, '万粽飘香过端午，学史力行办实事', '疫情无情 工程有情！\r\n\r\n粽子里有米，我心里有你！！\r\n\r\n疫情防控为重，留校过节，一样有滋有味！！！\r\n\r\n这是学生们在收到端午爱心节日礼包后的真实感受。和去年一样，因为受到了疫情影响，广东工程职业技术学院的在校师生以这种特殊而温馨的方式一起欢度端午节，共享粽香粽意粽情棕乐。业技术学院', 'https://5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_640,h_320,g_face/images/20211111/43252d13f6d040bda0956c0750c81d43.gif', '广东工程职业技术学院', '2021-09-16'),
(4, '广州校区拍了拍你：Hey，新工程人，你好！', '秋高云淡，风清气爽。\r\n\r\n迎着9月12日第一缕晨光，\r\n\r\n学校广州天河校区盛装准备，\r\n\r\n拥抱3000名来自全国各地心怀梦想新“工程人”。\r\n一张张满怀笑意的新面孔，\r\n\r\n在这里开启崭新的故事。\r\n\r\n你好，新同学！\r\n\r\n绚丽多彩的大学生活在这里扬帆起航。\r\n一张张满怀笑意的新面孔，\r\n\r\n在这里开启崭新的故事。\r\n\r\n你好，新同学！\r\n\r\n绚丽多彩的大学生活在这里扬帆起航。', 'https://5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_640,h_320,g_face/images/20211111/05a825430bdb4936a7de6f44e178a861.jpeg', '广东工程职业技术学院', '2021-09-12'),
(5, '董璇晒鲛人造型图，在水中镜头绝美超养眼', '2021年新闻表插入测试', 'https://5b0988e595225.cdn.sohucs.com/q_70,c_lfill,w_640,h_320,g_face/images/20211111/e31a499937c041548fc9839ae787fdbb.jpeg', 'xxw', '2021-09-16');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` varchar(160) NOT NULL COMMENT '用户唯一id，openid',
  `name` varchar(150) NOT NULL COMMENT '用户昵称',
  `sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `phone` varchar(16) DEFAULT NULL COMMENT '联系电话',
  `city` varchar(160) DEFAULT NULL COMMENT '城市',
  `email` varchar(160) DEFAULT NULL COMMENT '邮箱',
  `avatarUrl` varchar(160) NOT NULL COMMENT '用户头像地址',
  `time` date NOT NULL COMMENT '用户首次注册时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `sex`, `phone`, `city`, `email`, `avatarUrl`, `time`) VALUES
('olAm85BxBF02herBqLEJib7EjSTE', '熊本熊本熊', '1', NULL, NULL, NULL, 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erAwmpDcic8FYwsFsyZiaa4iadPRIdicUpd1wNHW07bt76QV8M0BibECHUgoWfjW5TGXBL8MyHiaym913JA/132', '2021-11-29'),
('olAm85CfQFlk15IysMnImyWUuGR8', 'Jy', '1', '18814275784', '上海市上海市黄浦区', NULL, 'https://thirdwx.qlogo.cn/mmopen/vi_32/NiadFVtMlR4THengML35cgveQFYFBDKTnibPyBlJHesU6q7JHugjVZCOibgnRF3dcG6Gm40opkuHyfZ4OYbtesjDA/132', '2021-11-27'),
('olAm85JKcESTc3iKVQtzl6j7Vozo', '士多啤梨i', '1', NULL, '重庆市重庆市万州区', NULL, 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLsBXIu6pibTYSlSngR5GRshX2iaHXZZIgwfic6Y1TSDuS5bE1xvLgaibbDr14EgKjlTmju6OCkHQaCCQ/132', '2021-11-28'),
('olAm85M98YcTnU8sAWrUxy1wSjVo', '早透！', '0', '18814275784', '河北省石家庄市长安区', '853218037@qq.com', 'https://thirdwx.qlogo.cn/mmopen/vi_32/SSPl9iaPiafMDyc2E5eKwePUY1WFviaRIkVfd3CzN376gkEkpKcGKHXWagEc2ZNWhGuOibt8iaic3bznVh31P7ickQtaA/132', '2021-11-29'),
('olAm85NPOkYxKI9NUi9Db6WL9uAU', 'Sky', '0', '18888888888', '广东省广州市天河区', '1988888888', 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7x0IEdeE8xNAnPTca0IMMyicWGiaRVy2mZHibxoeyIlEXpibhpEfCdPGZibVQtG9SZelslkTEQF6daMQ/132', '2021-11-22');

--
-- 转储表的索引
--

--
-- 表的索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`cid`);

--
-- 表的索引 `ConfessionWall`
--
ALTER TABLE `ConfessionWall`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `found`
--
ALTER TABLE `found`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mall_type`
--
ALTER TABLE `mall_type`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `cid` int(20) NOT NULL AUTO_INCREMENT COMMENT '表id', AUTO_INCREMENT=54;

--
-- 使用表AUTO_INCREMENT `ConfessionWall`
--
ALTER TABLE `ConfessionWall`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT '表白墙id', AUTO_INCREMENT=25;

--
-- 使用表AUTO_INCREMENT `found`
--
ALTER TABLE `found`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '失物信息id', AUTO_INCREMENT=1149;

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT COMMENT '商品主键id', AUTO_INCREMENT=35;

--
-- 使用表AUTO_INCREMENT `mall_type`
--
ALTER TABLE `mall_type`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT COMMENT 'typed的ID', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT COMMENT '新闻id', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
