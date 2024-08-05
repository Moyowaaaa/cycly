<template>
  <div class="preloader">
    <div class="preloader__container">
      <div class="preloader__container--top-container">
        <h1 class="preloader__container--top-container__loading-text">
          Loading assets
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePreloadImagesStore from "~/stores/ImagesPreloader";
const imagesStore = usePreloadImagesStore();
import gsap from "gsap";

const { percentageOfLoadedImages, imagesHaveLoaded } = storeToRefs(imagesStore);

watchEffect(() => {
  if (percentageOfLoadedImages.value > 0) {
    gsap.to(".preloader__container--top-container__loading-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
    });
  }
});
</script>

<style scoped lang="scss">
.preloader {
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: black;
  z-index: 99999999;

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 112rem;
    margin: auto;
    width: 100%;
    padding: 2rem 4rem;

    &--top-container {
      display: flex;
      height: max-content;
      align-items: center;
      justify-content: flex-end;
      line-height: 5rem;

      h1 {
        font-family: sans-medium;
        opacity: 0;
      }
    }
  }
}
</style>
