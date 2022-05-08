<script setup lang="ts">
import { BookmarkGroups } from '@data/bookmark';

const handleLinkClick = (url: string) => window.open(url);
</script>

<template>
  <div class="w-small">
    <div v-for="group of BookmarkGroups" :key="group.name" class="mb-6">
      <div class="text-lg font-bold text-gray-900">
        {{ group.name }}
      </div>
      <ul class="list-none">
        <li
          v-for="link of group.links"
          :key="link.name"
          class="list-disc list-inside my-3"
        >
          <span
            class="text-gray-600 font-medium px-1 border-b border-gray-200 hover:border-gray-600 hover:cursor-pointer"
            @click="handleLinkClick(link.url)"
            >{{ link.name }}</span
          >
          <template v-if="link.desc">
            <span class="mx-2 text-gray-500">-</span>
            <span class="text-gray-500">{{ link.desc }}</span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
