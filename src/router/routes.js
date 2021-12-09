export default [
    {
        path: '/',
        name: 'auth',
        meta: {
            layout: 'empty'
        },
        component: () => import('../pages/AuthPage')
    },
    {
        path: '/home',
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
        path: "/auth",
        name: 'auth',
        meta: {
            layout: "empty"
        },
        component: () => import('../pages/AuthPage')
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
