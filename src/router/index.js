/*
  Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/wishlist',
    name: 'wishlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../pages/Wishlist')
  },{
    path: '/store',
    name: 'store',
    component: () =>
        import('../pages/Store'),
    /* Passing the Content */
    props: true
  },{
    path: '/faq',
    name: 'faq',
    component: () =>
        import('../pages/FAQ'),
    /* Passing the Content */
    props: true
  },{
    path: '/answer',
    name: 'singlemessage',
    component: () =>
        import('../pages/Answer'),
    /* Passing the Content */
    props: true
  }
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.replace({path:'home', redirect: '/'})
export default router