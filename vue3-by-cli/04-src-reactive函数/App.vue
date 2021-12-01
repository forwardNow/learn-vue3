<template>
  <div>姓名： {{ person.name }}</div>
  <div>父母： {{ person.parents }}</div>
  <button @click="change">changeName</button>
</template>
<script>
import { reactive } from 'vue';

export default {
  setup() {
    const person = reactive({
      name: '张三',
      parents: [
        { name: '张爸爸' },
        { name: '李妈妈' }
      ]
    });

    const change = () => {
      console.log(name);

      // 不需要使用 $set
      person.parents[0].name += 'x';
    };

    return {
      person,
      change,
    };
  },
};
</script>