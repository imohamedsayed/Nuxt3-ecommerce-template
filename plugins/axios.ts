// plugins/axios.js
import axios from "axios";
import { useCookie, useRouter } from "#imports";
import { defineNuxtPlugin } from "nuxt/app";
import { useAuthStore } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("jwtToken");
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: "https://api.fcs-eg.com/",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (token.value) {
        config.headers.Authorization = `Bearer ${token.value}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle 401 errors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        const store = useAuthStore();
        store.logout();
        token.value = null;
        router.push("/login");
      }
      return Promise.reject(error);
    }
  );

  nuxtApp.provide("api", axiosInstance);
});
