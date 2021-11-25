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