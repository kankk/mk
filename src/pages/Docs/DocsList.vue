<script setup lang="ts">
import { DocsGroups } from '@utils/const';

const handleLinkClick = (link: string) => window.open(link);
</script>

<template>
  <div class="px-10">
    <div
      v-for="group of DocsGroups"
      :key="group.name"
      class="mb-2"
    >
      <div class="text-xl font-medium px-4">
        {{ group.name }}
      </div>
      <div
        v-for="doc of group.docs"
        :key="doc.name"
        class="flex justify-between items-center px-4 py-1 hover:bg-slate-100"
      >
        <div class="flex items-center">
          <MIcon
            class="mr-2"
            :component="doc.icon"
            :width="20"
            :height="20"
          />
          <div>{{ doc.name }}</div>
        </div>
        <div class="flex justify-between items-center">
          <div
            v-for="link of doc.links"
            :key="link.name"
            class="mr-4 last:mr-0 text-black/45 hover:text-black/85 hover:cursor-pointer"
            @click="handleLinkClick(link.url)"
          >
            {{ link.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>