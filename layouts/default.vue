<template>
  <div class="defaultLayout" v-if="imagesHaveLoaded">
    <Navbar />
    <div class="defaultLayout__container">
      <Toast />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const timeline = gsap.timeline();
provide("timeline", timeline);

import { storeToRefs } from "pinia";
import usePreloadImagesStore from "~/stores/ImagesPreloader";
const imagesStore = usePreloadImagesStore();
const { imagesHaveLoaded } = storeToRefs(imagesStore);
</script>

<style scoped lang="scss">
.defaultLayout {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  //   border: 2px solid blue;
  font-family: "sans-regular";
}
</style>
