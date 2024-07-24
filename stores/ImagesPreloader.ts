import { acceptHMRUpdate, defineStore } from "pinia";

const usePreloadImagesStore = defineStore("preload-images", () => {
  const numberOfImagesToLoad = ref<number>(0);
  const numberOfLoadedImages = ref<number>(0);
  const imagesHaveLoaded = ref<boolean>(false);

  const percentageOfLoadedImages = computed(() => {
    return (numberOfLoadedImages.value / numberOfImagesToLoad.value) * 100;
  });

  return {
    numberOfImagesToLoad,
    numberOfLoadedImages,
    imagesHaveLoaded,
    percentageOfLoadedImages,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(usePreloadImagesStore, import.meta.hot)
  );
}

export default usePreloadImagesStore;
