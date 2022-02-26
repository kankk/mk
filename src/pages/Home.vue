<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/main';

const mainStore = useMainStore();

const { count, countDisplay } = storeToRefs(mainStore);
</script>

<template>
<div class="home">
  <div>Pinia.Main.count: {{ count }}</div>
  <div>Pinia.Main.getter.countDisplay: {{ countDisplay }}</div>
  <p>Home</p>
</div>
</template>

<style lang="scss">
</style>
