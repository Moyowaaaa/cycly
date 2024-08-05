<template>
  <div>
    <!-- Show Preloader if images are not loaded -->
    <Preloader />

    <!-- Conditionally render the main content -->
    <NuxtLayout v-if="imagesHaveLoaded">
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

// Watch for changes in loading state
watchEffect(() => {
  console.log(percentageOfLoadedImages.value, imagesHaveLoaded.value);
});
</script>

<style scoped lang="scss"></style>
