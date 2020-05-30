import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import commonRoutes from './common'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = []

const allRoutes = [
  ...routes,
  ...commonRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: allRoutes,
})

export default router
