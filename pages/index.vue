<template>
  <div class="homePage">
    <TitleSection />
    <OurCollectionSection />
    <ShowcaseSection />
    <QuoteSection />
    <JoinUsSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Cycly",
  meta: [
    { hid: "description", name: "description", content: "Cycly" },
    {
      hid: "og:description",
      name: "og:description",
      content: "Cycly Bike Store",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Cycly",
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
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
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
      href: "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
    },
  ],
});
</script>

<style scoped lang="scss">
.homePage {
  position: relative;
}
</style>
