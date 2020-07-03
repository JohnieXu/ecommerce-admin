import Vue from 'vue'
import { Module } from 'vuex'
import { RouteConfig } from 'vue-router'

import { allRoutes } from '../../router'

interface State {
  routes: RouteConfig | {};
}

const routesComponentMap: {
  [key: string]: any;
} = {
  'user/index': () => import('@/views/user/index.vue'),
  'user/vip': () => import('@/views/user/vip.vue'),
  'user/brand': () => import('@/views/user/brand.vue'),
}

const module: Module<State, State> = {
  state (): State {
    return {
      routes: {},
    }
  },
  mutations: {
    setRoutes (state: State, routes: RouteConfig) {
      state.routes = routes
    },
  },
  actions: {
    async getRoutes (context, vm: Vue) {
      const mockRoutes = [
        {
          title: '会员管理',
          name: 'user_vip',
          path: '/user/vip',
          component: 'user/vip',
        },
        {
          title: '品牌商账号',
          name: 'user_brand',
          path: '/user/brand',
          component: 'user/brand',
        },
      ]
      const dynamicRoutes = await Promise.resolve(mockRoutes)
      context.commit('setRoutes', dynamicRoutes)
      if (vm) {
        context.dispatch('addRoutes', vm)
      }
    },
    async addRoutes (context, vm: any) {
      const routes = context.state.routes
      function importComponent (route: any) {
        if (!route) { return }
        if (Array.isArray(route.children)) {
          route.children.forEach((item: any) => {
            importComponent(item)
          })
          return
        }
        if (route.component) {
          console.log(route.component)
          // route.component = () => import(`../../views/${route.component}.vue`)
          route.component = routesComponentMap[route.component]
        }
      }
      function packRoutes (routes: RouteConfig | undefined, dynamicRoutes?: RouteConfig): RouteConfig {
        if (!Array.isArray(routes)) { return [] as any }
        return routes.map(route => {
          if (route.path === '/') {
            // TODO: 转换 routes 属性复合 route 规范
            route.children = (route.children || []).concat(dynamicRoutes || [])
          } else {
            route.children = packRoutes(route.children)
          }
          return route
        }) as any
      }
      if (Array.isArray(routes)) {
        routes.forEach(route => {
          importComponent(route)
        })
        // 将动态配置的路由放入跟路由的 children 中
        const appRoutes = packRoutes(allRoutes as any, routes as any)
        console.log(appRoutes)
        vm.$router.addRoutes(appRoutes)
      }
    },
  },
}

export default module
