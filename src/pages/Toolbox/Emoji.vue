<script setup lang="ts">
import { copy } from '@utils/clipboard';

const emojiList = [
  { text: '🎉', code: ':tada:', desc: '初次提交' },
  { text: '🆕', code: ':new:', desc: '新特性' },
  { text: '⚡', code: ':zap:', desc: '提升性能' },
  { text: '🔨', code: ':hammer:', desc: '重构' },
  { text: '🔥', code: ':fire:', desc: '值得关注' },
  { text: '🗑️', code: ':wastebasket:', desc: '废弃 / 删除' },
  { text: '💄', code: ':lipstick:', desc: '更新 UI / 样式' },
  { text: '⚠️', code: ':warning:', desc: '警告' },
  { text: '🛎️', code: ':bellhop_bell:', desc: '提示' },
  { text: '🐛 ', code: ':bug:', desc: '修复 bug' },
  { text: '🎬', code: ':clapper:', desc: '示例' },
  { text: '🔧', code: ':wrench:', desc: '配置文件' },
  { text: '➕', code: ':heavy_plus_sign:', desc: '增加' },
  { text: '➖', code: ':heavy_minus_sign:', desc: '减少' },
  { text: '⬆️', code: ':arrow_up:', desc: '升级' },
  { text: '⬇️', code: ':arrow_down:', desc: '降级' },
  { text: '📈', code: ':chart_with_upwards_trend:', desc: '分析 / 报告' },
  { text: '✅', code: ':white_check_mark:', desc: '增加测试用例' },
  { text: '📝', code: ':memo:', desc: '文档' },
  { text: '✏️', code: ':pencil2:', desc: '修复 typo' },
  { text: '🚧', code: ':construction:', desc: 'WIP' },
  { text: '🔒', code: ':lock:', desc: '修复安全问题' },
];

const handleCopyContent = (content = '') => {
  copy(content);
};
</script>

<template>
  <div class="flex flex-col items-center">
    <table class="w-4/5 border-collapse">
      <tr class="bg-gray-200">
        <th class="border border-gray-300">Emoji</th>
        <th class="border border-gray-300">代码</th>
        <th class="border border-gray-300">描述</th>
      </tr>
      <tr
        v-for="(emoji, index) of emojiList"
        :key="emoji.code"
        :class="{ 'bg-gray-50': index % 2 === 0 }"
      >
        <td class="text-center border border-gray-300">
          <span
            class="px-2 trangray-y-px text-lg hover:cursor-pointer"
            @click="handleCopyContent(emoji.text)"
          >
            {{ emoji.text }}
          </span>
        </td>
        <td class="text-center border border-gray-300">
          <span
            class="px-2 rounded bg-gray-100 hover:cursor-pointer"
            @click="handleCopyContent(emoji.code)"
          >
            {{ emoji.code }}
          </span>
        </td>
        <td class="text-center border border-gray-300">
          {{ emoji.desc }}
        </td>
      </tr>
    </table>
  </div>
</template>
