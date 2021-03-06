import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: 'Homepage', component: () => import('./components/Homepage') },
        { path: '/resume', name: 'Resume', component: () => import('./components/Resume') },
        { path: '/contact', name: 'Contact', component: () => import('./components/Contact') },
        { path: '*', name: '404 Not Found', component: () => import('./components/NotFound') },
    ]
});
export default router;