## 组件化

### 使用$emit 和 input修改值

1、v-model
```  js
// 引入子组件
<list
  v-model="province"
  @changeProvince="changeProvinceCallback" />

// 子组件 vlue 接受到 v-model 传参
props: {
  value: {
    type: String,
    required: true
  }
}

// 方式一：直接 `input` 修改值
onChangeProvince (value) {
  this.$emit('input', value)
}

// 方式二：使用 changeProvince 来回调给父组件在父组件中修改
onChangeProvince (value) {
  this.$emit('changeProvince', {
    value: value
  })
}

changeProvinceCallback (data) {
  this.province = data.value
}
```



