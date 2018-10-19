<template>
  <div class="hello">
    <h1>hello{{ msg }}</h1>
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
    }
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
