<template>
  <section class="bg-dark-green md:rounded-[40px] rounded-3xl col-start-1 col-end-8 xl:p-10 sm:p-[30px] p-5 flex flex-col gap-4">
    <div>
      <h2 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-white-prim">
        to naj z ponuky
      </h2>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] sm:gap-5 gap-4">
      <ProductCard
        v-for="(product, index) in randomProducts"
        :key="index"
        :class="{ 'lg:block hidden': index === 3 }"
        :img-src="product.imgSrc"
        :title="product.title"
        :slug="product.slug"
        :weight="product.weight"
        :rating="product.rating"
        :price="product.price"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "~/components/ui/ProductCard.vue";
import { products } from "~/components/products";

interface Product {
  imgSrc: string;
  title: string;
  slug: string;
  weight: string;
  rating: number;
  price: number;
}

const allProducts: Product[] = [];
products.forEach((category) => {
  Object.values(category).forEach((subcategories) => {
    (subcategories as any[]).forEach((subcategory) => {
      Object.values(subcategory).forEach((items) => {
        if (Array.isArray(items)) {
          allProducts.push(...items);
        }
      });
    });
  });
});

const getRandomProducts = (arr: Product[], count: number): Product[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomProducts = getRandomProducts(allProducts, 4);
</script>