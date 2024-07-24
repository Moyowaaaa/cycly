import usePreloadImagesStore from "~/stores/ImagesPreloader";

export function loadAssets(): Promise<void[]> {
  const preloadImagesStore = usePreloadImagesStore();

  const images: any[] = [];

  preloadImagesStore.numberOfImagesToLoad = images.length;

  const promises: Promise<void>[] = [];

  images.forEach((imagePath) => {
    const promise = new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        preloadImagesStore.numberOfLoadedImages++;
        if (preloadImagesStore.numberOfLoadedImages === images.length) {
          preloadImagesStore.imagesHaveLoaded = true;
        }
        resolve();
      };
      image.onerror = () => {
        reject(`Failed to load image: ${imagePath}`);
      };
      image.src = imagePath;
    });
    promises.push(promise);
  });

  return Promise.all(promises);
}
