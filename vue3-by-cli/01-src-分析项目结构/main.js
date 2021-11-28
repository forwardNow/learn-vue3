import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// createApp 为工厂函数，专门创建根实例（app）

/** vue2 的写法
 const vm = new Vue({
   render: h ==> h(App)
 });

 vm.$mount('#app');
 */
