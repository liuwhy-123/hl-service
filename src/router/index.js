import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/test',
    name: 'test',
    component: () => import('../views/menus.vue'),
    children: [{
      name: '主页',
      path: '/test/homePage',
      component: () => import('../views/homePage.vue'),
    }, {
      name: '主要产品',
      path: '/test/setMeal',
      component: () => import('../views/setMeal.vue')
    }, {
      name: '修改账号/密码',
      path: '/test/modify',
      component: () => import('../views/modify.vue')
    }, {
      name: '已购商品信息',
      path: '/test/purchased',
      component: () => import('../views/purchased.vue')
    }, {
      name: '购物车',
      path: '/test/shoppingCart',
      component: () => import('../views/shoppingCart.vue')
    }, {
      name: '浏览信息',
      path: '/test/browse',
      component: () => import('../views/browse.vue')
    }]
  },{
    path: '/',
    redirect: '/test/homePage'
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router