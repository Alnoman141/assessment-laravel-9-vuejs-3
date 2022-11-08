import { createStore } from 'vuex';
import userStore from './modules/user';
import customerStore from './modules/customer';
import billStore from './modules/bill';
// Create a new store instance.
const store = createStore({
    modules: {
        userStore: userStore,
        customerStore: customerStore,
        billStore: billStore
    }
})

export default store;