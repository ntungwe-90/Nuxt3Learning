// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'ICYS E-commerce',
      meta:[
        { name: 'description', content:'everything about nuxtjs 3 and vue3'}
      ],
      link:[
        { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
