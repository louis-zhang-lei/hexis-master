import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
import moduleA from "./modules/moduleA"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // counter: 0,
  },
  mutations,
  getters,
  actions,
  modules: {
    moduleA,
  }
});

