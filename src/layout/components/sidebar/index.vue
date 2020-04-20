<template>
  <div id="sidebar">
    <el-scrollbar>
      <el-menu>
        <div
          v-for="(item, index) in routes"
          :key="item.path"
          :item="item"
          :index="index">
          <span>{{item.name}}</span>
        </div>
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
  created: {
    this.routes = $router.options.routes
  },
  computed: {}
}
</script>

<style lang="less" scoped>
  #sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    background: #304156;
  }
</style>
