<template>
  <div class="lg:grid grid-cols-12 flex flex-col-reverse gap-0.5">
    <div class="bg-white md:rounded-[40px] rounded-3xl col-start-1 col-end-8 xl:p-10 sm:p-[30px] p-5 flex flex-col gap-4">
      <h2 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-green-prim">
        nepremeškaj novinky a zľavy
      </h2>
      <p class="xl:text-xl md:text-lg text-base text-text-green-sec">
        Prihlás sa na odber a buď prvý, kto sa dozvie o novinkách, limitkách aj špeciálnych zľavách.
      </p>
      <div>
        <Button
            text="Nakupovať"
            href="/catalog"
        />
      </div>
    </div>
    <img
        src="~/assets/images/main/spam.png"
        alt="spam"
        class="md:rounded-[40px] rounded-3xl md:h-[400px] h-[300px] col-start-8 col-end-13 object-cover"
    />
  </div>
</template>

<script setup lang="ts">

</script>