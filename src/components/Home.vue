<template>
  <div class="basic-layout">
    <!-- 左侧菜单 -->
    <div class="nav-side-left"></div>
    <!-- 右侧布局-->
    <div class="content-right">
      <!-- 顶部 -->
      <div class="nav-top">
        <div>面包屑</div>
        <div>用户</div>
      </div>
      <!-- 正文 -->
      <div class="content-main">
        <!-- 路由页面 -->
        <div class="view-main">
          <router-view></router-view>
        </div>
      </div>
      <!-- 底部 -->
      <div class="nav-bottom">备案信息</div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Home'
}
</script>

<style lang="scss">
  .basic-layout{
    /*相对定位*/
    position: relative;
    /*左侧菜单样式*/
    .nav-side-left{
      position: fixed; /*固定定位*/
      width: 200px; /*宽度*/
      height: 100vh; /*高度*/
      /*
        vh and vw：相对于视口的高度和宽度，而不是父元素的（CSS百分比是相对于包含它的最近的父元素的高度和宽度）。
        1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度
        比如：浏览器高度950px，宽度为1920px, 1 vh = 950px/100 = 9.5 px，1vw = 1920px/100 =19.2 px。
        vmax：相对于视口的宽度或高度中较大的那个。其中最大的那个被均分为100单位的vmax。
        vmin：相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin。
      */
      background-color: #001529; /*背景色*/
      color: #fff; /*字体颜色*/
      overflow-y: auto; /*纵向滚动条*/
      transition: width .5s; /*动画，过渡效果*/
    }
    /*右侧布局样式*/
    .content-right{
      margin-left: 200px;
      .nav-top{
        heigth:50px;
        line-height: 50px; /*属性设置行间的距离（行高）*/
        display: flex; /*弹性布局*/
        justify-content: space-between;
        /*
          项目在主轴上的对齐方式(主轴究竟是哪个轴要看属性flex-direction的设置了)
          flex-start：在主轴上由左或者上开始排列
          flex-end：在主轴上由右或者下开始排列
          center：在主轴上居中排列
          space-between：在主轴上左右两端或者上下两端开始排列
          space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
        */
        border-bottom: 1px solid #ddd;
        padding: 0px 10px;
      }
      .content-main{
        height: calc(100vh - 50px - 50px); /*页面高度-top高度-bottom高度*/
        background: #eef0f3;
        padding: 15px;
        .view-main{
          height: 100%;
          overflow-y: auto; /*纵向滚动条*/
          background-color: #fff; /*背景色*/
        }
      }
      .nav-bottom{
        heigth:50px;
        line-height: 50px; /*属性设置行间的距离（行高）*/
        border-top: 1px solid #ddd;
        text-align: center;
      }
    }
  }
</style>
