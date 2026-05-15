export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Figma Homepage Assignment',
      meta: [
        {
          name: 'description',
          content: 'Nuxt 3 homepage implementation from a Figma design.',
        },
      ],
    },
  },
});
