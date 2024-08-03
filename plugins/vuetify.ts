// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "animate.css"

import { createVuetify } from "vuetify";
import VueTablerIcons from "vue-tabler-icons";
import PerfectScrollbar from "vue3-perfect-scrollbar";

import VueApexCharts from "vue3-apexcharts";

import "@/scss/style.scss";

import {
  PurpleTheme,
} from "~/theme/LightTheme";

export default defineNuxtPlugin(async (app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "PurpleTheme",
      themes: {
        PurpleTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
  app.vueApp.use(VueTablerIcons);
  app.vueApp.use(PerfectScrollbar);
  if (process.client) {
    const VueApexCharts = (await import("vue3-apexcharts")).default;
    app.vueApp.use(VueApexCharts);
  }
});
