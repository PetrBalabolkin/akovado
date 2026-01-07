<template>
  <main class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto flex flex-col gap-0.5">
    <section class="grid lg:grid-cols-2 grid-cols-1 gap-0.5 lg:h-[84vh] h-[calc(95vh-80px)]">
      <div class="flex flex-col gap-0.5 min-h-0 lg:h-full h-fit">
        <div class="overflow-hidden bg-white md:rounded-[40px] rounded-3xl md:flex py-7 items-center hidden lg:min-h-0 lg:max-h-full max-h-40">
          <div class="flex animate-scroll-left whitespace-nowrap">
            <span class="soyuz text-text-green-prim xl:text-[180px] md:text-[120px] text-[80px] font-bold px-4">
              akovado
            </span>
            <span class="soyuz text-text-green-prim xl:text-[180px] md:text-[120px] text-[80px] font-bold px-4">
              akovado
            </span>
            <span class="soyuz text-text-green-prim xl:text-[180px] md:text-[120px] text-[80px] font-bold px-4">
              akovado
            </span>
            <span class="soyuz text-text-green-prim xl:text-[180px] md:text-[120px] text-[80px] font-bold px-4">
              akovado
            </span>
          </div>
        </div>
        <div class="xl:p-10 sm:p-[30px] p-5 bg-light-green md:rounded-[40px] rounded-3xl w-full flex-1 lg:min-h-fit max-h-fit">
          <h1 class="xl:text-8xl md:text-[80px] text-[42px] text-text-green-prim leading-none">
            Potraviny hodné vašej chuti
          </h1>
          <Button
            text="Nakupovať"
            class="!bg-white !hover:bg-dark-green !hover:text-white"
            href="/catalog"
          />
        </div>
      </div>
      <div class="bg-dark-green h-full md:rounded-[40px] rounded-3xl w-full">

      </div>
    </section>

    <QuickCategories />
    <About />
    <Categories />
    <Spam />
    <Products />
    <Cta />

  </main>
</template>

<script setup lang="ts">
import QuickCategories from "~/components/sections/QuickCategories.vue";
import About from "~/components/sections/About.vue";
import Categories from "~/components/sections/Categories.vue";
import Spam from "~/components/sections/Spam.vue";
import Products from "~/components/sections/products.vue";
import Cta from "~/components/sections/cta.vue";

</script>