<template>
  <main v-if="product" class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto flex flex-col gap-0.5">
    <section class="grid lg:grid-cols-2 grid-cols-1 gap-0.5 lg:h-[84vh] h-[calc(95vh-80px)]">
      <img
        :src="product.imgSrc"
        :alt="product.title"
        class="md:rounded-[40px] rounded-3xl w-full h-full object-cover"
      />
      <div class="bg-white h-full md:rounded-[40px] rounded-3xl w-full xl:p-10 sm:p-[30px] p-5 flex flex-col gap-6 justify-between">
        <div class="flex flex-col gap-1">
          <div class="text-text-green-ter">
            <a href="/">akovado → </a><a href="/catalog">katalóg → </a><a :href="`/catalog/${product.category}`">{{ product.categoryName }} → </a>
          </div>
          <h1 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-green-prim">
            {{ product.title }}
          </h1>
          <p class="xl:text-xl sm:text-lg text-base text-text-green-sec">
            {{ product.description }}
          </p>
        </div>
        <div class="flex gap-6 items-center">
          <span class="sm:text-3xl text-2xl font-semibold text-text-green-sec">{{ product.price }} €</span>
          <Button
            text="Pridať do košíka"
            @click="handleAddToCart"
          />
        </div>
      </div>
    </section>
    <Products />
  </main>
  <main v-else class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto flex items-center justify-center h-[50vh]">
    <p class="text-2xl text-text-green-sec">Produkt nebol nájdený</p>
  </main>
</template>

<script setup lang="ts">
import Products from "~/components/sections/products.vue";
import { findProductBySlug } from "~/components/products";

const route = useRoute();
const slug = route.params.slug as string;

const product = findProductBySlug(slug);

const { addToCart } = useCart();

const handleAddToCart = () => {
  if (product) {
    addToCart({
      slug: product.slug,
      imgSrc: product.imgSrc,
      title: product.title,
      price: product.price
    });
  }
};
</script>