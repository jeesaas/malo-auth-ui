<template>
<h1>我是欢迎页面</h1>
  <!-- 采用链接方式实现跳转 -->
  <router-link to="/login">去登陆(方式1)</router-link>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <el-button @click="goLogin">去登陆(方式2)</el-button>
</template>

<script>
  export default {
    name: "Welcome",
    methods:{
      goLogin(){
        this.$router.push("/login")
      }
    }
  }
</script>

<style scoped>

</style>