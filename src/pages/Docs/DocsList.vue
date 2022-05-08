<script setup lang="ts">
import { Docs } from '@data/docs';
import DocsItem from './DocsItem.vue';
</script>

<template>
  <div class="w-small">
    <div class="grid grid-cols-4 gap-x-3 gap-y-3">
      <DocsItem
        v-for="doc of Docs"
        :key="doc.name"
        :doc="doc"
      />
    </div>
  </div>
</template>
