// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Cycly",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { hid: "theme-color", name: "theme-color", content: "#070606" },
        { hid: "description", name: "description", content: "Cycly" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Cycly Bike Store",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Cycly Bike Store",
        },
        { hid: "og:title", name: "og:title", content: "Cycly" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Cycly",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Cycly",
        },
        // { hid: "og:url", name: "og:url", content: "is-preview.vercel.app" },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:image",
          name: "og:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/titleBike.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/titleBike.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/titleBike.png",
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
