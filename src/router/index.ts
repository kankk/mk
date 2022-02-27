import * as VueRouter from 'vue-router';

import Home from '@pages/Home.vue';
import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';

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
  },
  {
    path: '/docs',
    component: DocsList,
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;