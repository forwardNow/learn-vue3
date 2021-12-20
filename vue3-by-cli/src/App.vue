<template>
  <Child name="zhangsan" age="18" @sayHello="handleSayHello">
    <template v-slot:msg>
      <div>哈哈哈</div>
    </template>
  </Child>
</template>
<script>
import Child from './Child.vue';

export default {
  components: {
    Child
  },

  setup() {
    return {
      handleSayHello(value) {
        console.log('value', value);
      }
    }
  }
};
</script>