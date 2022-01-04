import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/system'
  },
  {
    path: '/login',
    name:'登录',
    component: () => import('../components/Login.vue')
  },
  {
    path:'/introduce',
    name:'简介',
    component:() => import('../components/Introduce.vue')
  },
  {
    path:'/system',
    name:'系统界面',
    component:() => import('../components/System.vue')
  },
  {
    path:'/sememe',
    name:'义原',
    component:() => import('../components/Sememe.vue')
  },
  {
    path:'/keywords',
    name:'关键字',
    component:() => import('../components/Keywords.vue')
  },
  {
    path:'/correction',
    name:'纠错',
    component:() => import('../components/Correction.vue')
  },
  // Translate
  {
    path:'/translate',
    name:'翻译',
    component:() => import('../components/Translate.vue')
  },
  {
    path:'/event',
    name:'翻译',
    component:() => import('../components/event.vue')
  },
]

const router = new VueRouter({
  routes,
  //该模式默认为hash，当我们访问项目的网址时会自动在我们的网址中加上’/#/’，
  // 也就是说访问路径为：‘localhost:8080/#/home’，我们这里需要改为history，
  // 这样访问路径会变成正常的访问路径：‘localhost:8080/home’
  mode:'history',
})
export default router