<script setup lang="ts">
import { ref, toRefs,onMounted } from 'vue';
import { isPlainObject, get} from 'lodash';
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});

const { data } = toRefs(props);

</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>