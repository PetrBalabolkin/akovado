<template>
  <section class="xl:p-10 sm:p-[30px] p-5 bg-dark-green md:rounded-[40px] rounded-3xl flex flex-col gap-6">
    <h2 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-white-prim">
      Nakupujte podľa kategórií
    </h2>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[30px] sm:gap-5 gap-4">
      <CategoryCard
          v-for="(category, index) in categories"
          :key="index"
          :title="category.title"
          :imageSrc="category.imageSrc"
          :class="getCategoryClass(index)"
      />
      <a href="/catalog" class="group h-80 p-6 rounded-[32px] border outline-offset-[-1px] hover:bg-light-green transition-all duration-300 border-light-green inline-flex flex-col justify-end items-start gap-2.5">
        <div class="inline-flex justify-start items-start gap-2.5">
          <Button
              text="Nakupovať"
              variant="secondary"
              class="text-white group-hover:text-dark-green group-hover:bg-white"
              href="/catalog"
          />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCard from "~/components/ui/CategoryCard.vue";
import ovozelImg from "~/assets/images/main/categories/ovozel.png";
import masorybaImg from "~/assets/images/main/categories/masoryba.png";
import lahodkyImg from "~/assets/images/main/categories/lahodky.png";
import pekarenImg from "~/assets/images/main/categories/pekaren.png";
import mliekoImg from "~/assets/images/main/categories/mlieko.png";
import spajzaImg from "~/assets/images/main/categories/spajza.png";
import snackyImg from "~/assets/images/main/categories/snacky.png";
import nealkoImg from "~/assets/images/main/categories/nealko.png";
import kavacajImg from "~/assets/images/main/categories/kavacaj.png";
import alkoImg from "~/assets/images/main/categories/alko.png";
import drogeriaImg from "~/assets/images/main/categories/drogeria.png";
import bistroImg from "~/assets/images/main/categories/bistro.png";

const categories = [
  {
    title: "Ovozel",
    imageSrc: ovozelImg,
  },
  {
    title: "Mäso Ryba",
    imageSrc: masorybaImg,
  },
  {
    title: "Lahôdky",
    imageSrc: lahodkyImg,
  },
  {
    title: "Pekáreň",
    imageSrc: pekarenImg,
  },
  {
    title: "Mliečne",
    imageSrc: mliekoImg,
  },
  {
    title: "Špajza",
    imageSrc: spajzaImg,
  },
  {
    title: "Snacky",
    imageSrc: snackyImg,
  },
  {
    title: "Nealko",
    imageSrc: nealkoImg,
  },
  {
    title: "Káva Čaj",
    imageSrc: kavacajImg,
  },
  {
    title: "Alko",
    imageSrc: alkoImg,
  },
  {
    title: "Drogéria",
    imageSrc: drogeriaImg,
  },
  {
    title: "Bistro",
    imageSrc: bistroImg,
  },
]

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i]!;
    result[i] = result[j]!;
    result[j] = temp;
  }
  return result;
}

function canPlaceWideCard(widePositions: number[], newPos: number, total: number, cols: number): boolean {
  const sortedPositions = [...widePositions, newPos].sort((a, b) => a - b);

  let gridCol = 0;
  let cardIndex = 0;

  while (cardIndex < total) {
    const isWide = sortedPositions.includes(cardIndex);

    if (isWide) {
      if (gridCol === cols - 1) {
        return false;
      }
      gridCol = (gridCol + 2) % cols;
    } else {
      gridCol = (gridCol + 1) % cols;
    }

    cardIndex++;
  }

  return true;
}

function selectLgWidePositions(total: number, count: number): number[] {
  const positions: number[] = [];
  const candidates = shuffle([...Array(total).keys()]);

  for (const pos of candidates) {
    if (positions.length >= count) break;

    const hasMinGap = positions.every(p => Math.abs(p - pos) > 1);
    if (!hasMinGap) continue;

    if (canPlaceWideCard(positions, pos, total, 4)) {
      positions.push(pos);
    }
  }

  return positions.sort((a, b) => a - b);
}

function selectMdWidePositions(total: number, count: number): number[] {
  const positions: number[] = [];
  const candidates = shuffle([...Array(total).keys()]);

  for (const pos of candidates) {
    if (positions.length >= count) break;

    const hasMinGap = positions.every(p => Math.abs(p - pos) > 1);
    if (!hasMinGap) continue;

    if (canPlaceWideCard(positions, pos, total, 3)) {
      positions.push(pos);
    }
  }

  return positions.sort((a, b) => a - b);
}

function selectSmWidePositions(total: number, count: number): number[] {
  const positions: number[] = [];
  const candidates = shuffle([...Array(total).keys()]);

  for (const pos of candidates) {
    if (positions.length >= count) break;

    const hasMinGap = positions.every(p => Math.abs(p - pos) > 2);
    if (!hasMinGap) continue;

    positions.push(pos);
  }

  return positions.sort((a, b) => a - b);
}

const lgWidePositions = selectLgWidePositions(categories.length, 3);
const mdWidePositions = selectMdWidePositions(categories.length, 2);
const smWidePositions = selectSmWidePositions(categories.length, 2);

function getCategoryClass(index: number): string {
  const classes: string[] = [];

  if (lgWidePositions.includes(index)) {
    classes.push('lg:col-span-2');
  }

  if (mdWidePositions.includes(index)) {
    classes.push('max-lg:md:col-span-2');
  }

  if (smWidePositions.includes(index)) {
    classes.push('max-md:col-span-2');
  }

  return classes.join(' ');
}
</script>