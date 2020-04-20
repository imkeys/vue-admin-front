<template>
  <div class="content">
    <h3>习近平考察杭州湿地保护利用和城市治理情况</h3>
    <p>习近平总书记31日先后来到杭州西溪国家湿地公园、城市大脑运营指挥中心，就西溪湿地保护利用情况，以及杭州运用城市大脑推进城市治理体系和治理能力现代化进行考察调研。</p>
    <div class="d">
      <el-button>点击按钮</el-button>
      <p for="">>>> {{province}}</p>
      <br>
      <list
        v-model="province"
        @changeProvince="changeProvinceCallback"/>
    </div>
  </div>
</template>

<script>
import list from './components/list/index'

export default {
  name: 'zujianhua',
  components: {
    list
  },
  data () {
    return {
      province: '无数据'
    }
  },
  methods: {
    changeProvinceCallback (data) {
      this.province = data.value
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    padding: .3rem;
    .d {
      padding: .3rem 0 0 0;
    }
  }
</style>
