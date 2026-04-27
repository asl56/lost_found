# 失物招领系统前端（lost_found）

基于 Vue2 + Element UI 的失物招领前端项目，支持用户端与管理员端两类角色。

## 技术栈

- Vue 2
- Vue Router
- Vuex
- Element UI
- Axios
- ECharts / DataV

## 目录说明

```text
src/
  api/           接口方法封装
  utils/         请求实例与拦截器
  router/        路由与鉴权守卫
  views/         页面（管理员端 + 用户端）
  components/    通用组件
```

## 环境要求

- Node.js 16+（建议 18 LTS）
- npm 8+

## 安装与运行

```bash
npm install
```

```bash
npm run serve
```

默认本地开发地址通常为：`http://localhost:8080`

## 常用命令

```bash
# 本地开发
npm run serve

# 生产构建
npm run build

# 代码检查
npm run lint
```

## 角色与主要功能

- 用户端
  - 登录/注册
  - 失物与招领信息查看、发布、编辑、删除
  - 留言反馈、个人中心、我的发布/联系记录
- 管理员端
  - 公告管理
  - 失物/招领信息审核与管理
  - 用户与管理员账号管理

## 鉴权与请求约定

- 登录后会在本地保存：
  - `jwt`
  - `userID`
  - `role`
  - `avatar`
- 路由守卫会进行登录态和角色检查
- 请求层统一使用 `src/utils/request.js`，统一处理 token 注入和 401/403 失效跳转

## 答辩演示建议流程

1. 使用普通用户账号登录，演示信息浏览与发布
2. 演示留言反馈和个人中心资料修改
3. 切换管理员账号，演示审核与管理功能
4. 演示路由权限控制（未登录或越权访问的拦截）
