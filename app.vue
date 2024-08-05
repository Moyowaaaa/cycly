<template>
  <div>
    <!-- Show Preloader if images are not loaded -->
    <Preloader v-if="!imagesHaveLoaded" />

    <!-- Conditionally render the main content -->
    <NuxtLayout v-if="imagesHaveLoaded">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { Interactions } from "@/interactions";
import usePreloadImagesStore from "~/stores/ImagesPreloader";

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
