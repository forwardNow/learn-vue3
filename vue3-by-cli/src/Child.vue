<template>
  <div>姓名： {{ name }}</div>
  <slot name="msg"></slot>
  <button @click="handleClick">click me</button>
</template>
<script>
export default {
  props: [ 'name' ],
  slots: ['msg'],
  emits: ['sayHello'],
  setup(props, context) {
    console.log('props', props); // Proxy {name: 'zhangsan'}
    console.log('context.attrs', context.attrs); // Proxy {age: '18', __vInternal: 1}
    console.log('context.slots', context.slots);

    return {
      handleClick() {
        context.emit('sayHello', 'hhhh');
      }
    }
  },
};
</script>