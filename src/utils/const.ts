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
    name: 'Vue 3',
    docs: [
      {
        name: 'Vue',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://v3.cn.vuejs.org/guide',
          english: 'https://vuejs.org/guide/introduction.html',
          github: 'https://github.com/vuejs/core',
        },
      },
      {
        name: 'Vue Router',
        desc: 'v4.x',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://router.vuejs.org/zh/guide',
          english: 'https://router.vuejs.org/guide',
          github: 'https://github.com/vuejs/router',
        },
      },
      {
        name: 'Pinia',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: '',
          english: 'https://pinia.vuejs.org/getting-started.html',
          github: 'https://github.com/vuejs/pinia',
        },
      },
    ],
  },
  {
    name: 'Vue 2',
    docs: [
      {
        name: 'Vue',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://cn.vuejs.org/v2/guide',
          english: 'https://v2.vuejs.org/v2/guide/index.html',
          github: 'https://github.com/vuejs/vue',
        },
      },
      {
        name: 'Vue Router',
        desc: 'v3.x',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://v3.router.vuejs.org/zh/guide',
          english: 'https://v3.router.vuejs.org/guide',
          github: 'https://github.com/vuejs/vue-router',
        },
      },
      {
        name: 'Vuex',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://vuex.vuejs.org/zh/guide',
          english: 'https://vuex.vuejs.org/guide/index.html',
          github: 'https://github.com/vuejs/vuex',
        },
      },
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
          github: 'https://github.com/tailwindlabs/tailwindcss',
        },
      },
    ],
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
          github: 'https://github.com/nestjs/nest',
        },
      },
    ],
  },
];

export const BookmarkGroups = [
  {
    name: 'Icons',
    links: [
      {
        name: 'Iconify',
        desc: '',
        url: 'https://icon-sets.iconify.design/',
      },
      {
        name: 'Font Awesome',
        desc: '6.0.0',
        url: 'https://fontawesome.com/icons'
      },
      {
        name: 'Font Awesome',
        desc: '4.7.0 (中文)',
        url: 'http://www.fontawesome.com.cn/faicons/'
      }
    ],
  },
  {
    name: 'Colors',
    links: [
      {
        name: 'Nippon Colors',
        desc: '日本の伝統色',
        url: 'https://nipponcolors.com/',
      },
    ],
  },
];
