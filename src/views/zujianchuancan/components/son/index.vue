<template>
  <div style="background: #eeeeee; padding: 1em;">
    <h2>子组件：child</h2>
    <ul>
      <li
        v-for = "(item, index) in searchList"
        :key = "index"
        @click = "onClick(item)">
        <span>{{item}}</span>
      </li>
    </ul>

    <br>
    <div>
      <grandson
        :searchList="searchList"
        :someNumber="someNumber"
        @callback="fs"></grandson>
      返回值：{{fanhui3}}
      <br>
      监听返回值： {{fanhui4}}
    </div>

    <br>
    <div>
      <span :style="{
        'display': 'block',
        'width': '20px',
        'height': '20px',
        'background': '#ffff00',
        'border': border
      }"></span>
    </div>
  </div>
</template>

<script>
import grandson from '../grandson/index.vue'

export default {
  name: 'son',
  components: {
    grandson
  },
  props: {
    searchList: Array,
    someNumber: Number
  },
  data () {
    return {
      fanhui3: '',
      fanhui4: '',
      border: '3px solid #dddddd'
    }
  },
  created () {
    this.$root.$on('rootback', (data) => {
      this.fanhui4 = data
    })
  },
  methods: {
    onClick (data) {
      this.$emit('callback', data)
    },

    fs (data) {
      this.fanhui3 = data
    },

    player () {
      console.log('触发了子组件的方法')
      this.border = '3px solid #ff0000'
    }
  }
}
</script>
