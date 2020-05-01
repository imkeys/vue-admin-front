<template>
  <div class="wrapper">
    <sidebar class="sidebar" />
    <div class="container">
      <div class="header">
        <navbar class="navbar" />
        <tags-view class="tags-view" />
      </div>
      <app-main class="content" />
    </div>
  </div>
</template>

<script>
import { sidebar, navbar, tagsView, appMain } from './components'

export default {
  name: 'Layout',
  components: {
    sidebar,
    navbar,
    tagsView,
    appMain
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 200px;
    background: #304156;
  }

  .container {
    margin: 0 0 0 200px;
  }

  .header {
    position: relative;
    z-index: 2;
    background: #ffffff;
    box-shadow: 0 3px 3px rgba(0, 0, 0, .1);
    .navbar {
      position: relative;
      z-index: 2;
      height: 50px;
      background: #ffffff;
    }
    .tags-view {
      height: 40px;
      background: #f5f5f5;
    }
  }

  .content {
    min-height: calc(100vh - 90px);
  }
</style>
