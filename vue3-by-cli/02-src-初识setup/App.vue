<template>
  <h1>个人信息：</h1>
  <div>姓名： {{ name }}</div>
  <div>年龄： {{ age }}</div>
  <div>性别： {{ gender }}</div>
  <button @click="sayHelloByCompositionAPI">vue3 的写法</button>
  <button @click="sayHelloByOptionAPI">vue2 的写法</button>
</template>
<script>
export default {
  setup() {
    // data （非响应式）
    const name = 'zhangsan';
    const age = 18;

    // method
    const sayHelloByCompositionAPI = () => {
      console.log('组合式 API：', name, age);
    };

    return {
      name,
      age,
      sayHelloByCompositionAPI,
    };
  },

  // 不建议使用这种方式
  data() {
    return {
      gender: '男'
    };
  },
  methods: {
    sayHelloByOptionAPI() {
      // 可以读取 setup 中返回的对象的属性和方法
      console.log('选项式 API', this.name, this.age, this.gender);
    }
  },
}
</script>