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
  if (newValue) {
    setTimeout(() => {
      loadDone.value = true;
      new Interactions();
    }, 1000);
  }
});
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
</style>
