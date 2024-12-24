import usePreloadImagesStore from "~/stores/ImagesPreloader";

export function loadAssets(): Promise<void[] | any> {
  const preloadImagesStore = usePreloadImagesStore();

  const images = [
    `/images/titleBike.png`,
    `/images/cityBike.png`,
    `/images/mountainBike.png`,
    `/images/roadBike.png`,
    `/images/electricBike.png`,
    `/images/showcaseBackground.png`,
    `/images/joinUsBackground.png`,
    `/images/marqueeImage.png`,
    `/images/quoteBike.png`,
    `/images/eBike1.jpg`,
    `/images/mountainBike1.jpg`,
    `/images/mountainBike3.jpg`,
    `/images/roadBike1.jpg`,
    `/images/roadBike2.jpg`,
    `/images/mountainBike5.png`,
    `/images/cityBike3.jpg`,
    `/images/cityBike1.jpg`,
    `/images/cityBike2.jpg`,
    `/images/cityBike4.png`,
    `/images/roadBike3.jpg`,
    `/images/eBike3.png`,
    `/images/cityBike5.png`,
    `/images/eBike2.jpg`,
    `/images/mountainBike4.jpg`,
    `/images/roadBike4.jpg`,
    `/images/eBike4.jpg`,
    `/images/bikesImage.jpg`,
    `/images/roadBikesImage2.jpg`,
    `/images/cityBikesImage.jpg`,
    `/images/electricBikesImage.jpg`,
    `/images/mountainBikesImage.jpg`,
    `/images/showcaseImage1.png`,
    `/images/showcaseImage2.png`,
    `/images/showcaseImage3.png`,
    `/images/showcaseImage4.png`,
    `/images/showcaseImage5.png`,
    `/images/showcaseImage6.jpg`,
    `/images/showcaseImage7.jpg`,
    `/images/showcaseImage9.jpg`,
    `/images/showcaseImage10.jpg`,
    `/images/showcaseImageX.jpg`,
  ];

  preloadImagesStore.numberOfImagesToLoad = images.length;
  const imagePromises = images.map((imagePath) => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        preloadImagesStore.numberOfLoadedImages++;
        resolve();
      };
      image.onerror = () => reject(`Failed to load image: ${imagePath}`);
      image.src = imagePath;
    });
  });

  return (Promise as any).all([...imagePromises]).then(() => {
    preloadImagesStore.imagesHaveLoaded = true;
  });
}

//   const MAX_RETRIES = 3;
//   const RETRY_DELAY = 2000;

//   const promises = images.map((imagePath) =>
//     loadImageWithRetry(imagePath, MAX_RETRIES, RETRY_DELAY, preloadImagesStore)
//   );

//   return Promise.all(promises).then(() => {
//     console.log("images from https://unsplash.com");
//   });
// }

// function loadImageWithRetry(
//   src: string,
//   retries: number,
//   delay: number,
//   preloadImagesStore: ReturnType<typeof usePreloadImagesStore>
// ): Promise<void> {
//   return new Promise((resolve) => {
//     let attempts = 0;
//     let loaded = false;

//     const load = () => {
//       const image = new Image();
//       image.src = src;

//       image.onload = () => {
//         if (!loaded) {
//           // Check if the image has already been loaded
//           preloadImagesStore.numberOfLoadedImages++;
//           loaded = true; // Ensure only a single increment per image
//         }
//         resolve();
//       };

//       image.onerror = () => {
//         attempts++;
//         if (attempts < retries) {
//           console.warn(`Retrying ${src} (${attempts}/${retries})...`);
//           setTimeout(load, delay);
//         } else {
//           console.error(`Failed to load ${src} after ${retries} attempts.`);
//           if (!loaded) {
//             // Only increment if it hasn't been loaded
//             preloadImagesStore.numberOfLoadedImages++;
//             loaded = true;
//           }
//           resolve();
//         }
//       };
//     };

//     load();
//   });
// }
