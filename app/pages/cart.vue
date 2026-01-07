<template>
  <section class="2xl:w-[1378px] xl:w-[1234px] lg:w-[982px] w-full lg:mx-auto flex flex-col gap-0.5">
    <div class="mx-5">
      <div class="text-text-green-ter">
        <a href="/">akovado → </a>
      </div>
      <h1 class="2xl:text-8xl xl:text-[80px] md:text-7xl sm:text-5xl text-[42px] leading-none text-text-green-prim">
        košík
      </h1>
    </div>
    <div class="grid lg:grid-cols-12 grid-cols-1 gap-0.5">
      <div class="col-start-1 lg:col-end-9 flex flex-col gap-0.5">
        <div class="md:rounded-[40px] rounded-3xl xl:p-8 p-6 bg-dark-green flex flex-col xl:gap-[30px] gap-5">
          <template v-if="cart.length > 0">
            <CartProductCard
              v-for="item in cart"
              :key="item.slug"
              :img-src="item.imgSrc"
              :slug="item.slug"
              :title="item.title"
              :quantity="item.quantity"
              :price="item.price"
            />
          </template>
          <div v-else class="text-text-white-prim text-center py-10">
            <p class="text-xl">Košík je prázdny</p>
            <a href="/catalog" class="text-text-white-sec hover:underline">Prejsť do katalógu</a>
          </div>
        </div>
        <div v-if="cart.length > 0" class="md:rounded-[40px] rounded-3xl xl:p-8 p-6 bg-white flex flex-col gap-5">
          <h3 class="xl:text-2xl md:text-xl text-lg font-semibold text-text-green-prim">
            Dodanie na adresu
          </h3>
          <div class="xl:text-xl sm:text-lg text-base leading-none text-text-green-sec flex justify-between gap-2">
            <span>Hálova 16, 851 01 Bratislava</span>
            <span>{{ deliveryDate }} ~12:00</span>
          </div>
        </div>
        <div v-if="cart.length > 0" class="grid md:grid-cols-2 grid-cols-1 gap-0.5">
          <div class="md:rounded-[40px] rounded-3xl xl:p-8 p-6 bg-white flex flex-col gap-5">
            <h3 class="xl:text-2xl md:text-xl text-lg font-semibold text-text-green-prim">
              Platba
            </h3>
            <Button
                text="Google Pay"
            />
          </div>
          <div class="md:rounded-[40px] rounded-3xl xl:p-8 p-6 bg-white flex flex-col gap-5">
            <h3 class="xl:text-2xl md:text-xl text-lg font-semibold text-text-green-prim">
              Tvoje údaje
            </h3>
            <div class="flex flex-col gap-4 xl:text-xl sm:text-lg text-base leading-none text-text-green-sec">
              <span>+421 949 873 123</span>
              <span>pan.nem@akovado.com</span>
              <span>Hálova 16, 851 01 Bratislava</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-start-9 lg:col-end-13 bg-dark-green md:rounded-[40px] rounded-3xl xl:p-8 p-6 flex flex-col gap-5 h-fit">
        <div>
          <h3 class="xl:text-2xl md:text-xl text-lg font-semibold text-text-white-prim">Celkom na zaplatenie:</h3>
          <span class="text-3xl font-bold text-text-white-prim">{{ cartTotal.toFixed(2) }} €</span>
        </div>
        <Button
            text="Zaplatiť a objednať"
            :disabled="cart.length === 0"
            @click="handleCheckout"
        />
      </div>
    </div>

    <div v-if="showThankYouModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-bg rounded-3xl p-8 max-w-md text-center flex flex-col gap-5">
        <h2 class="text-3xl font-bold text-text-green-prim leading-none">Ďakujeme za nákup!</h2>
        <p class="text-text-green-sec">Vaša objednávka bola úspešne prijatá.</p>
        <Button
            text="Na hlavnú"
            href="/"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CartProductCard from "~/components/ui/CartProductCard.vue";

const { cart, cartTotal, clearCart } = useCart();

const showThankYouModal = ref(false);

const handleCheckout = () => {
  if (cart.value.length > 0) {
    clearCart();
    showThankYouModal.value = true;
  }
};

const deliveryDate = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toLocaleDateString('sk-SK', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
});
</script>