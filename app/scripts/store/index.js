import Vue from 'vue';
import Vuex from 'vuex';

import { COUNT_UP, RESET } from './mutation-types';

Vue.use(Vuex);

const state = {
  count: 0
};

const actions = {
  [COUNT_UP] ({ commit }) {
    commit(COUNT_UP);
  },
  [RESET] ({ commit }) {
    commit(RESET);
  }
};

const mutations = {
  [COUNT_UP] (state, payload) {
    console.log(`%c${COUNT_UP} ----> `, 'font-size:20px;color:#ff00ff');
    state.count++;
  },
  [RESET] (state) {
    state.count = 0;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
