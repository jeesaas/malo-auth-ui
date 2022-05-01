<template>
  <div class="login-wrapper">
    <div class="login-modal">
      <el-form :model="user" ref="loginForm" status-icon :rules="rules">
        <div class="login-title">欢迎登陆</div>
        <el-form-item prop="userCode">
          <el-input type="text" prefix-icon="el-icon-user" v-model="user.userCode"/>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="el-icon-view" v-model="user.userPwd"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        userCode: '',
        userPwd: ''
      },
      rules: {
        userCode: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        userPwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 登陆方法通过api进行管理
          this.$api.login(this.user).then((res) => {
            this.$router.push("/welcome")
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-wrapper {
  display: flex;/*display: flex意思是弹性布局*/
  flex-direction: row;/*布局的排列方向 （主轴排列方向)*/
  /*补充：
    row 默认值，显示为行。方向为当前文档水平流方向，默认情况下是从左往右。
    row-reverse 显示为行。但方向和row属性值是反的，在水平方向上为从右往左。
    column 显示为列 方向为在垂直方向上从上到下
    column-reverse 显示为列。但方向和column属性值是反的
  */
  justify-content: center;/*属性决定了主轴方向上子项的对齐和分布方式*/
  align-items: center;/*每一行中的子元素上下对齐方式*/
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .login-modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;/*向元素添加圆角边框*/
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;/*用于在元素的框架上添加阴影效果*/
    /*
    补充：
      normal	默认。设置合理的行间距。
      number	设置数字，此数字会与当前的字体尺寸相乘来设置行间距。
      length	设置固定的行间距。
      %	      基于当前字体尺寸的百分比行间距。
      inherit	规定应该从父元素继承 line-height 属性的值
    */
    .login-title {
      font-size: 50px;
      line-height: 1.5;/*设置行高*/
      text-align: center;
      margin-bottom: 30px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>