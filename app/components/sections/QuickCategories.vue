<template>
  <section class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 p-[30px] bg-white md:rounded-[40px] rounded-3xl">
    <SmallCategoryCard v-for="category in quickCategories" :key="category.title" :title="category.title" :imageSrc="category.imageSrc" />
  </section>
</template>

<script setup lang="ts">
import SmallCategoryCard from "~/components/ui/SmallCategoryCard.vue";
import ovozelImg from "~/assets/images/main/quickCategories/ovozel.png";
import masorybaImg from "~/assets/images/main/quickCategories/masoryba.png";
import mliekoImg from "~/assets/images/main/quickCategories/mlieko.png";
import pekarenImg from "~/assets/images/main/quickCategories/pekaren.png";
import kavacajImg from "~/assets/images/main/quickCategories/kavacaj.png";
import drogeriaImg from "~/assets/images/main/quickCategories/drogeria.png";
import bistroImg from "~/assets/images/main/quickCategories/bistro.png";

const quickCategories = [
  {
    title: "Ovozel",
    imageSrc: ovozelImg,
  },
  {
    title: "Mäso Ryba",
    imageSrc: masorybaImg,
  },
  {
    title: "Mliečne",
    imageSrc: mliekoImg,
  },
  {
    title: "Pekáreň",
    imageSrc: pekarenImg,
  },
  {
    title: "Káva Čaj",
    imageSrc: kavacajImg,
  },
  {
    title: "Bistro",
    imageSrc: bistroImg,
  },
]
</script>