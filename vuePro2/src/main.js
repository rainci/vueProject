import Vue from 'vue'
import router from './router'
import Home from './pages/Home.vue'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRouter: window.location.pathname
  },
  computed: {
    viewComponent(){
      const matchCom = router[this.currentRouter];
      // return matchCom
      debugger
      var c = matchCom
          ? require('./pages/'+ matchCom + '.vue')
          : ''
      console.log(c)
      return c
    }  
  },
  render(h){
    return h(this.viewComponent)
    // return h(Home)
  }
})

