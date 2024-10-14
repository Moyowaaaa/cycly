<template>
  <div>
    <Preloader />

    <div :class="{ hidden: !imagesHaveLoaded }">
      <NuxtLayout v-if="imagesHaveLoaded">
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

onMounted(() => {
  new Interactions();
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});

onMounted(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        return registration.scope;
      },
      function (err) {
        return err;
      }
    );
  }
});
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
</style>
