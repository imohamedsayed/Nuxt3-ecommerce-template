import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";
import { useAuthStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("jwtToken");
  if (!token.value) {
    const authStore = useAuthStore();
    authStore.logout();
    return navigateTo("/login");
  }
});
