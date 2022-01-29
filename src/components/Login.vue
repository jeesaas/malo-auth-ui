<!--
当 <script> 标签具有 setup 属性时，组件在编译的过程中代码运行的上下是 setup() 函数中。
所有ES模块导出都被认为是暴露给上下文的值，并包含在 setup() 返回对象中。
-->
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
const goWelcome = ()=>{
  router.push('/welcome')
}
</script>

<template>
<h1>欢迎来到登陆页面</h1>
  <!-- 采用Composition API方式实现跳转 -->
  <el-button @click="goWelcome">去欢迎页面</el-button>
</template>


<style scoped>

</style>