<template>
  <dd
    v-if="!item.hidden"
    class="item">
    <router-link
      class="link"
      :to="item.path">
      <i :class="'iconfont ' + item.meta.icon"></i>
      <span>{{$t('navi.' + item.meta.title)}}</span>
    </router-link>
  </dd>
</template>

<script>
export default {
  name: 'NaviItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    position: relative;
    .link {
      display: block;
      height: 56px;
      line-height: 56px;
      padding: 0 0 0 15px;
      color: #ffffff;
      opacity: .8;
      &:hover {
        box-shadow: 0 0 100px rgba(0, 0, 0, .3) inset;
      }
      &.router-link-active {
        box-shadow: 0 0 100px rgba(0, 0, 0, .3) inset;
        color: #409eff;
      }
      i {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin: 0 0 0 10px;
      }
    }
  }
</style>
