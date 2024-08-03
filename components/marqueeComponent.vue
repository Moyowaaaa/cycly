<template>
  <div class="secondSection">
    <div class="secondSection__title-container">
      <h1>CYCLE <span>BEYOND LIMIT.</span></h1>
    </div>
    <div class="secondSection__container marquee__inner">
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
      <div
        class="secondSection__container--card"
        v-for="(showcaseImage, index) in showcaseImages"
        :key="index"
      >
        <nuxt-img :src="showcaseImage" alt="" />
      </div>
    </div>
    <div class="secondSection__button-container">
      <nuxt-link to="/shop">
        <button class="secondSection__button-container__button">
          <span style="display: flex; align-items: center; gap: 10px"
            ><span>Shop</span
            ><svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L4 0.113249L4 5.88675L9 3ZM-4.37114e-08 3.5L4.5 3.5L4.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  "showcaseImage1",
  "showcaseImage2",
  "showcaseImage3",
  "showcaseImage4",
  "showcaseImage5",
  "showcaseImage1",
  "showcaseImage2",
  "showcaseImage3",
  "showcaseImage4",
  "showcaseImage5",
  "showcaseImage1",
  "showcaseImage2",
  "showcaseImage3",
  "showcaseImage4",
  "showcaseImage5",
];

onMounted(() => {
  // if (process.client) {
  //   document.addEventListener("scroll", function () {
  //     const marqueeInner = document.querySelector(".marquee__inner");
  //     const scrollSpeed = window.scrollY / 1000 + 1; // Adjust speed factor as needed
  //     marqueeInner.style.animationDuration = `${25 / scrollSpeed}s`;
  //   });
  // }
  let lastScrollTop = 0;
  const marquee = gsap.to(".marquee__inner", {
    xPercent: -50,
    duration: 25,
    repeat: -1,
    ease: "linear",
    paused: true,
  });

  document.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const direction = scrollTop > lastScrollTop ? "down" : "up";

    if (direction === "down") {
      gsap.to(marquee, {
        timeScale: -2,
      });
    } else {
      gsap.to(marquee, {
        timeScale: 2,
      });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  marquee.play();
  marquee.repeat(-1);
});
</script>

<style scoped lang="scss">
.secondSection {
  width: 100%;
  height: 50rem;
  max-height: 50rem;
  min-height: 50rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0 6rem;
  position: relative;
  align-items: center;
  background-color: #ffffff;
  background-image: url("https://res.cloudinary.com/dyap7epew/image/upload/v1722255252/cycly/showcaseBackground.png");
  background-repeat: no-repeat;
  background-size: 25rem;
  background-position: top center;

  &__title-container {
    font-family: sans-bold;
    color: #101010;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;

    span {
      color: #9747ff;
      font-style: italic;
    }
  }

  &__button-container {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    button {
      padding: 1.125rem 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: 5px;
      width: max-content;
      background-color: #101010;
      color: white;
      border: none;
      outline: none;
      display: inline-block;
      position: relative;
      font-family: sans-medium;

      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  &__container {
    width: 200%; /* Make the container twice as wide to accommodate duplicated content */
    height: 40rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    will-change: transform;
    padding-top: 2.4rem;
    padding-bottom: 1rem;
  }

  &__container--card {
    height: 23rem;
    min-width: 18rem;
    max-width: 18rem;
    border-radius: 10px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
    }
  }
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.marquee__inner {
  display: flex;
  white-space: nowrap;
  will-change: transform;
}

.secondSection__button-container__button {
  border: 1px solid #000;
  overflow: hidden;
  color: #fff;
}

.secondSection__button-container__button span {
  display: block;
  position: relative;
}

.secondSection__button-container__button > span {
  overflow: hidden;
}

.secondSection__button-container__button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.secondSection__button-container__button:hover > span > span {
  animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

@keyframes MoveUpInitial {
  to {
    transform: translate3d(0, -105%, 0);
  }
}

@keyframes MoveUpEnd {
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.secondSection__button-container__button::before {
  content: "";
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.secondSection__button-container__button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
</style>
