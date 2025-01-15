export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '~/scss/main.scss'
  ],

  modules: ['@pinia/nuxt'],
})