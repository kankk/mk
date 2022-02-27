<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface Link {
  name: string;
  path: string;
}

const links = ref([
  { name: 'Blog', path: '/blog' },
  { name: 'Bookmark', path: '/bookmark' },
  { name: 'Docs', path: '/docs' }
]);

const router = useRouter();
const route = useRoute();

const handleLogoClick = () => {
  router.push({ path: '/'});
};

const handleLinkClick = (link: Link) => {
  router.push({ path: link.path });
};

const getLinkClass = (link: Link) => {
  const cls = ['mr-6', 'last:mr-0',  'hover:text-black/85', 'hover:cursor-pointer'];
  if (link.path === route.path) {
    cls.push('text-black/85 underline underline-offset-8');
  } else {
    cls.push('text-black/45');
  }
  return cls;
};

</script>

<template>
  <div class="flex justify-between items-center px-3">
    <!-- Left -->
    <div>
      <div
        class="logo hover:cursor-pointer"
        @click="handleLogoClick"
      >
        Mangokk
      </div>
    </div>
    <!-- Center -->
    <div>
      <div class="flex items-center">
        <div
          v-for="link of links"
          :key="link.name"
          :class="getLinkClass(link)"
          @click="handleLinkClick(link)"
        >
          {{ link.name }}
        </div>
      </div>
    </div>
    <!-- Right -->
    <div>
      Icons
    </div>
  </div>
</template>