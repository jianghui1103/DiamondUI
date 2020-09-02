# Vue3 环境搭建
1. yarn global add create-vite-app@1.18.0
2. cva ( 简写 )
3. yarn 安装依赖
4. yarn dev

# 安装命令小知识
· vite 文档给出的命令是 
    npm init vite-app <project-name>
    yarn create vite-app <project-name>
· 等价于
    全局安装create-vite-app
    然后 cva<project-name>
· 等价于
    npx create-vite-app <project-name>
    npx 会帮你全局安装用到的包

# 插件推荐
    vscode 安装vue 3 Snippets 

# vue2 和 vue3 的区别
    90%的写法完全一致,除了以下几点就别
    vue3的template支持多个根标签, vue2不支持
    vue3有createApp(), 而Vue2是 new Vue()
    createApp(组件), new Vue({template,render})