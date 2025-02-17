<template>
  <div>
    <Preloader />

    <div v-if="imagesHaveLoaded">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Interactions } from "@/interactions";
import usePreloadImagesStore from "~/stores/ImagesPreloader";

const imagesStore = usePreloadImagesStore();
const { imagesHaveLoaded } = storeToRefs(imagesStore);

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    loadAssets();
  }
});

watch(imagesHaveLoaded, (newValue) => {
  if (newValue === true) {
    setTimeout(() => {
      new Interactions();
    }, 1000);
  }
});
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}

.overlay {
  background-color: #de3106;
  height: 100vh;
  width: 100%;
}
</style>
