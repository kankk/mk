<script setup lang="ts">
import { Tools } from '@utils/const';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleMenuClick = (path: string) => router.push({ path });

const getMenuClass = (path: string) => {
  const cls = [
    'hover:text-black/85',
    'hover:cursor-pointer',
    'py-2'
  ];
  if (path === route.path) {
    cls.push('text-black/85');
  } else {
    cls.push('text-black/45');
  }
  return cls;
};
</script>

<template>
  <div class="toolbox">
    <div class="toolbox-menu">
      <div
        v-for="tool of Tools"
        :key="tool.path"
        :class="getMenuClass(tool.path)"
        @click="handleMenuClick(tool.path)"
      >
        {{ tool.name }}
      </div>
    </div>
    <router-view class="toolbox-content" />
  </div>
</template>


<style lang="scss">
.toolbox {
  display: grid;
  grid-template-columns: 100px 1fr;
}
</style>
