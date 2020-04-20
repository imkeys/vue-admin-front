## 组件通信的几种方式

### A、使用$emit 和 $on 来发送和订阅消息

1、$emit
```  js
// 发给上一级
this.$emit('callback', data)

// 发给全局
this.$root.$emit('callback', data)
```

2、$on
```  js
// 订阅一条消息
this.$root.$on('callback', (data) => {
  console.log(data)
})
```

3、ref
``` js
// 执行子组件的方法
// <child @callback="callback" :searchList="searchList" :someNumber="someNumber" ref="child"></child>
this.$refs.child.player(); // [child]是ref的属性值
```
