<template>
  <!-- 在模板上使用，不需要写 “.value” -->
  <div>姓名： {{ name }}</div>
  <div>年龄： {{ person.age }}</div>
  <button @click="change">changeName</button>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    // 定义响应式属性（定义ref对象）
    const name = ref('张三');

    const person = ref({ age: 18 });

    const change = () => {
      console.log(name, person);

      // 修改 引用实现 的值
      name.value += 'x';

      person.value.age += 1;
    };

    return {
      name,
      person,
      change,
    };
  },
};
</script>