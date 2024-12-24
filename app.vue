<template>
  <div>
    <Preloader />

    <div :class="{ hidden: !imagesHaveLoaded }">
      <NuxtLayout v-if="loadDone">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { Interactions } from "@/interactions";
import usePreloadImagesStore from "~/stores/ImagesPreloader";

const imagesStore = usePreloadImagesStore();
const { imagesHaveLoaded } = storeToRefs(imagesStore);
const loadDone = ref<boolean>(false);

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});

watch(imagesHaveLoaded, (newValue) => {
  if (newValue === true) {
    setTimeout(() => {
      loadDone.value = true;
      new Interactions();
    }, 1000);
  }
});

// onMounted(() => {
//   // Register the service worker
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("/sw.js").catch((error) => {
//       return error;
//     });
//   }

//   if (!imagesHaveLoaded.value) {
//     loadAssets();
//   }
// });
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
</style>
