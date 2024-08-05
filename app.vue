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
import { onMounted, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { Interactions } from "@/interactions";
import usePreloadImagesStore from "~/stores/ImagesPreloader";

// Initialize store
const imagesStore = usePreloadImagesStore();
const { percentageOfLoadedImages, imagesHaveLoaded } = storeToRefs(imagesStore);

// Handle image loading on component mount
onMounted(() => {
  new Interactions();
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});
</script>

<style scoped lang="scss"></style>
