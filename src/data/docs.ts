import { ICON } from '@utils/icons';

// 文档组
export const DocsGroups = [
  {
    name: 'Vue 3',
    docs: [
      {
        name: 'Vue',
        icon: ICON.VSCODE_VUE,
        links: {
          chinese: 'https://staging-cn.vuejs.org/guide/introduction.html',
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
