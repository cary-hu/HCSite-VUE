import {createRouter, createWebHistory} from 'vue-router';
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
