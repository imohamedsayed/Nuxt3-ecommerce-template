import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    user: null,
  }),
  getters: {
    User(state) {
      return state.user;
    },
  },
  actions: {
    async login(credentials) {
      try {
        const { $api } = useNuxtApp();
        const res = await $api.post("/api/login", credentials);
        if (res.status == 200) {
          const { user, access_token } = res.data;
          const token = useCookie("jwtToken");
          token.value = access_token;
          $api.defaults.headers.common["Authorization"] =
            "Bearer " + access_token;
          this.user = user;
        } else {
          throw new Error(res.response.data.error);
        }
      } catch (error) {
        throw new Error(error.response.data.error );
      }
    },

    logout() {
      this.user = null;
      const token = useCookie("jwtToken");
      token.value = null;
    },
  },
  persist: true,
});
