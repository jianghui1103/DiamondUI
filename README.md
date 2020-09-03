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

# 引入vue-router
1. npm info vue-router versions 查看版本号
2. yarn add vue-router@4.0.0-beta.9 安装最新版本
3. 在main.js 中引入vue-router import { createWebHashHistory, createRouter } from 'vue-router'
4. 将main.js改成main.ts
5. const history = createWebHashHistory()
    const router = createRouter({
        history: history,
        routes: [
            {path: '/', component: Frank}
        ]
    })

# 报错 找不到xxx.vue
原因 ts只认识.ts 文件 不认识.vue 文件
解决方法 
添加 shims-vue.d.ts 
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

# vscode 报错 只允许一个根标签
解决办法 配置里面添加  "vetur.validation.template": false, 

# v-model
要求： 属性名任意, 假设为X 事件名必须为 "update:x" 
效果： <Switch :value="y" @update:value=" y = $event" /> 可以简写为 <Switch v-model:value="y"/>