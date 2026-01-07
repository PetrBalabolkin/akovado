<template>
  <div class="h-[320px] sm:rounded-3xl rounded-[20px] overflow-hidden transition-transform duration-300 hover:-translate-y-5">
    <img
      :src="imgSrc"
      :alt="title"
      class="w-full max-h-[185px] object-cover"
    />
    <div class="bg-white xl:px-6 xl:pt-4 xl:pb-6 px-5 pt-3 pb-5 flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h3 class="text-text-green-prim text-[18px] font-medium">
          {{ title }}
        </h3>
        <div class="text-text-green-ter flex gap-2 items-center">
          <span>
            {{ weight }}
          </span>
          <span class="flex gap-1 items-center">
            <RiStarFill class="h-4" />
            {{ rating }}
          </span>
        </div>
      </div>
      <div class="text-xl font-medium text-text-green-prim">
        {{ price?.toFixed(2) }} €
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RiStarFill } from "@remixicon/vue";

defineProps<{
  imgSrc?: string;
  title?: string;
  weight?: string;
  rating?: number;
  price?: number;
}>();
</script>