<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@store/main';

const mainStore = useMainStore();

const { count, countDisplay } = storeToRefs(mainStore);
</script>


<template>
  <div class="bookmark-list">
    <div>Pinia.Main.count: {{ count }}</div>
    <div>Pinia.Main.getter.countDisplay: {{ countDisplay }}</div>
    <button @click="mainStore.increment">
      Pinia.Main.increment
    </button>
    <p>Bookmark</p>
  </div>
</template>

<style lang="scss">
</style>
