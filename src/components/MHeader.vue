<script setup lang="ts">
import { ref,  } from 'vue';
const links = ref([
  { name: 'Blog', path: '/blog' },
  { name: 'Bookmark', path: '/bookmark' },
]);
</script>

<template>
  <div class="m-header">
    <div class="m-header-left">
      Mangokk
    </div>
    <div class="m-header-right">
      <div class="m-header-links">
        <div
          v-for="link of links"
          :key="link.name"
          class="m-header-link"
        >
          {{ link.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  .m-header-left {

  }
  .m-header-right {
    .m-header-links {
      display: flex;
      align-items: center;
      .m-header-link {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
