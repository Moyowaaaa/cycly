<template>
  <div>
    <!-- Show Preloader if images are not loaded -->
    <Preloader v-if="!imagesHaveLoaded" />

    <!-- Conditionally render the main content -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { Interactions } from "@/interactions";
import usePreloadImagesStore from "~/stores/ImagesPreloader";

import gsap from "gsap";

const timeline = gsap.timeline();
provide("timeline", timeline);

// Initialize store
const imagesStore = usePreloadImagesStore();
const { imagesHaveLoaded } = storeToRefs(imagesStore);

onMounted(() => {
  new Interactions();
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});
</script>

<style scoped lang="scss"></style>
