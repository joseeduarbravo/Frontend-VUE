import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import( '../views/About.vue')
  },
  {
    path: '/tabla',
    name: 'Tabla',
    
    component: () => import('../views/Tabla.vue')
  },
  {
    path: '/reportes',
    name: 'Reportes',
    
    component: () => import('../views/Reportes.vue')
  }
/*   {
    path: '/equipo',
    name: 'Equipo',
    
    component: () => import('../views/Equipo.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
