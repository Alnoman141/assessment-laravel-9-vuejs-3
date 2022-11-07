import { createRouter, createWebHistory } from "vue-router";
const LayoutComponent = () => import("@/layout/index.vue");
const HomeComponent = () => import("@/views/index.vue");
const LoginComponent = () => import("@/views/login.vue");
const RegisterComponent = () => import("@/views/register.vue");

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterComponent,
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
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
