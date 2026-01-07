<template>
  <footer class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto sm:px-[30px] px-5 flex flex-col gap-0.5 my-[60px]">
    <div class="flex lg:flex-row flex-col lg:items-center items-start">
      <span class="soyuz text-text-green-prim xl:text-[180px] md:text-[120px] text-[80px] font-bold">
        akovado
      </span>
      <div class="sm:grid grid-cols-3 flex flex-wrap gap-6 w-full">
        <div class="flex lg:flex-col flex-row gap-4 min-w-fit items-center">
          <NuxtLink href="#" class="text-text-green-sec hover:text-light-green transition-colors hidden lg:inline-block">
            <RiTiktokLine />
          </NuxtLink>
          <NuxtLink href="#" class="text-text-green-sec hover:text-light-green transition-colors hidden lg:inline-block">
            <RiInstagramLine />
          </NuxtLink>
          <NuxtLink href="#" class="text-text-green-sec hover:text-light-green transition-colors hidden lg:inline-block">
            <RiLinkedinBoxLine />
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink href="/" class="text-xl text-text-green-prim hover:text-light-green transition-colors">
            O nás
          </NuxtLink>
          <NuxtLink href="/catalog" class="text-xl text-text-green-prim hover:text-light-green transition-colors">
            Katalóg
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
          <NuxtLink href="/" class="text-xl text-text-green-prim hover:text-light-green transition-colors">
            Prihlasiť sa
          </NuxtLink>
          <NuxtLink href="/" class="text-xl text-text-green-prim hover:text-light-green transition-colors">
            Zaregistrovať sa
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex justify-between gap-5">
      <span class="text-[#8CC08B] sm:text-[12px] text-[8px]">
        © akovado {{new Date().getFullYear()}}
      </span>
      <div class="flex gap-6">
        <NuxtLink href="/catalog" class="text-[#8CC08B] sm:text-[12px] text-[8px] hover:text-light-green transition-colors hidden lg:inline-block">
          Obchodné podmienky
        </NuxtLink>
        <NuxtLink href="/catalog" class="text-[#8CC08B] sm:text-[12px] text-[8px] hover:text-light-green transition-colors hidden lg:inline-block">
          Spracovanie osobných údajov
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {RiInstagramLine, RiLinkedinBoxLine, RiTiktokLine} from "@remixicon/vue";
</script>