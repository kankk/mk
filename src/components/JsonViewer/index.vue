<script setup lang="tsx">
import { ref, toRefs,onMounted } from 'vue';
import { isPlainObject, get } from 'lodash';
import World from './World';
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});

const { data } = toRefs(props);

const Hello = () => <div>Vue 3</div>;

</script>

<template>
  <div>
    <Hello />
    <World />
  </div>
</template>