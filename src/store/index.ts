import Vue from 'vue'
import Vuex from 'vuex'
import App from './module/app'
import User from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
  },
  actions: {
  },
  modules: {
    app: App as any,
    user: User as any,
  },
})
