<script setup lang="ts">
const props = defineProps<{
  type: "about" | "home" | "drawings";
}>();
</script>

<template>
  <div class="flex justify-between w-full p-4 font-bold text-xl text-primary">
    <div
      class="cursor-pointer"
      :class="{
        underline: type === 'about',
        'hover:underline': type !== 'about',
      }"
    >
      CRETOIS Charles
    </div>

    <div class="flex">
      <div
        class="ml-4 cursor-pointer"
        :class="{
          underline: type === 'drawings',
          'hover:underline': type !== 'drawings',
        }"
      >
        Dessins
      </div>
    </div>
  </div>
</template>
