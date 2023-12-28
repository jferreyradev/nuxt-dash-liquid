// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {    
    /* options */
    options: {
      ripple: true,
    },
    usePrimeVue: true,
    components: {
      include: "*",
      exclude: ["Galleria", "Carousel"],
    },
  },
  css: ["primevue/resources/themes/md-dark-indigo/theme.css"],
});
