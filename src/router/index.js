import { createRouter, createWebHistory } from 'vue-router';
const HomeComponent = () => import('@/views/index.vue');

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeComponent,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;