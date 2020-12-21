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
    使用v-model 代替了以前的 v-model和 .sync
    新建content.emit 与 this.$emit 作用相同
    slot插槽改变, 用法改成v-slot:插槽名
    Teleport标签, 是将内容放在什么下面

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

# ref
使用ref 创建内部数据

# :value 和 @input 
使用 :value 和 @input 来进行父子组件交流(组件通信)

# v-model
要求： 属性名任意, 假设为X 事件名必须为 "update:x" 
效果： <Switch :value="y" @update:value=" y = $event" /> 可以简写为 <Switch v-model:value="y"/>

# context.emit
新增了context.emit 与 this.$emit 作用相同 参数是 事件名 事件参数 

# vue3属性绑定
默认所有属性都绑定到根元素
使用inheritAttrs = false 可以取消默认绑定
使用$attrs 或者 context.attrs 获取所有属性
使用 v-bind = "$attrs" 批量绑定属性
使用const { size, ...rest } = context.attrs 将属性分开  

# attrs 和 props 区别
props 需要声明才能取值, attrs不用声明
props 不包含事件, attrs 包含
props 没有声明的属性会在 attrs中
props 支持string以外的类型, attr只有string类型

# Teleport 
是一个标签， <Teleport to="body">内容</Teleport> 中间包含的内容放到body下面

# 如何检查子组件类型
用js 获取插槽内容
defaults = context.slots.default()
defaults[0].type = Tab 

# watchEffect
第一次执行一遍，之后改变再次执行

# 获取宽高位置
const { width,height,top,left } = el.getBoundingClientRect() 

# 通过ref 获取DOM元素
给元素设置 ref='xxx' setup里声明一个xxx 的变量return, 在nextick里面就可以获取到这个DOM元素了

# 使用::v-deep来解决组件内样式修改
