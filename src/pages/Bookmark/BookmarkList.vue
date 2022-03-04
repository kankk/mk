<script setup lang="ts">
import { BookmarkGroups } from '@data/bookmark';

const handleLinkClick = (url: string) => window.open(url);
</script>

<template>
  <div class="px-10">
    <div
      v-for="group of BookmarkGroups"
      :key="group.name"
      class="mb-6"
    >
      <div class="text-xl font-bold text-slate-900">
        {{ group.name }}
      </div>
      <ul class="list-none">
        <li
          v-for="link of group.links"
          :key="link.name"
          class="list-disc list-inside my-3"
        >
          <span
            class="text-slate-600 font-medium px-1 text-lg border-b border-slate-200 hover:border-slate-600 hover:cursor-pointer"
            @click="handleLinkClick(link.url)"
          >{{ link.name }}</span>
          <template v-if="link.desc">
            <span class="mx-2 text-slate-500">-</span>
            <span class="text-slate-500">{{ link.desc }}</span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
