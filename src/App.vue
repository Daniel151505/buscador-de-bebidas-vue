<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/Header.vue";
import ModalVue from "./components/Modal.vue";
import NotificacionVue from "./components/Notificacion.vue";
</script>

<template>
  <HeaderVue />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <ModalVue />
  <NotificacionVue />
</template>
