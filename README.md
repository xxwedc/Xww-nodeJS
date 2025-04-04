# Xww-nodeJS
基于Node.js的校园智慧小程序系统。包含寻物启事、二手物品出售等模块

## **使用说明：**

serve为服务器文件目录 (运行环境需要安装node.js)

1、下载node_modules依赖。管理员状态下运行cmd。安装命令如下：

```
npm install 
```

如果使用yarn包管理工具，则命令如下：

```
yarn install
```

2、数据库连接，在serve/config/index.js文件中配置自己的数据库连接信息和密码。

3、运行app.js文件，命令行如下：

```
node app.js
```

serve默认端口：8080

## 小程序注意事项说明：

小程序默认请求数据接口为：http://localhost:8080/xxxx/xxxx

如果更改服务器端口，则小程序请求接口http://localhost:8080需要全局替换为修改后端口。

## 注意：

微信开发文档更新openID获取方式后，部分需要获取openID后使用的功能失效。
