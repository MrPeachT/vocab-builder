import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '../views/Words.vue';
import Show from '../views/Show.vue';
import Edit from '../views/Edit.vue';
import NewWord from '../views/New.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/words' },
  { path: '/words', name: 'words', component: Words },
  { path: '/words/new', name: 'new', component: NewWord },
  { path: '/words/:id', name: 'show', component: Show, props: true },
  { path: '/words/:id/edit', name: 'edit', component: Edit, props: true },
  { path: '/test', name: 'test', component: Test },
  { path: '*', redirect: '/words' }
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
});

export default router;