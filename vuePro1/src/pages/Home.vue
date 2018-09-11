<template>
    <div>
        <p>{{msg}}</p>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>
        <List :datass="tableData">
          <span slot="one">aaa</span>
          <div slot="two">bbb</div>
          <!-- aa代表插槽作用域名称，对应父组件中<div class="default"> <slot :address="datass[1].address"></slot> </div> -->
          <template slot-scope="aa">
            <span v-if="aa.address">✓</span>
          </template>
          <!-- 下面的书写方式和上面的结果一致 -->
          <!-- <template slot-scope="{address}"> 
            <span v-if="address">x</span>
          </template> -->
        </List>
    </div>
</template>
<script>
import List from './list.vue'
export default {
  name: "Home",
  components: {
    List
  },
  data () {
    const item = {
        date: '2016-05-02',
        name: '王小虎er',
        address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      msg: '刘雨熙的home页',
      tableData: Array(20).fill(item)
    }
  },
};
</script>

