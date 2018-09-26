import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Near from '@/components/near/Near'
import New from '@/components/new/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/new',
      component: Index,
      children: [
        {
          path: 'new',
          component: New
        },
        {
          path: 'near',
          component: Near
        }
      ]
    }
  ]
})
