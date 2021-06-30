import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/NotFound.vue'
import Home from '../components/Home.vue'
import Product from '../components/plugins/store/whoobe/product.vue'
import Articles from '../components/plugins/articles/articles.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home' , component: Home } , //Preview },
  { path: '/shop/:id', name: 'Product' , component: Product },
  { path: '/page/:slug' , name: 'Page' , component: Articles },
  { path: '/:slug' , name: 'Page' , component: Articles },
  { 
    path: '*', 
    component: NotFound,
    name: 'NotFound'
  }
  // { path: '/:path(.*)', component: Preview },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
