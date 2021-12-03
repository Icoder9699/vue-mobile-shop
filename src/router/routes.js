export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'main'
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: "/cart",
        name: 'cart',
        meta: {
            layout: "main"
        },
        component: () => import('../pages/CartPage')
    },
    {
        path: "/phones/:id",
        name: "phones",
        meta: {
            layout: "main"
        },
        component: () => import('../pages/PhonePage')

    }
];
