import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/Signup.vue') },
      { path: 'jobs', name: 'jobs', component: () => import('pages/Job.vue') },
      { path: 'example', component: () => import('pages/ExamplePage.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
