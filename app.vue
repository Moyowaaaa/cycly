<template>
  <div>
    <Preloader />

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

onMounted(() => {
  new Interactions();
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});

watchEffect(() => {
  console.log(
    Math.round(percentageOfLoadedImages.value),
    imagesHaveLoaded.value
  );
});
</script>

<style scoped lang="scss"></style>
