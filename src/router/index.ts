import {createRouter, createWebHistory} from 'vue-router';
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');

const routes = [
  {name: 'home', path: '/', alias: '/home', component: Home, meta: {title: 'Home'}},
  {name: 'about', path: '/about', component: About, meta: {title: 'About'}},
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
