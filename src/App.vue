<script setup lang="ts">
import MHeader from '@components/MHeader.vue';
import MFooter from '@components/MFooter.vue';
</script>

<template>
  <div class="app min-h-screen text-black/85">
    <MHeader />
    <div class="flex justify-center items-stretch">
      <router-view class="w-normal py-8" />
    </div>
    <MFooter />
  </div>
</template>

<style lang="scss">
@import url("@styles/tailwind.scss");
@import url("@styles/global.scss");

.app {
  display: grid;
  grid-template-rows: 48px 1fr 48px;
}
</style>
