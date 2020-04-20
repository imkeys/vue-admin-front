<template>
  <div class="list">
    <div>
      <span>接收到父级传参 v-model: </span>
      <span>{{value}}</span>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index">
        <span @click="onChangeProvince(item.name)">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'zujianhuaList',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: '湖南'
        },
        {
          id: 2,
          name: '浙江'
        },
        {
          id: 3,
          name: '北京'
        },
        {
          id: 4,
          name: '上海'
        }
      ]
    }
  },
  methods: {
    onChangeProvince (value) {
      this.$emit('changeProvince', {
        value: value
      })
    }
  }
}
</script>script

<style lang="less" scoped>
  .list {
    padding: 1em;
    background: #eeeeee;
  }
</style>
