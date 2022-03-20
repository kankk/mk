import * as VueRouter from 'vue-router';

import Home from '@pages/Home.vue';
import { HeaderLinks } from '@utils/const';

const routes = [
  {
    path: '/',
    component: Home,
  },
  // 顶部导航居中链接
  ...HeaderLinks.map((item) => {
    const opt: VueRouter.RouteRecordRaw = {
      path: item.path,
      component: item.component,
    };
    if (Array.isArray(item.children)) opt.children = item.children;
    return opt;
  }),
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
