// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";


export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@hypernym/nuxt-gsap", '@pinia/nuxt', "@pinia-plugin-persistedstate/nuxt","@nuxtjs/i18n",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  i18n: {
    locales: [
        { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' ,dir: 'ltr',},
        { code: 'ar', iso: 'ar', file: 'ar.js', name: 'العربية',dir: 'rtl', }
      ],
      defaultLocale: 'en',
      langDir: 'locales/',
      strategy: 'no_prefix',
      dynamicRouteParams: true,
      detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
      },
      vueI18n: "./i18n.config.ts"
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    head: {
      title: "Project Startup",
      link:[
        {
            href : "logo.png",
            rel:"icon"
        }
      ]
    },
  },
  gsap:{
    composables:true,
    provide:false,
    extraPlugins:{
        scrollTrigger: true,
    }
  },
  plugins:["~/plugins/axios.ts"]
});
