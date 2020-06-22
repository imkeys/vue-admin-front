<template>
  <div>
    <el-table
      :data="lister"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="标识"
        width="100"
        align="center">
      </el-table-column>
      <el-table-column
        prop="article_title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="时间"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        align="center">
        <template slot-scope="scope">
          <el-tag type="success">{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
        align="center">
        <template slot-scope="scope">
          <edit-row :element="scope.row">
            <div slot="tag">
              <p>北京、上海、广州、南京、成都、长沙、安息</p>
            </div>
          </edit-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticle } from '@/api/article'
import editRow from './components/edit-row/'

export default {
  name: 'ArticleList',
  components: {
    editRow
  },
  data () {
    return {
      lister: []
    }
  },
  created () {
    this.handleGetArticle()
  },
  methods: {
    handleGetArticle () {
      getArticle({
        page: 1
      }).then(response => {
        const { list } = response
        this.lister = list
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
