<script setup lang="ts">
import MHeader from '@components/MHeader.vue';
</script>

<template>
  <div class="app">
    <MHeader />
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('@styles/global.scss');
</style>
