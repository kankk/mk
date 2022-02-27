import * as VueRouter from 'vue-router';

import Home from '@pages/Home.vue';
import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: BlogList
  },
  {
    path: '/bookmark',
    component: BookmarkList
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;