# 项目介绍

[在线地址](#在线地址) | [项目特点](#项目特点) | [技术介绍](#技术介绍) | [运行环境](#运行环境) | [开发环境](#开发环境) | [项目部署](#项目部署)

## 在线地址

**项目链接：** [http://106.53.208.88:8200/](http://106.53.208.88:8200/)

- 测试账号
    - 123456
    - 123456

**后台链接：** [http://106.53.208.88:8300/](http://106.53.208.88:8300/)

- 测试账号
    - mall_test
    - mall_test

## 项目特点

- 采用seata作为分布式事务
- nacos注册中心和配置中心
- openFeign远程调用框架
- Ribbon作为负载均衡框架
- 添加音乐播放器，支持在线搜索歌曲。
- 前后端分离部署，适应当前潮流。
- 接入第三方登录，减少注册成本
- 商品搜索支持高亮、分词，拼音，响应速度快。
- 新增aop注解实现日志管理。  
- 支持动态权限修改，采用RBAC模型，前端菜单和后台权限实时更新。
- 代码支持多种搜索模式（Elasticsearch或MYSQL），支持多种上传模式（OSS或本地），可支持配置。
- 代码遵循阿里巴巴开发规范，利于开发者学习。

## 技术介绍

**前端：** vue + vuex + vue-router + axios + vuetify + element + echarts

**后端：** Spring Cloud Alibaba + SpringBoot + openFeign + nacos + Ribbon + seata + nginx + docker + SpringSecurity + Swagger2 + MyBatisPlus + Mysql + Redis + elasticsearch + RabbitMQ

## 运行环境

**服务器：** 4核8G CentOS7.6

**对象存储：** 阿里云OSS

**最低配置：** 4核8G服务器（关闭ElasticSearch）

## 开发环境

| 开发工具                      | 说明              |
| ----------------------------- | ----------------- |
| IDEA                          | Java开发工具IDE   |
| VSCode                        | Vue开发工具IDE    |
| Navicat                       | MySQL远程连接工具 |
| Another Redis Desktop Manager | Redis远程连接工具 |
| X-shell                       | Linux远程连接工具 |
| Xftp                          | Linux文件上传工具 |

| 开发环境      | 版本   |
| ------------- | ------ |
| JDK           | 1.8    |
| MySQL         | 8.0.20 |
| Redis         | 6.0.5  |
| Elasticsearch | 7.12.1 |
| RabbitMQ      | 3.8.5  |



## 限制启动内存
-Xmx64m -Xms64m -Xmn32m -Xss16m