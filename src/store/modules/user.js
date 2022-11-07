import { register } from "@/api/user";
export default {
  namespaced: true,
  state: {
    user: {},
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },

  actions: {
    register({state, commit}, data){
        return new Promise((resolve, reject) => {
            register(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            }) 
        })
    },
  },

  getters: {},
};   