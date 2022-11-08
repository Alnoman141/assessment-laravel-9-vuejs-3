import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import userRoutes from './modules/user';

const LayoutComponent = () => import("@/layout/index.vue");
const HomeComponent = () => import("@/views/index.vue");
const LoginComponent = () => import("@/views/login.vue");
const RegisterComponent = () => import("@/views/register.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
    meta: { requiresAuth: false }
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent,
    meta: { requiresAuth: false }
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: LayoutComponent,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: HomeComponent,
        meta: { requiresAuth: true }
      },
    ],
  },
  userRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const whiteList = ['/login', '/register'] // no redirect whitelist

// router middleware gaurd
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.userStore.token) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
