import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'First',
          component: () => import('@/components/views/FirstPageContent.vue')
        },
        {
          path: '/week',
          name: 'Week',
          component: () => import('@/components/views/WeekContent.vue')
        },
      ],

    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    },
  ],
})

export default router
