<template>
  <div>姓名： {{ person.name }}</div>
  <div>性别： {{ person.sex }}</div>
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
      person.parents[0].name += 'x';

      // 删除元素
      delete person.name;

      // 添加元素
      person.sex = '男';
    };

    return {
      person,
      change,
    };
  },
};
</script>