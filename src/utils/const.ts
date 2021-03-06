import { Component } from 'vue';
import { ICON } from '@utils/icons';

// import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';

import Toolbox from '@pages/Toolbox/Toolbox.vue';
// import ToolList from '@pages/Toolbox/ToolList.vue';
// import JsonView from '@pages/Toolbox/JsonView.vue';
import Emoji from '@pages/Toolbox/Emoji.vue';

// 顶部导航居中链接
export interface IHeaderLink {
  name: string;
  path: string;
  component: Component;
  children?: Array<IHeaderLink>;
}

export const Tools = [
  // { name: '工具栏', path: '/tools', component: ToolList },
  // { name: 'JsonView', path: '/tools/json-view', component: JsonView },
  { name: 'git-emoji', path: '/tools/git-emoji', component: Emoji },
];

export const HeaderLinks = [
  // { name: 'Blog', path: '/blog', component: BlogList },
  // { name: 'Bookmark', path: '/bookmark', component: () => defineAsyncComponent(() => import('@pages/Bookmark/BookmarkList.vue'))},
  // { name: 'Docs', path: '/docs', component: () => defineAsyncComponent(() => import('@pages/Docs/DocsList.vue'))},
  // { name: 'Tools', path: '/tools', component: () => defineAsyncComponent(() => import('@pages/Toolbox/Toolbox.vue'))},
  {
    name: 'Bookmark',
    path: '/bookmark',
    component: BookmarkList,
  },
  {
    name: 'Docs',
    path: '/docs',
    visible: true,
    component: DocsList,
  },
  {
    name: 'Tools',
    path: '/tools',
    component: Toolbox,
    children: Tools.map((item) => ({
      path: item.path,
      component: item.component,
    })),
  },
] as Array<IHeaderLink>;

export const HeaderRightIcons = [
  { icon: ICON.INSTAGRAM, url: 'https://www.instagram.com/jianqihua/' },
  { icon: ICON.TWITTER, url: 'https://twitter.com/kankeika5' },
  { icon: ICON.GITHUB, url: 'https://github.com/kankk' },
];
