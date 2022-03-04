<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
let editor: monaco.editor.IStandaloneCodeEditor;
const ceEditor = ref();
const initMonacoEditor = () => {
  console.log(123, ceEditor.value);
  editor = monaco.editor.create(ceEditor.value, {
    automaticLayout: true,
    fontFamily: 'Courier New',
    theme: 'vs-dark',
    fontSize: 15,
  });
};

onMounted(() => {
  initMonacoEditor();
});
</script>

<template>
  <div
    ref="ceEditor"
    style="width: 800px; height: 500px"
  />
</template>
