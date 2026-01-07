<template>
  <div class="bg-white xl:p-6 sm:p-5 p-4 xl:rounded-4xl sm:rounded-3xl rounded-2xl flex gap-5 items-center">
    <a :href="`/product/${slug}`">
      <img
        :src="imgSrc"
        :alt="title"
        class="md:h-[100px] md:w-[100px] h-[60px] w-[60px] object-cover bg-grey-700 rounded-2xl"
      >
    </a>
    <div class="flex justify-between gap-5 w-full items-center">
      <a :href="`/product/${slug}`" class="xl:text-2xl md:text-xl text-lg font-semibold text-text-green-prim hover:underline">
        {{ title }}
      </a>
      <div class="flex items-center gap-2">
        <button
          @click="handleDecrease"
          class="w-8 h-8 rounded-full bg-grey-700 flex items-center justify-center hover:bg-grey-600 transition-colors"
        >
          <RiSubtractLine class="w-5 h-5 text-text-green-prim" />
        </button>
        <span class="w-8 text-center">{{ quantity }}</span>
        <button
          @click="handleIncrease"
          class="w-8 h-8 rounded-full bg-grey-700 flex items-center justify-center hover:bg-grey-600 transition-colors"
        >
          <RiAddLine class="w-5 h-5 text-text-green-prim" />
        </button>
      </div>
      <span class="xl:text-2xl md:text-xl text-lg font-semibold text-text-green-prim w-25 text-right">
        {{ (price * quantity).toFixed(2) }} €
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RiAddLine, RiSubtractLine } from "@remixicon/vue";

const props = defineProps<{
  imgSrc: string;
  slug: string;
  title: string;
  quantity: number;
  price: number;
}>();

const { increaseQuantity, decreaseQuantity } = useCart();

const handleIncrease = () => {
  increaseQuantity(props.slug);
};

const handleDecrease = () => {
  decreaseQuantity(props.slug);
};
</script>