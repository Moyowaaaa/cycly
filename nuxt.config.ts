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
        {
          hid: "description",
          name: "description",
          content:
            "Cycly - Discover the joy of cycling with our premium range of bicycles.",
        },
        { hid: "og:title", property: "og:title", content: "Cycly" },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Discover the joy of cycling with our premium range of bicycles",
        },
        { hid: "og:site_name", property: "og:site_name", content: "Cycly" },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/og-image.png", // Local image path
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://cycly.vercel.app",
        },

        // Twitter meta tags
        { hid: "twitter:title", name: "twitter:title", content: "Cycly" },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Discover the joy of cycling with our premium range of bicycles",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/images/twitter-image.png", // Local image path
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://cycly.vercel.app",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon.png", // Local image path
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/image"],
  css: ["@/styles/index.scss"],

  hooks: {
    "build:before": () => {
      console.log("Service worker setup...");
    },
  },

  nitro: {
    devProxy: {
      "/sw.js": { target: "/sw.js", ws: false },
    },
  },

  ssr: true,
});
