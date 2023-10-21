<script setup>
import { useBebidasStore } from "../stores/bebidas";

const bebidas = useBebidasStore();

defineProps({
  receta: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="relative flex w-96 flex-col justify-center items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gap-10 mx-auto"
  >
    <div
      class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40"
    >
      <img
        class="hover:scale-120 transition-transform hover:rotate-2"
        :src="receta.strDrinkThumb"
        :alt="'Imagen de ' + receta.strDrink"
        layout="fill"
      />
    </div>
    <div class="p-6">
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center"
      >
        {{ receta.strDrink }}
      </h5>
    </div>
    <div class="p-6 pt-0">
      <button
        class="select-none rounded-lg bg-orange-400 hover:bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-light="true"
        @click="bebidas.seleccionarBebida(receta.idDrink)"
      >
        Ver Receta
      </button>
    </div>
  </div>
</template>
