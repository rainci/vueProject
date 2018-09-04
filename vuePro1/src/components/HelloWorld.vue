<template>
  <div class="hellos">
    <h1>{{ msg }}</h1>
    <h1>{{ reverseMsg }}</h1>
    <a @click='goHome'>go home</a>
    <a @click='goHome2'>go home2</a>
      <keep-alive>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </keep-alive>
    <el-container style="height: 500px; border: 1px solid #eee;">
      <Navbar></Navbar>
      <el-container>
        <div style="width:100%;">
          <Header>我父组件传给子组件的刘雨熙</Header>
          <el-container style="height:420px;overflow:scroll">
            <List :datass="tableData">
              <div slot="one">aaa</div>
              <div slot="two">bbb</div>
              <template slot-scope="aa">
                <span>{{ aa.age }}</span>
                <span>{{ aa.date }}</span>
                <span>{{ aa.address }}</span>
              </template>
            </List>
          </el-container>          
        </div>
      </el-container>
    </el-container>


  </div>
</template>

<script>
import Navbar from './navbar.vue'
import Header from './header.vue'
import List from '../pages/list.vue'
export default {
  name: 'HelloWorld',
  data () {
    const item = {
        date: '2016-05-02',
        name: '王小虎er',
        address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      msg: 'Welcome to Your Vue',
      tableData: Array(20).fill(item)
    }
  },
  components: {
    Navbar,
    Header,
    List  
  },
  computed: {
    reverseMsg: function() {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    goHome() {
        this.$router.push({name: 'Home'})
    },
    goHome2() {
        this.$router.push({name: 'Home2'})
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import "./assets/css/base.scss"; */
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
