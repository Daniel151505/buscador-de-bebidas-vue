import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = ref({
    nombre: "",
    categoria: "",
  });

  onMounted(async () => {
    const {
      data: { drinks },
    } = await axios(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );

    categorias.value = drinks;
  });

  function obtenerRecetas() {
    console.log(console.log('obtener recetas'))
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas
  };
});
