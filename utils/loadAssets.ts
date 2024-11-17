import usePreloadImagesStore from "~/stores/ImagesPreloader";

export function loadAssets(): Promise<void[] | any> {
  const preloadImagesStore = usePreloadImagesStore();
  const prefixUrl =
    "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/";

  const images = [
    `${prefixUrl}titleBike.png`,
    `${prefixUrl}cityBike`,
    `${prefixUrl}mountainBike`,
    `${prefixUrl}roadBike`,
    `${prefixUrl}electricBike`,
    `${prefixUrl}showcaseBackground.png`,
    `${prefixUrl}joinUsBackground.png`,
    `${prefixUrl}marqueeImage.png`,
    `${prefixUrl}quoteBike.png`,
    `${prefixUrl}eBike1`,
    `${prefixUrl}mountainBike1`,
    `${prefixUrl}mountainBike3`,
    `${prefixUrl}roadBike1`,
    `${prefixUrl}roadBike2`,
    `${prefixUrl}mountainBike5`,
    `${prefixUrl}cityBike3`,
    `${prefixUrl}cityBike1`,
    `${prefixUrl}cityBike2`,
    `${prefixUrl}cityBike4`,
    `${prefixUrl}roadBike3`,
    `${prefixUrl}eBike3`,
    `${prefixUrl}cityBike5`,
    `${prefixUrl}eBike2`,
    `${prefixUrl}mountainBike4`,
    `${prefixUrl}roadBike4`,
    `${prefixUrl}eBike4`,
    `${prefixUrl}bikesImage`,
    `${prefixUrl}roadBikesImage2`,
    `${prefixUrl}cityBikesImage`,
    `${prefixUrl}electricBikesImage`,
    `${prefixUrl}mountainBikesImage`,
    `${prefixUrl}showcaseImage1`,
    `${prefixUrl}showcaseImage2`,
    `${prefixUrl}showcaseImage3`,
    `${prefixUrl}showcaseImage4`,
    `${prefixUrl}showcaseImage5`,
    `${prefixUrl}showcaseImage6`,
    `${prefixUrl}showcaseImage7`,
    `${prefixUrl}showcaseImage9`,
    `${prefixUrl}showcaseImage10`,
    `${prefixUrl}showcaseImageX`,
  ];

  preloadImagesStore.numberOfImagesToLoad = images.length;

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  const promises = images.map((imagePath) =>
    loadImageWithRetry(imagePath, MAX_RETRIES, RETRY_DELAY, preloadImagesStore)
  );

  return Promise.all(promises).then(() => {
    console.log("images from https://unsplash.com");
  });
}

function loadImageWithRetry(
  src: string,
  retries: number,
  delay: number,
  preloadImagesStore: ReturnType<typeof usePreloadImagesStore>
): Promise<void> {
  return new Promise((resolve) => {
    let attempts = 0;
    let loaded = false;

    const load = () => {
      const image = new Image();
      image.src = src;

      image.onload = () => {
        if (!loaded) {
          // Check if the image has already been loaded
          preloadImagesStore.numberOfLoadedImages++;
          loaded = true; // Ensure only a single increment per image
        }
        resolve();
      };

      image.onerror = () => {
        attempts++;
        if (attempts < retries) {
          console.warn(`Retrying ${src} (${attempts}/${retries})...`);
          setTimeout(load, delay);
        } else {
          console.error(`Failed to load ${src} after ${retries} attempts.`);
          if (!loaded) {
            // Only increment if it hasn't been loaded
            preloadImagesStore.numberOfLoadedImages++;
            loaded = true;
          }
          resolve();
        }
      };
    };

    load();
  });
}
