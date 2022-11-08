const LayoutComponent = () => import("@/layout/index.vue");
const BillListComponent = () => import('@/views/bills/index.vue');

const userRoutes = {
    path: '/bills',
    component: LayoutComponent,
    hidden: true,
    children: [
        {
            path: '',
            name: 'billList',
            component: BillListComponent
        },
    ]
}


export default userRoutes;