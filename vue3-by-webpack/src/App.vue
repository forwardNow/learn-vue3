<template>
  <h1>hello</h1>
  <h2>vue3</h2>
  <h2>{{ message }}</h2>
</template>
<script>
export default {
  setup() {
    const message = '123';

    return {
      message
    };
  }
}
</script>