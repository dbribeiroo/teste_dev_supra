// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
    
  ],

  typescript: {
    strict: true,
    typeCheck: true
  },

  app: {
    head: {
      title: 'QR Code Studio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Generate and customize QR codes with ease' }
      ]
    }
  },

  nitro: {
    preset: 'node-server'
  }
})