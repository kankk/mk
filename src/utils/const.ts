import { DefineComponent } from 'vue';
import BlogList from '@pages/Blog/BlogList.vue';
import BookmarkList from '@pages/Bookmark/BookmarkList.vue';
import DocsList from '@pages/Docs/DocsList.vue';
import { ICON } from './icons';

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
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://v3.cn.vuejs.org/guide',
          english: '',
          github: 'https://github.com/vuejs/core'
        }
      },
      {
        name: 'Vue2',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://cn.vuejs.org/v2/guide',
          english: '',
          github: 'https://github.com/vuejs/vue'
        }
      }
    ],
  },
  {
    name: 'CSS',
    docs: [
      {
        name: 'Tailwind CSS',
        icon: ICON.VSCODE_TAILWIND,
        links: {
          chinese: 'https://www.tailwindcss.cn/docs',
          english: 'https://tailwindcss.com/docs',
          github: 'https://github.com/tailwindlabs/tailwindcss'
        }
      }
    ]
  },
  {
    name: 'Node',
    docs: [
      {
        name: 'Nest',
        icon: ICON.VSCODE_NEST,
        links: {
          chinese: 'https://docs.nestjs.cn/8/firststeps',
          english: 'https://docs.nestjs.com',
          github: 'https://github.com/nestjs/nest'
        }
      }
    ]
  }
];
