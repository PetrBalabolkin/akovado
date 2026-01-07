<template>
  <div class="flex md:flex-col gap-4">
    <component v-if="icon" :is="icon" class="w-12 h-12 text-text-green-prim mb-4" />
    <p class="text-text-green-sec">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  text?: string;
  icon?: Component;
}>();

</script>