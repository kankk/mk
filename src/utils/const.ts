import { DefineComponent } from 'vue';
import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';
import { IconVue, IconNest } from './icons';

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

// 文档链接
export const DocsGroups = [
  {
    name: 'Vue',
    docs: [
      {
        name: 'Vue3',
        icon: IconVue,
        links: [
          { name: '中文', url: 'https://v3.cn.vuejs.org/guide' },
          { name: 'github', url: 'https://github.com/vuejs/core' },
        ],
      },
      {
        name: 'Vue2',
        icon: IconVue,
        links: [
          { name: '中文', url: 'https://cn.vuejs.org/v2/guide/' },
          { name: 'github', url: 'https://github.com/vuejs/vue' },
        ],
      }
    ],
  },
  {
    name: 'Node',
    docs: [
      {
        name: 'Nest',
      icon: IconNest,
        links: [
          { name: '中文', url: 'https://docs.nestjs.cn/8/firststeps' },
          { name: '英文', url: 'https://docs.nestjs.com/' },
          { name: 'github', url: 'https://github.com/nestjs/nest'}
        ]
      }
    ]
  }
];
