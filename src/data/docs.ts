import { ICON } from '@utils/icons';

export interface IDocsItem {
  name: string;
  icon: string;
  links: {
    chinese?: string;
    english?: string;
    github?: string;
  }
}

// 文档
export const Docs: IDocsItem[] = [
  {
    name: 'Vue3',
    icon: ICON.VSCODE_VUE,
    links: {
      chinese: 'https://staging-cn.vuejs.org/guide/introduction.html',
      english: 'https://vuejs.org/guide/introduction.html',
      github: 'https://github.com/vuejs/core',
    },
  },
  {
    name: 'VueRouter 4.x',
    icon: ICON.VSCODE_VUE,
    links: {
      chinese: 'https://router.vuejs.org/zh/guide',
      github: 'https://github.com/vuejs/router',
    },
  },
  {
    name: 'Pinia',
    icon: ICON.VSCODE_VUE,
    links: {
      english: 'https://pinia.vuejs.org/getting-started.html',
      github: 'https://github.com/vuejs/pinia',
    },
  },
  {
    name: 'Vue2',
    icon: ICON.VSCODE_VUE,
    links: {
      chinese: 'https://cn.vuejs.org/v2/guide',
      github: 'https://github.com/vuejs/vue',
    },
  },
  {
    name: 'VueRouter 3.x',
    icon: ICON.VSCODE_VUE,
    links: {
      chinese: 'https://v3.router.vuejs.org/zh/guide',
      github: 'https://github.com/vuejs/vue-router',
    },
  },
  {
    name: 'Vuex',
    icon: ICON.VSCODE_VUE,
    links: {
      chinese: 'https://vuex.vuejs.org/zh/guide',
      github: 'https://github.com/vuejs/vuex',
    },
  },
  {
    name: 'Tailwind',
    icon: ICON.VSCODE_TAILWIND,
    links: {
      english: 'https://tailwindcss.com/docs',
      github: 'https://github.com/tailwindlabs/tailwindcss',
    },
  },
  {
    name: 'Nest',
    icon: ICON.VSCODE_NEST,
    links: {
      chinese: 'https://docs.nestjs.cn/8/firststeps',
      english: 'https://docs.nestjs.com',
      github: 'https://github.com/nestjs/nest',
    },
  },
];
