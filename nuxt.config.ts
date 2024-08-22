// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Cycly",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/image"],
  css: ["@/styles/index.scss"],
  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/",
    },
  },
});
