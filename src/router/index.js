import { createRouter, createWebHistory } from 'vue-router';
const LayoutComponent = () => import('@/layout/index.vue');
const HomeComponent = () => import('@/views/index.vue');

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: LayoutComponent,
    children: [
        {
            path: "/home",
            name: "home",
            component: HomeComponent,
        }
    ],
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;