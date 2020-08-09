import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

// 2.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: () => import('@/views/home/Home')
  }, {
    path: '/category',
    component: () => import('@/views/category/Category')
  }, {
    path: '/cart',
    component: () => import('@/views/cart/Cart')
  }, {
    path: '/profile',
    component: () => import('@/views/profile/Profile')
  }]
})

export default router
