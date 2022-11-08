import { getBills, store, update } from "@/api/bill";
export default {
  namespaced: true,
  state: {
    bill: {},
    bills: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_BILL: (state, bill) => {
      state.bill = bill;
    },
    SET_BILLS: (state, bills) => {
      state.bills = bills;
    }
  },

  actions: {
    // bill store
    createBill({ state, commit }, data) {
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

    // get bills info
    getBills({ state, commit }) {
      return new Promise((resolve, reject) => {
        getBills().then((response) => {
          const { data } = response;
          commit("SET_BILLS", data.bills);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // bill update bill
    updateBill({ state, commit }, data) {
        return new Promise((resolve, reject) => {
            update(data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
  },

  getters: {},
};
