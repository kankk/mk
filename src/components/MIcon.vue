<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps({
  component: {
    type: Object,
    default: () => ({
      template: '',
    }),
  },
  width: Number,
  height: Number
});
const { component, width, height } = toRefs(props);
const { template, width: cWidth, height: cHeight} = component.value;
</script>

<template>
  <div
    class="m-icon"
    :style="{ 'width': `${cWidth ?? width ?? 16}px`, 'height': `${cHeight ?? height ?? 16}px` }"
    v-html="template"
  />
</template>

<style lang="scss">
.m-icon > svg {
  width: 100%;
  height: 100%;
}
</style>
