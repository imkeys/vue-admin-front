<template>
  <div style="padding: 20px;">
    <div style="border: 1px solid #ddd; padding: 20px;">
      <son @callback="callback" :searchList="searchList" :someNumber="someNumber" ref="child"></son>
    </div>
    <br>
    <pre v-if="!selectValue">没有任何点击</pre>
    <pre v-else>我点击了： {{selectValue}}</pre>
    <br>
    <label for="">数字：{{someNumber}}</label>
    <br>
    <pre>点击执行动画: <span @click="bindSonPlay">Play</span></pre>
  </div>
</template>

<script>
import son from './components/son/index.vue'

export default {
  name: 'zujiancanzhuan',
  components: {
    son
  },
  data () {
    return {
      searchList: [
        '草船借箭',
        '大富翁',
        '测试数据'
      ],
      someNumber: 1001,
      selectValue: ''
    }
  },
  created () {
    this.$root.$on('rootback', (data) => {
      this.selectValue = data
    })
  },
  methods: {
    callback (value) {
      this.selectValue = value
    },
    bindSonPlay () {
      // 操作子组件的方法
      this.$refs.child.player()

      // 操作在全局中的组件的方法
      this.$root.$emit('changes', 1254)
    }
  }
}
</script>
