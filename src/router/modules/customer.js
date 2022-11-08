const LayoutComponent = () => import("@/layout/index.vue");
const CustomerListComponent = () => import('@/views/customers/index.vue');

const userRoutes = {
    path: '/customers',
    component: LayoutComponent,
    hidden: true,
    children: [
        {
            path: '',
            name: 'customerList',
            component: CustomerListComponent
        },
    ]
}


export default userRoutes;