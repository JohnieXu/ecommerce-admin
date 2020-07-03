import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import commonRoutes from './common'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = []

export const allRoutes = [
  ...routes,
  ...commonRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: allRoutes,
})

export default router
