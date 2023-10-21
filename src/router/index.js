import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: InicioView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritosView.vue"),
    },
  ],
});

export default router;
