import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'

import router from './router';
import store from './store';
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).use(router).use(store).mount('#app')
