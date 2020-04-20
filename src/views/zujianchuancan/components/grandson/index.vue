<template>
  <div style="background: #dddddd; padding: 1em;">
    <h2>孙子组件：grandson</h2>
    <div>
      <span :style="{
        'display': 'block',
        'width': '20px',
        'height': '20px',
        'background': '#ffff00',
        'border': border
      }"></span>
    </div>

    <br>
    <ul>
      <li
        v-for = "(item, index) in searchList"
        :key = "index"
        @click = "onClick(item)">
        <span>{{item}}</span>
      </li>
    </ul>

    <br>
    <input type="text" :value="someNumber" placeholder="" />
  </div>
</template>

<script>
export default {
  name: 'grandson',
  props: {
    searchList: Array,
    someNumber: Number
  },
  data () {
    return {
      border: '3px solid #56dddd'
    }
  },
  created () {
    this.$root.$on('changes', (data) => {
      this.player()
    })
  },
  methods: {
    onClick (data) {
      // 发给上级
      this.$emit('callback', data)

      // 发到全局
      this.$root.$emit('rootback', data)
    },

    player () {
      console.log('触发了子组件的方法')
      this.border = '3px solid #ff0000'
    }
  }
}
</script>
