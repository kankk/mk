import * as VueRouter from 'vue-router';

import Home from '@pages/Home.vue';
import { HeaderLinks } from '@utils/const';

const routes = [
  {
    path: '/',
    component: Home
  },
  // 顶部导航居中链接
  ...HeaderLinks.map(link => ({
    path: link.path,
    component: link.component
  }))
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;