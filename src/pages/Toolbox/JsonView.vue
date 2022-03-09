<script setup lang="ts">
import { ref } from 'vue';
import { cloneDeep } from 'lodash';

const demo = {
  name: 'Qihua Jian',
  height: 174,
  gender: 'male',
  address: {
    contry: 'China',
    province: 'GuangDong',
    city: 'ShenZhen',
  },
  tags: ['Coffee', 'Game', 'Code'],
};

const jsonString = ref(JSON.stringify(demo));
const jsonObject = ref(cloneDeep(demo));

const isParseSuccess = ref(true);
const handleJsonStringChange = () => {
  try {
    jsonObject.value = JSON.parse(jsonString.value);
    isParseSuccess.value = true;
  } catch (e) {
    isParseSuccess.value = false;
  }
};
</script>

<template>
  <div>
    <textarea
      v-model="jsonString"
      class="w-full px-2 py-1 border-2 rounded-sm outline-none resize-none text-sm break-all"
      :class="[isParseSuccess ? 'border-green-700' : 'border-red-700']"
      rows="5"
      @change="handleJsonStringChange"
    />

    <pre>{{ jsonObject }}</pre>
  </div>
</template>
