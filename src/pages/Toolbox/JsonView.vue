<script setup lang="ts">
import { ref } from 'vue';
import { cloneDeep, get } from 'lodash';
import JsonViewer from '@components/JsonViewer/index.vue';

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
const json = ref(cloneDeep(demo));

const isParseSuccess = ref(true);
const handleJsonStringChange = () => {
  try {
    json.value = JSON.parse(jsonString.value);
    isParseSuccess.value = true;
  } catch (e) {
    isParseSuccess.value = false;
  }
};

const getInputString = ref('');
const outputString = ref('');

const handleGetInputEnter = () => {
  outputString.value = get(json.value, getInputString.value, '');
};
</script>

<template>
  <div>
    <div>
      <textarea
        v-model="jsonString"
        class="w-full px-2 py-1 border-2 rounded-sm outline-none resize-none text-sm break-all"
        :class="[isParseSuccess ? 'border-green-700' : 'border-red-700']"
        rows="5"
        @change="handleJsonStringChange"
      />
    </div>

    <div>
      <input
        v-model="getInputString"
        class="w-full px-2 py-1 border-2 rounded-sm outline-none text-sm border-blue-700"
        @keyup.enter="handleGetInputEnter"
      />
    </div>

    <div class="py-2">Output: {{ outputString }}</div>

    <div>
      JSON:
      <JsonViewer :data="json" />
    </div>
  </div>
</template>
