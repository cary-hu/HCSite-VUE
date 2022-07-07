import {createRouter, createWebHistory} from 'vue-router';
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');
const Compose = () => import('../pages/Compose/index.vue');

const routes = [
  {name: 'home', path: '/', alias: '/home', component: Home, meta: {title: 'Home'}},
  {name: 'about', path: '/about', component: About, meta: {title: 'About'}},
  {name: 'compose', path: '/compose', component: Compose, meta: {title: 'Compose'}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - HC Site`;
  next();
});
export default router;
