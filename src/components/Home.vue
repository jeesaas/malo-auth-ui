<script>
  export default {
    name : 'Home'
  }
</script>

<template>
  <div>
    <h1>我是Home页面</h1>
    <!-- 子页面路由显示 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }
</style>
