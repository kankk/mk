<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { HeaderLinks, HeaderRightIcons } from '@utils/const';
import { Icon } from '@iconify/vue';

const links = ref(HeaderLinks);

const router = useRouter();
const route = useRoute();

const handleLogoClick = () => {
  router.push({ path: '/' });
};

const handleLinkClick = (path: string) => {
  router.push({ path });
};

const handleIconClick = (url: string) => window.open(url);

const getLinkClass = (path: string) => {
  const cls = [
    'mr-6',
    'last:mr-0',
    'hover:text-black/85',
    'hover:cursor-pointer',
  ];
  if (path === route.path) {
    cls.push('text-black/85 underline underline-offset-8');
  } else {
    cls.push('text-black/45');
  }
  return cls;
};
</script>

<template>
  <div class="flex justify-between items-center px-8">
    <!-- Left -->
    <div>
      <div class="logo hover:cursor-pointer" @click="handleLogoClick">
        Mangokk
      </div>
    </div>
    <!-- Center -->
    <div>
      <div class="flex items-center">
        <div
          v-for="link of links"
          :key="link.name"
          :class="getLinkClass(link.path)"
          @click="handleLinkClick(link.path)"
        >
          {{ link.name }}
        </div>
      </div>
    </div>
    <!-- Right -->
    <div class="flex items-center">
      <div v-for="icon of HeaderRightIcons" :key="icon.url" class="px-3">
        <Icon
          class="opacity-40 hover:opacity-100 hover:cursor-pointer"
          :icon="icon.icon"
          width="20"
          height="20"
          @click="handleIconClick(icon.url)"
        />
      </div>
    </div>
  </div>
</template>
