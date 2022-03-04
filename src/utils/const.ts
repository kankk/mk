import { DefineComponent } from 'vue';
import { ICON } from '@utils/icons';

// import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';
import ToolList from '@pages/Toolbox/ToolList.vue';

// 顶部导航居中链接
export interface IHeaderLink {
  name: string;
  path: string;
  component: DefineComponent;
}

export const HeaderLinks = [
  // { name: 'Blog', path: '/blog', component: BlogList },
  { name: 'Bookmark', path: '/bookmark', component: BookmarkList },
  { name: 'Docs', path: '/docs', component: DocsList },
  { name: 'Tools', path: '/tools', component: ToolList },
] as Array<IHeaderLink>;

export const HeaderRightIcons = [
  { icon: ICON.GITHUB, url: 'https://github.com/kankk' }
];