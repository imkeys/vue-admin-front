<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <h2>Vue Admin Lite</h2>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
  .logo {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 0 0 15px;
    background: #2b2f3a;
    overflow: hidden;
    img {
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
    }
    h2 {
      display: inline-block;
      vertical-align: middle;
      margin: 0 0 0 10px;
      font-size: 16px;
      color: #ffffff;
    }
  }
</style>
