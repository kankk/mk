<script setup lang="ts">
import { Tools } from '@utils/const';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleMenuClick = (path: string) => router.push({ path });

const getMenuClass = (path: string) => {
  const cls = [
    'rounded-sm',
    'hover:text-black/85',
    'hover:cursor-pointer',
    'py-1 px-4 mb-2',
  ];
  if (path === route.path) {
    cls.push('text-black/85 bg-gray-100');
  } else {
    cls.push('text-black/45');
  }
  return cls;
};
</script>

<template>
  <div class="toolbox w-large">
    <div>
      <div
        v-for="tool of Tools"
        :key="tool.path"
        :class="getMenuClass(tool.path)"
        @click="handleMenuClick(tool.path)"
      >
        {{ tool.name }}
      </div>
    </div>
    <router-view class="px-4" />
  </div>
</template>

<style lang="scss">
.toolbox {
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>
