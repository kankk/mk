<script setup lang="ts">
import { computed } from 'vue';
import { DocsGroups } from '@data/docs';
import { Icon } from '@iconify/vue';
import { ICON } from '@utils/icons';

const presetLinkMap = {
  chinese: ICON.CHINESE,
  english: ICON.ENGLISH,
  github: ICON.GITHUB,
};
const presetLinks = computed(() => Object.keys(presetLinkMap) as Array<keyof typeof presetLinkMap>);

const handleLinkClick = (url: string) => window.open(url);
</script>

<template>
  <div class="w-small">
    <div
      v-for="group of DocsGroups"
      :key="group.name"
      class="mb-4"
    >
      <div class="text-xl font-bold text-slate-900 px-4">
        {{ group.name }}
      </div>
      <div
        v-for="doc of group.docs"
        :key="doc.name"
        class="flex justify-between items-center px-4 py-1 my-2 hover:bg-slate-100"
      >
        <div class="flex items-center">
          <Icon
            class="mr-2"
            :icon="doc.icon"
            width="24"
            height="24"
          />
          <div class="text-slate-600 font-medium">
            {{ doc.name }}
          </div>
          <template v-if="!!doc.desc">
            <span class="mx-2 text-slate-500">-</span>
            <span class="text-slate-500">{{ doc.desc }}</span>
          </template>
        </div>
        <div class="flex justify-between items-center">
          <Icon
            v-for="link of presetLinks"
            :key="link"
            :icon="presetLinkMap[link]"
            class="mr-4 last:mr-0 opacity-40 hover:opacity-100 hover:cursor-pointer"
            :class="{'invisible': !doc.links[link]}"
            width="20"
            height="20"
            @click="handleLinkClick(doc.links[link])"
          />
        </div>
      </div>
    </div>
  </div>
</template>