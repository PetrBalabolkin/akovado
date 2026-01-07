<template>
  <a :href="href" class="h-36 w-full p-5 rounded-3xl inline-flex flex-col justify-end items-start gap-3 bg-gray-700 bg-image bg-cover bg-center transition-transform duration-300 hover:-translate-y-5" :style="`background-image: url(${imageSrc})`">
    <div class="self-stretch px-2 py-2.5 bg-white rounded-3xl inline-flex justify-center items-center gap-2.5">
      <div class="text-center justify-start text-text-green-sec text-xl font-semibold font-['Albert_Sans']">{{ title }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  imageSrc?: string;
  href?: string;
}>()
</script>