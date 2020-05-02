<template>
  <div class="clearfix">
    <el-dropdown class="lang">
      <i class="iconfont icon-lang icon-yuyanqiehuan"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="changeLanguage('zh_CN')">中文</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="changeLanguage('en')">English</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  created () {
    console.log(111, this.$store.state)
  },
  computed: {},
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="less" scoped>
  .lang {
    float: right;
    width: 30px;
    height: 30px;
    line-height: 0;
    position: relative;
    margin: 10px 15px 0 0;
    .icon-lang {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      color: #666666;
      cursor: pointer;
    }
  }
</style>
