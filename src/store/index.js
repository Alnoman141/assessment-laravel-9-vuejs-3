import { createStore } from 'vuex';
import userStore from './modules/user';
import customerStore from './modules/customer';
// Create a new store instance.
const store = createStore({
    modules: {
        userStore: userStore,
        customerStore: customerStore
    }
})

export default store;