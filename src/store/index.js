import { createStore } from 'vuex';

export default createStore({
  state: {
    username: '', // 使用者姓名
  },
  getters: {
    getUsername: (state) => state.username,
    isLoggedIn: (state) => !!state.username,
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    CLEAR_USERNAME(state) {
      state.username = '';
    },
  },
  actions: {
    login({ commit }, username) {
      // 假設這裡是登入的邏輯，登入成功後呼叫 mutation 設定使用者姓名
      commit('SET_USERNAME', username);
    },
    logout({ commit }) {
      // 假設這裡是登出的邏輯，登出時呼叫 mutation 清除使用者姓名
      commit('CLEAR_USERNAME');
    },
  },
  modules: {
  },
});
