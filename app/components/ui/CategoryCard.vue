<template>
  <a :href="href" class=" h-80 lg:p-6 sm:p-5 p-4 rounded-[32px] inline-flex flex-col justify-end items-start gap-2.5 bg-gray-700bg-image bg-cover bg-center transition-transform duration-300 hover:-translate-y-5" :style="`background-image: url(${imageSrc})`">
    <div class="lg:px-6 px-5 lg:pt-3.5 lg:pb-4 pt-2.5 pb-3 bg-white rounded-[50px] inline-flex justify-center items-center gap-2.5">
      <div class="justify-start text-black xl:text-2xl text-xl font-medium font-['Albert_Sans'] leading-6">{{ title }}</div>
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