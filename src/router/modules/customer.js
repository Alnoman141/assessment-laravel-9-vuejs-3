const LayoutComponent = () => import("@/layout/index.vue");
const CustomerListComponent = () => import('@/views/customers/index.vue');
const CustomerBillListComponent = () => import('@/views/bills/customer-bill-list.vue');
const CustomerDashboardComponent = () => import('@/views/customers/dashboard.vue');

const userRoutes = {
    path: '/customers',
    component: LayoutComponent,
    children: [
        {
            path: '',
            name: 'customerList',
            component: CustomerListComponent,
            meta: { requiresAuth: true }
        },
        {
            path: 'dashboard',
            name: 'customerDashboard',
            component: CustomerDashboardComponent,
            meta: { requiresCustomerAuth: true }
        },
        {
            path: 'bills',
            name: 'customerBillList',
            component: CustomerBillListComponent,
            meta: { requiresCustomerAuth: true }
        },
    ]
}


export default userRoutes;