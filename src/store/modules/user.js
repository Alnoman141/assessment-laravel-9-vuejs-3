import { login, logout, register, getUsers } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    token: getToken(),
    user: {},
    users: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_USERS: (state, users) => {
      state.users = users;
    }
  },

  actions: {
    // user register
    register({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        register(data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // user login
    login({ state, commit }, user) {
      return new Promise((resolve, reject) => {
        login(user)
          .then((response) => {
            const { data } = response;
            commit("SET_USER", data.user);
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // user logout
    logout({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout().then((response) => {
          commit("SET_USER", {});
          removeToken();
          commit("SET_TOKEN", "");
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // get users info
    getUsers({ state, commit }) {
      return new Promise((resolve, reject) => {
        getUsers().then((response) => {
          const { data } = response;
          commit("SET_USERS", data.users);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  },

  getters: {},
};
