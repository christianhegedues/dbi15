import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exercise/1',
      name: 'exercise1',
      component: () => import('../views/ExerciseAView.vue')
    },
    {
      path: '/exercise/2',
      name: 'exercise2',
      component: () => import('../views/ExerciseBView.vue')
    },
    {
      path: '/exercise/3',
      name: 'exercise3',
      component: () => import('../views/ExerciseCView.vue')
    }
  ]
})

