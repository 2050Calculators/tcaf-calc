import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', redirect: '/agriculture' }, // Redirect to default sector
      {
        path: 'agriculture/:subtab?',
        name: 'agriculture',
        component: () => import('pages/AgricultureTab.vue'),
      },
      {
        path: 'overall/:subtab?',
        name: 'overall',
        component: () => import('pages/OverallTab.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
