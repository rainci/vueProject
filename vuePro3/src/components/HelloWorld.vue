<template>
  <div class="hello">
    <h1>hello{{ msg }}</h1>
    <h2>computed计算属性countDoubl：{{countDoubl}},计算属性countDoubleAndDoubl：{{countDoubleAndDoubl}}</h2>
     <h2>computed计算属性通过mapGetters获得：{{countDouble}},计算属性countDoubleAndDouble：{{countDoubleAndDouble}}</h2>
    <div v-if="isLogin">
      welcome {{mobile}} 
      <p @click="logout">logout</p>
    </div>
    <p @click='show' v-else>登陆</p>
    <div class="login" v-if="isSHow">
      <input type="text" v-model.trim = 'mobile' ><br>
      <input type="password" v-model.trim = 'password' ><br>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      mobile: '150123456789',
      password: '123456'
    }
  },
  computed: {
    msg(){
      return this.$store.state.msg
    },
    isSHow(){
      return this.$store.state.isShowLogin
    },
    isLogin(){
      return this.$store.state.isLogin
    },
    countDoubl(){ //获取store中getters属性，与state一样，我们也可以通过Vue的Computed获得Vuex的getters。
      return this.$store.getters.countDouble
    },
    countDoubleAndDoubl(){//获取store中getters属性，与state一样，我们也可以通过Vue的Computed获得Vuex的getters。
      return this.$store.getters.countDoubleAndDouble
    },
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'countDouble',
      'countDoubleAndDouble',
    ])
    // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
    // mapGetters({
    // // 映射 this.double 为 store.getters.countDouble
    //   double: 'countDouble'
    // })
  },
  methods: {
    show(){
      this.$store.commit('showLogin',true)  
    },
    login(){
      //这边做登录操作，然后登录成功后把个人信息暂存vuex
      this.$store.commit('loginSuccess',{'mobile':this.mobile,'password':this.password})  
      this.$store.commit('showLogin',false)  
    },
    logout(){
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
