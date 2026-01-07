<template>
  <header class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto xl:px-6 lg:px-4 sm:px-[30px] px-5 md:py-6 py-5 flex flex-col gap-4" >
    <div class="flex w-full justify-between">
      <NuxtLink href="/" class="text-2xl font-semibold text-text-green-prim hover:text-light-green transition-colors soyuz">
        akovado
      </NuxtLink>
      <div class="flex md:gap-8 gap-5 w-fit">
        <NuxtLink href="/catalog" class="text-text-green-sec hover:text-light-green transition-colors text-base xl:text-xl lg:inline-block">
          Katalóg
        </NuxtLink>
        <NuxtLink href="#" class="text-text-green-sec hover:text-light-green transition-colors lg:inline-block">
          <RiUser3Line />
        </NuxtLink>
        <NuxtLink href="#" class="text-text-green-sec hover:text-light-green transition-colors lg:inline-block">
          <RiHeartLine />
        </NuxtLink>
        <NuxtLink href="/cart" class="text-text-green-sec hover:text-light-green transition-colors lg:inline-block">
          <RiShoppingCartLine />
        </NuxtLink>
      </div>
    </div>
    <div class="hidden lg:flex justify-between text-base xl:text-xl w-full">
      <NuxtLink v-for="(category, index) in categories" :key="index" href="#" class="text-text-green-sec hover:text-light-green transition-colors">
        {{ category }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import {RiHeartLine, RiShoppingCartLine, RiUser3Line} from "@remixicon/vue";

const categories = [
  "Ovozel",
  "Mäso Ryba",
  "Lahôdky",
  "Mliečne",
  "Pekáreň",
  "Špajza",
  "Snacky",
  "Káva Čaj",
  "Nealko",
  "Alko",
  "Drogéria",
  "Bistro",
]

</script>