<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useModalStore } from "../stores/modal";
import { useBebidasStore } from "../stores/bebidas";
import { useFavoritosStore } from "../stores/favoritos";

const modal = useModalStore();
const bebidas = useBebidasStore();
const favoritos = useFavoritosStore();

const formatearIngredientes = () => {
  const ingredientesDiv = document.createElement("DIV");
  for (let index = 1; index < 15; index++) {
    if (bebidas.receta[`strIngredient${index}`]) {
      const ingrediente = bebidas.receta[`strIngredient${index}`];
      const cantidad = bebidas.receta[`strMeasure${index}`];

      const ingredienteCantidad = document.createElement("P");
      ingredienteCantidad.textContent = `${ingrediente} - ${cantidad}`;

      ingredientesDiv.appendChild(ingredienteCantidad);
    }
  }

  return ingredientesDiv;
};
</script>

<template>
  <TransitionRoot as="template" :show="modal.modal">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div class="flex items-center justify-center h-screen">
              <div
                class="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div class="max-w-md mx-auto">
                  <div
                    class="relative h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
                  >
                    <img
                      :src="bebidas.receta.strDrinkThumb"
                      :alt="'Imagen de ' + bebidas.receta.strDrink"
                      class="w-full object-cover object-center"
                    />
                  </div>
                  <div class="p-4">
                    <h4
                      class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                    >
                      {{ bebidas.receta.strDrink }}
                    </h4>
                    <h6
                      class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-orange-500 antialiased"
                    >
                      Ingredientes y Cantidades
                    </h6>
                    <p
                      class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
                      v-html="formatearIngredientes().outerHTML"
                    ></p>
                    <h6
                      class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-orange-500 antialiased"
                    >
                      Instrucciones
                    </h6>
                    <p
                      class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
                    >
                      {{ bebidas.receta.strInstructions }}
                    </p>
                  </div>
                  <div class="flex justify-between gap-4">
                    <button
                      type="button"
                      class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      @click="modal.handleClickModal()"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                      @click="favoritos.handleClickFavorito"
                    >
                      {{ modal.textoBoton }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
