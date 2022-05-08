<script setup lang="tsx">
import { toRefs } from 'vue';
import World from './World';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const { data } = toRefs(props);
console.log(data.value);

const Hello = () => <div>Vue 3</div>;
</script>

<template>
  <div>
    <Hello />
    <World />
  </div>
</template>
