<script setup>
import RecetaVue from "../components/Receta.vue";
import { useBebidasStore } from "../stores/bebidas";
const bebidas = useBebidasStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold text-center">Recipes</h1>
  <p v-if="bebidas.noRecetas" class="my-10 text-center text-2xl">
    There are no results, use the form to search for recipes.
  </p>
  <div
  v-else
  class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10 justify-center"
>
    <RecetaVue
      v-for="receta in bebidas.recetas"
      :receta="receta"
      :key="receta.idDrink"
    />
  </div>
</template>
