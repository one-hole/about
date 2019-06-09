import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Layout from '@/components/Layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/mainland',
      name: 'mainland',
      component: () => import('./views/Mainland.vue'),
    },
  ],
});
