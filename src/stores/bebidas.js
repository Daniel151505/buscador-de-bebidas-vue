import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import APIService from "../services/APIService";

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = ref({
    nombre: "",
    categoria: "",
  });

  onMounted(async () => {
    const {
      data: { drinks },
    } = await APIService.obtenerCategorias();

    categorias.value = drinks;
  });

  function obtenerRecetas() {
    console.log(console.log("obtener recetas"));
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
  };
});
