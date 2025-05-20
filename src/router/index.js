import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';
import Page4 from '../views/Page4.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;