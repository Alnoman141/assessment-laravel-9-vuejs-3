const LayoutComponent = () => import("@/layout/index.vue");
const UserListComponent = () => import('@/views/users/index.vue');

const userRoutes = {
    path: '/users',
    component: LayoutComponent,
    hidden: true,
    children: [
        {
            path: '',
            name: 'userList',
            component: UserListComponent
        },
    ]
}


export default userRoutes;