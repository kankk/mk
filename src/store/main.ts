import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    count: 0,
  }),
  getters: {
    countDisplay: (state) => `${state.count} 次`,
  },
  actions: {
    increment() {
      this.count += 1;
    }
  }
});