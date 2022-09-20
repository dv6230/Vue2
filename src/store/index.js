import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions: {
    updateTest(context, status) {
      context.commit('TEST', status)     // mutation 中定義方法
    }
  },
  modules: {

  },
  getters: {

  }
})