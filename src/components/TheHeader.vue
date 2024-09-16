<script setup lang="ts">
const props = defineProps<{
  type: "about" | "home" | "drawings";
}>();
</script>

<template>
  <div class="flex justify-between w-full p-4 font-bold text-xl text-primary">
    <RouterLink
      to="/"
      class="cursor-pointer"
      :class="{
        underline: type === 'about',
        'hover:underline': type !== 'about',
      }"
    >
      CRETOIS Charles
    </RouterLink>

    <div class="flex">
      <RouterLink
        to="/drawings"
        class="ml-4 cursor-pointer"
        :class="{
          underline: type === 'drawings',
          'hover:underline': type !== 'drawings',
        }"
      >
        Dessins
      </RouterLink>
    </div>
  </div>
</template>
