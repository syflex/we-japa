import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Index.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/Index.vue') },
      { path: 'jobs', name: 'jobs', component: () => import('pages/Job.vue'), meta: { requiresAuth: true } },
      { path: 'saved-jobs', name: 'saved-jobs', component: () => import('pages/SavedJobs.vue'), meta: { requiresAuth: true } },
      { path: 'job/:id', name: 'job', component: () => import('pages/JobPreview.vue'), meta: { requiresAuth: true } },
      { path: 'profile', name: 'profile', component: () => import('pages/Profile.vue'), meta: { requiresAuth: true } }
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
