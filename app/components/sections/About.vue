<template>
  <section class="h-[90vh] lg:grid lg:grid-cols-12 flex flex-col gap-0.5">
    <img src="~/assets/images/main/about.png" alt="About Image" class="min-h-[300px] col-start-1 col-end-6 md:rounded-[40px] rounded-3xl object-cover object-center h-full w-full" />
    <div class="col-start-6 col-end-13 bg-white md:rounded-[40px] rounded-3xl xl:p-10 sm:p-[30px] p-5 flex flex-col gap-8 justify-between">
      <div class="flex flex-col gap-5 items-start">
        <h2 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] text-text-green-prim leading-none">
          Sme viac než len potraviny
        </h2>
        <p class="md:text-xl text-base">
          U nás nájdete kvalitné potraviny – lokálne, remeselné aj prémiové značky z celého sveta. Chuť pre rýchly, vedomý a poctivý životný štýl. Pre tých, čo si potrpia na kvalitu, dizajn a zážitok.
        </p>
        <Button
            text="Nakupovať"
            href="/catalog"
        />
      </div>
      <div class="flex md:flex-row flex-col gap-5">
        <AboutInfoCard v-for="(info, index) in AboutInfo" :key="index" :text="info.text" :icon="info.icon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutInfoCard from "~/components/ui/AboutInfoCard.vue";
import {RiAwardLine, RiLeafLine, RiSparklingLine} from "@remixicon/vue";

const AboutInfo = [
  {
    text: "Overené značky, remeselná výroba a poctivé suroviny, na ktoré sa dá spoľahnúť.",
    icon: RiAwardLine,
  },
  {
    text: "Dôraz na prírodu, lokálnych dodávateľov a zero waste princípy v praxi.",
    icon: RiLeafLine,
  },
  {
    text: "Chutí skvelo, vyzerá krásne a ladí s moderným, vedomým životným štýlom.",
    icon: RiSparklingLine,
  },
]
</script>