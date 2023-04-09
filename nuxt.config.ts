// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  build: {
    transpile: ['trpc-nuxt'],
  },
})
