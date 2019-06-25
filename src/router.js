import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/bottomBar',
      name: 'bottomBar',
      component: () => import('@/views/BottomBar.vue'),
      children:[
        {
          path: '/recommond',
          name: 'recommond',
          component: ()=>import('@/views/Recommond.vue') 
        },
        {
          path: '/moneyManage',
          name: 'moneyManage',
          component: ()=>import('@/views/MoneyManage.vue'),
          children:[
            {
              path: '/productLists',
              name: 'productLists',
              component: ()=>import('@/components/ProductLists.vue'),
            },
            {
              path: '/productContinue',
              name: 'productContinue',
              component: ()=>import('@/components/ProductContinue.vue'),
            },
          ]
        },
        {
          path: '/invest',
          name: 'invest',
          component: ()=>import('@/views/Invest.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: ()=>import('@/views/Mine.vue')
        }
      ]
    },

  ]
})