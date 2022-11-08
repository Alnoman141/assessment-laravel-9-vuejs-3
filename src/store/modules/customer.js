import { getCustomers, store } from "@/api/customer";
import { getToken, removeToken, setToken } from "@/utils/auth";
export default {
  namespaced: true,
  state: {
    token: getToken(),
    customer: {},
    customers: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_CUSTOMER: (state, customer) => {
      state.customer = customer;
    },
    SET_CUSTOMERS: (state, customers) => {
      state.customers = customers;
    }
  },

  actions: {
    // customer store
    createCustomer({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        store(data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // customer login
    login({ state, commit }, customer) {
      return new Promise((resolve, reject) => {
        login(customer)
          .then((response) => {
            const { data } = response;
            commit("SET_CUSTOMER", data.customer);
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // customer logout
    logout({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout().then((response) => {
          commit("SET_CUSTOMER", {});
          removeToken();
          commit("SET_TOKEN", "");
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // get customers info
    getCustomers({ state, commit }) {
      return new Promise((resolve, reject) => {
        getCustomers().then((response) => {
          const { data } = response;
          commit("SET_CUSTOMERS", data.customers);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  },

  getters: {},
};
