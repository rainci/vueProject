import Vue from 'vue'
import router from './router'

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
      return matchCom
          ? require(`./pages/${matchCom}.vue`).default
          : require(`./pages/404.vue`).default
    }  
  },
  render(h){
    return h(this.viewComponent)
  }
})

