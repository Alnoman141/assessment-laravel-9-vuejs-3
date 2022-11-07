import { createStore } from 'vuex';
import userStore from './modules/user';
// Create a new store instance.
const store = createStore({
    modules: {
        userStore: userStore
    }
})

export default store;