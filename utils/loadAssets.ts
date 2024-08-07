import usePreloadImagesStore from "~/stores/ImagesPreloader";

export function loadAssets(): Promise<void[]> {
  const preloadImagesStore = usePreloadImagesStore();
  const prefixUrl =
    "https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/";

  const images: any[] = [
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
  ];

  preloadImagesStore.numberOfImagesToLoad = images.length;

  const promises: Promise<void>[] = [];

  images.forEach((imagePath) => {
    const promise = new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        preloadImagesStore.numberOfLoadedImages++;
        if (preloadImagesStore.numberOfLoadedImages === images.length) {
          console.log("images from: https://unsplash.com");
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
