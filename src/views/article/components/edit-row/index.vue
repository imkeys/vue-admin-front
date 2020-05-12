<template>
  <div>
    <el-button
      type="text"
      @click="showDialog">修改</el-button>

    <el-dialog
      title="修改"
      width="500px"
      :visible.sync="isVisible"
      :before-close="handleClose">
      <div>
        <label for="">标题：</label>
        <el-input v-model="title" maxLength="30"></el-input>
        <label for="">标签：</label>
        <el-input v-model="tag" maxLength="4"></el-input>
      </div>
      <div
        slot="footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button
          v-loading="loading"
          type="primary"
          @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LayerRenameText',
  components: {},
  props: {
    element: {
      type: Object,
      default () {
        return {
          title: '',
          tag: ''
        }
      }
    }
  },
  data () {
    return {
      isVisible: false,
      loading: false,
      title: this.element.title,
      tag: this.element.tag
    }
  },
  methods: {
    showDialog () {
      this.isVisible = true
    },
    handleClose () {
      this.isVisible = false
      this.title = this.element.title
      this.tag = this.element.tag
    },
    handleConfirm () {
      this.loading = true

      setTimeout(() => {
        // 模拟异步数据
        this.isVisible = false
        this.element.title = this.title
        this.element.tag = this.tag
        this.loading = false
      }, 2000)
    }
  }
}
</script>
