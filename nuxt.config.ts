// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Israel Adeniyi — UI/UX designer",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { hid: "theme-color", name: "theme-color", content: "#070606" },
        {
          hid: "description",
          name: "description",
          content: "UI/UX designer",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "UI/UX designer",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "UI/UX designer",
        },
        { hid: "og:title", name: "og:title", content: "Israel Adeniyi" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Israel Adeniyi",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Israel Adeniyi",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "is-preview.vercel.app",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:image",
          name: "og:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
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
          href: "https://res.cloudinary.com/dyap7epew/image/upload/v1717025623/projects/r0jzcy86m6hsldyjppmj.png",
        },
      ],
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["@/styles/index.scss"],
});
