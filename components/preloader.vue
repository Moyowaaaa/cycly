<template>
  <div class="preloader">
    <div class="preloader__container">
      <div class="preloader__container--counter-container">
        <p>Loading Assets</p>
      </div>
      <div class="preloader__container--top-container">
        <h1 class="preloader__container--top-container__loading-text">
          {{ currentAction }}
        </h1>
      </div>

      <div
        class="preloader__container--count"
        v-if="Number(percentageOfLoadedImages < 100)"
      >
        {{ percentageOfLoadedImages.toFixed() }}

        <small>`</small>
      </div>

      <div
        class="preloader__container--count"
        v-if="Number(percentageOfLoadedImages >= 100)"
      >
        100

        <small>`</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePreloadImagesStore from "~/stores/ImagesPreloader";
import gsap from "gsap";

const imagesStore = usePreloadImagesStore();
const { percentageOfLoadedImages, imagesHaveLoaded } = storeToRefs(imagesStore);

const actions = [
  "Calibrating wheel alignment...",
  "Tuning gear shifts...",
  "Lubricating chain...",
  "Adjusting brake tension...",
  "Inflating tires...",
  "Checking tire pressure...",
  "Inspecting frame integrity...",
  "Balancing wheels...",
  "Greasing bearings...",
  "Aligning handlebars...",
  "Tightening bolts...",
  "Adjusting saddle height...",
  "Checking suspension system...",
  "Testing brake pads...",
  "Cleaning drivetrain...",
  "Inspecting cables...",
  "Replacing worn-out parts...",
  "Securing pedals...",
  "Calibrating speedometer...",
  "Optimizing aerodynamics...",
  "Polishing frame...",
  "Aligning derailleur...",
  "Upgrading components...",
  "Inspecting spokes...",
  "Calibrating brake sensitivity...",
  "Tightening spoke tension...",
  "Balancing front and rear wheels...",
  "Setting gear indexing...",
  "Adjusting seat height...",
  "Aligning handlebars...",
  "Pumping up tires...",
  "Ensuring chain alignment...",
  "Inspecting brake pads...",
  "Setting suspension sag...",
  "Aligning derailleur hanger...",
  "Calibrating gear shifters...",
  "Tuning wheel hubs...",
  "Adjusting pedal bearings...",
  "Securing bottle cage...",
  "Aligning saddle...",
  "Checking headset bearings...",
  "Adjusting brake calipers...",
  "Checking wheel trueness...",
  "Cleaning frame and components...",
  "Inspecting drivetrain...",
  "Balancing crankset...",
  "Aligning rear derailleur...",
  "Inspecting tire tread...",
  "Tuning front fork...",
  "Adjusting seat post...",
  "Testing brake levers...",
];

const currentAction = ref(actions[0]);

const getRandomAction = () => {
  const randomIndex = Math.floor(Math.random() * actions.length);
  return actions[randomIndex];
};

const startActionLoop = () => {
  gsap
    .timeline({ repeat: -1 })
    .to(".preloader__container--top-container__loading-text", {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        currentAction.value = getRandomAction();
      },
    })
    .to(".preloader__container--top-container__loading-text", {
      duration: 1,
      opacity: 1,
    })
    .to(".preloader__container--top-container__loading-text", {
      duration: 2,
      opacity: 1,
    });

  gsap.to([".preloader__container--counter-container p"], {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 1,
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
  });
};

onMounted(() => {
  if (!imagesHaveLoaded.value) {
    startActionLoop();
  }
});

const preloaderTransitionOut = () => {
  const tl = gsap.timeline();
  tl.to([".preloader__container--counter-container p"], {
    clipPath: "polygon(0 10%, 10% 10%, 100% 0, 0 0)",
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "power3.inOut",
  });

  tl.to(
    ".preloader__container--count",
    {
      y: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "-=.8"
  );

  tl.to(".preloader", {
    yPercent: -100,
    duration: 1.1,
    ease: "power4.inOut",
    onComplete: () => {
      imagesStore.imagesHaveLoaded = true;
    },
  });
};

watchEffect(() => {
  if (percentageOfLoadedImages.value === 100) {
    preloaderTransitionOut();
  }
});
</script>

<style scoped lang="scss">
.preloader {
  height: 100vh;
  width: 100%;
  position: fixed;
  background: linear-gradient(0deg, #151515 0%, #202020 50%, #151515 100%);
  z-index: 99999999;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    flex-direction: column;
    max-width: 112rem;
    margin: auto;
    width: 100%;
    padding: 2rem 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
      padding: 1rem;
    }

    &--counter-container {
      width: max-content;
      position: absolute;
      right: 2rem;
      top: 2rem;
      font-family: sans-medium;
      display: flex;
      gap: 0.5rem;
      align-items: center;

      p {
        opacity: 0;
      }
    }

    &--top-container {
      display: flex;
      height: max-content;
      align-items: center;
      justify-content: center;
      line-height: 5rem;

      @media screen and (max-width: 500px) {
        line-height: 2rem;
      }

      h1 {
        font-family: sans-medium;
        opacity: 0;
        color: white;
        font-size: 2rem;

        @media screen and (max-width: 500px) {
          font-size: 1.5rem;
        }
      }
    }

    &--count {
      position: absolute;
      bottom: 4rem;
      right: 10px;
      font-size: 8rem;
      font-family: sans-medium;

      @media screen and (max-width: 500px) {
        display: none;
      }

      small {
        font-size: 4rem;
        font-family: sans-light;
      }
    }
  }
}
</style>
