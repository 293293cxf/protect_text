import Vue from 'vue';
import Vuex from 'vuex';
import example from './example/index';
import user from './user/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example, user
  }
})
