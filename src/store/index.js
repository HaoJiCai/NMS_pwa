import { createStore } from 'vuex';

export default createStore({
  state: {
    id: null, // 使用者 ID
    username: '', // 使用者姓名
    isLoading: false, // Loading 是否開啟狀態
  },
  getters: {
    getUserID: (state) => state.id,
    getUsername: (state) => state.username,
    isLoading: (state) => state.isLoading,
  },
  mutations: {
    SET_USERID(state, id) {
      state.id = id;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    CLEAR_USERID(state) {
      state.id = null;
    },
    CLEAR_USERNAME(state) {
      state.username = '';
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    login({ commit }, username) {
      // 假設這裡是登入的邏輯，登入成功後呼叫 mutation 設定使用者姓名
      commit('SET_USERNAME', username);
      localStorage.setItem('username', username);
    },
    logout({ commit }) {
      // 假設這裡是登出的邏輯，登出時呼叫 mutation 清除使用者姓名
      commit('CLEAR_USERNAME');
      localStorage.removeItem('username');
    },
    startLoading({ commit }) {
      commit('SET_LOADING', true);
    },
    stopLoading({ commit }) {
      commit('SET_LOADING', false);
    },
  },
  modules: {
  },
});
