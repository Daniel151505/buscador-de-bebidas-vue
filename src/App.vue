<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/Header.vue";
</script>

<template>
  <HeaderVue />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>
