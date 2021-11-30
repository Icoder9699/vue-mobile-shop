export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage')
    },
    {
        path: "/cart",
        name: 'cart',
        component: () => import('../pages/CartPage')
    }
];
