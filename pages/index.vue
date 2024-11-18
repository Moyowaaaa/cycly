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
      content: "Discover the joy of cycling with our premium range of bicycles",
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
