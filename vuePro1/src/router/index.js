import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../pages/Home'
import Base from '../pages/base/base'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/base',
          name: 'Base',
          component: Base
        }
      ]
    },
    // {
    //   path: '/myhome',
    //   name: 'MyHome',
    //   redirect: '/home'
    // },
    {
      path: '/myhome',
      name: 'MyHome',
      redirect: { name: 'Home' }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return { x: 100, y: 100 } // return 期望滚动到哪个的位置
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 3000)
    })
  }
})
