<template>
  <div id="sidebar">
    <el-scrollbar>
      <el-menu
        background-color="#304156"
        text-color="#ffffff"
        active-text-color="#3792ff">
        <template v-for="(item, index) in routes">
          <el-menu-item
            v-if="!item.hidden"
            :key="item.path"
            :index="item.path"
            :data-index="index">
            <router-link :to="item.path">
              <i class="iconfont icon-home"></i>
              <span>{{item.name}}</span>
            </router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
  }
}
</script>

<style lang="less" scoped>
  #sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 200px;
    background: #304156;
  }
</style>
