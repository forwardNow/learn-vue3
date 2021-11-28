# 学习 vue3

## 1. 简介

发布：

* 2020年9月18日，vue.js 发布 3.0 版本（[vue-next](https://github.com/vuejs/vue-next)），代号 One Piece（海贼王）

性能提升：（快、好、省）

* 打包减少 41%
* 初次渲染 55%，更新渲染快 133%
* 内存减少 54%

源码的升级：

* 响应式： 使用 `Proxy` 替代 `Object.defineProperty`
* 重写 VDOM，Tree-Shaking

更好的支持 TS：

* 官方支持而非通过 loader 

新的特性：

* Composition API（组合API）
  * setup
  * ref、reactive
  * watch、 watchEffect
  * provide、inject

* 新内置组件
  * `<Fragment>`
  * `<Teleport>`
  * `<Suspense>`

其他改变：

* 新的生命周期函数
* data 选项应始终被声明为一个函数： data 的值只能为函数了
* 移除 keyCode （v-on 修饰符） : `@key-up.enter`， `@key-up.13`，后者不可用了

## 2. 创建 vue3 工程

### 2.1. 使用 vue-cli 4.5.0+ 创建

```shell
# 安装/升级 到 4.5.0 以上
npm i -g @vue/cli

# + @vue/cli@4.5.15

# 创建项目（使用管理员权限打开 CMD），选择 vue3
vue create vue3-by-cli

# 启动
cd vue3-by-cli
npm run serve
```

### 2.2. 使用 vite 创建

vite： 

* 官网：[https://vitejs.cn/](https://vitejs.cn/)
* 新一代前端构建工具（相对 webpack 来说），尤雨溪团队开发的

优势：

* 开发环境中，无需打包操作，可快速冷启动。（也就是说省掉了 bundle 的过程）
* 轻量快速的热重载（HMR，hot module replacement）
* 按需编译，无需编译所有模块
* 传统编译 从入口开始打包所有依赖，vite 用哪个模块编译哪个模块

创建工程：

```shell
npm init @vitejs/app

# √ Project name: ... vue3-by-vite
# √ Select a framework: » vue
# √ Select a variant: » vue

# Done. Now run:   

#  cd vue3-by-vite
#  npm install
#  npm run dev

cd vue3-by-vite
npm i
npm run dev
```

总结：

* vite 确实比 webpack 快
* 但没有大规模应用，还有许多坑要踩。（也就是说 现阶段还是用 webpack）

## 3. vue3 工程结构分析

分析入口文件：

* main.js
* App.vue

### 3.1. main.js

#### 3.1.1. vue3

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

createApp 为工厂函数，用于创建根实例（app）

比 vue2 的 vm 更轻量（没有那么多属性和方法）

#### 3.1.2. vue2

```javascript
const vm = new Vue({
  render: h ==> h(App)
});

vm.$mount('#app');
```

### 3.2. App.vue

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

vue3 中的模板（`<template>`）中可以有多个根标签