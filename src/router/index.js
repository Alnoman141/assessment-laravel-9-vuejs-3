import { createRouter, createWebHistory } from 'vue-router';
const LayoutComponent = () => import('@/layout/index.vue');
const HomeComponent = () => import('@/views/index.vue');

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: LayoutComponent,
    children: [
        {
            path: "/dashboard",
            name: "dashboard",
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