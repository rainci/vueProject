<template>
  <div class="hellos">
    <h1>{{ msg }}</h1>
    <a @click='goHome'>go home</a>
    <a @click='goHome2'>go home2</a>
      <keep-alive>
        <transition name="bounce">
          <router-view></router-view>
        </transition>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue'
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
</style>
