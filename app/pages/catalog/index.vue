<template>
  <main class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto flex flex-col gap-0.5">
    <section class="px-5">
      <span class="text-text-green-ter">
        <a href="/">akovado →</a>
      </span>
      <h1 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-green-prim">
        katalóg
      </h1>
    </section>
    <section class="bg-dark-green md:rounded-[40px] rounded-3xl col-start-1 col-end-8 xl:p-10 sm:p-[30px] p-5 flex flex-col gap-4">
      <div>

      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] sm:gap-5 gap-4">
        <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :img-src="product.imgSrc"
            :title="product.title"
            :slug="product.slug"
            :weight="product.weight"
            :rating="product.rating"
            :price="product.price"
        />
      </div>
    </section>
    <Products />
  </main>
</template>

<script setup lang="ts">
import Products from "~/components/sections/products.vue";
import ProductCard from "~/components/ui/ProductCard.vue";
import { products as productsData } from "~/components/products";

interface Product {
  imgSrc: string;
  title: string;
  slug: string;
  weight: string;
  rating: number;
  price: number;
}

function getAllProducts(): Product[] {
  const allProducts: Product[] = [];

  const data = productsData[0] as Record<string, Array<Record<string, Product[]>>>;

  for (const categoryKey in data) {
    const category = data[categoryKey];
    if (Array.isArray(category) && category.length > 0) {
      const subcategories = category[0];
      for (const subcategoryKey in subcategories) {
        const items = subcategories[subcategoryKey];
        if (Array.isArray(items)) {
          items.forEach((item) => {
            if (item.imgSrc && item.title) {
              allProducts.push(item);
            }
          });
        }
      }
    }
  }

  return allProducts;
}

const products = getAllProducts();
</script>