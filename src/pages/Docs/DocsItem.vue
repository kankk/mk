<script setup lang="ts">
import { toRefs, PropType } from 'vue';
import type { IDocsItem } from '@data/docs';
import { Icon } from '@iconify/vue';
import { ICON } from '@utils/icons';

const presetLinkMap = {
  chinese: ICON.CHINESE,
  english: ICON.ENGLISH,
  github: ICON.GITHUB,
};

const props = defineProps({
  doc: {
    type: Object as PropType<IDocsItem>,
    default: () => ({}),
  },
});

const { doc } = toRefs(props);

const handleLinkClick = (url: string) => window.open(url);
</script>

<template>
  <div
    class="flex flex-col items-center border border-gray-200 rounded pt-4 pb-2"
  >
    <Icon :icon="doc.icon" width="24" height="24" />
    <div class="pt-2 pb-1 text-gray-600 font-medium">
      {{ doc.name }}
    </div>
    <div class="flex justify-between items-center">
      <div
        v-for="[key, value] of Object.entries(doc.links)"
        :key="key"
        class="px-3 py-2"
        @click="handleLinkClick(value)"
      >
        <Icon
          :icon="presetLinkMap[key as keyof typeof presetLinkMap]"
          class="opacity-40 hover:opacity-100 hover:cursor-pointer"
          width="16"
          height="16"
        />
      </div>
    </div>
  </div>
</template>
