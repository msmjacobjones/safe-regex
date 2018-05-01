import Vue from 'vue'
import Router from 'vue-router'
import RegExChecker from '@/components/RegExChecker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegExChecker',
      component: RegExChecker
    }
  ]
})
