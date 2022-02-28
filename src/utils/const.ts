import { DefineComponent } from 'vue';
import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';

// 顶部导航居中链接
export interface IHeaderLink {
  name: string;
  path: string;
  component: DefineComponent;
}

export const HeaderLinks = [
  { name: 'Blog', path: '/blog', component: BlogList },
  { name: 'Bookmark', path: '/bookmark', component: BookmarkList },
  { name: 'Docs', path: '/docs', component: DocsList },
] as Array<IHeaderLink>;