import Vue from 'vue'
import Vuex from 'vuex'
import friends from './modules/friends/friends'
import logger from './modules/friends/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    friends: { ...friends, namespaced: true },
    logger: { ...logger, namespaced: true }
  }
})
