<template>
  <div class="secondSection">
    <div class="secondSection__title-container">
      <h1>CYCLE <span>BEYOND LIMIT.</span></h1>
    </div>

    <div class="scrolling-image">
      <div class="rail">
        <div
          class="secondSection__container--card"
          v-for="(showcaseImage, index) in showcaseImages"
          :key="index"
        >
          <nuxt-img
            loading="lazy"
            :src="showcaseImage"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div class="rail" style="margin-left: 0.5rem">
        <div
          class="secondSection__container--card"
          v-for="(showcaseImage, index) in showcaseImages"
          :key="index"
        >
          <nuxt-img
            loading="lazy"
            :src="showcaseImage"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
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
import Observer from "gsap/Observer";

gsap.registerPlugin(Observer);

const showcaseImages = [
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

function horizontalLoop(
  items: HTMLElement[],
  config: {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | number[];
    paddingRight?: number;
    reversed?: boolean;
  } = {}
): gsap.core.Timeline {
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () =>
      tl.totalTime(tl.rawTime() + tl.duration() * 100) as any,
  });

  const length = items.length;
  const startX = items[0]?.offsetLeft ?? 0;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  let curIndex = 0;
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap =
    (config as any).snap === false
      ? (v: number) => v
      : gsap.utils.snap(config.snap || 1);
  let totalWidth = 0;

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(
        (gsap as any).getProperty(el, "width", "px")
      ));
      xPercents[i] = snap(
        (parseFloat((gsap as any).getProperty(el, "x", "px")) / w) * 100 +
          (gsap as any).getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1]?.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1]?.offsetWidth *
      (gsap as any).getProperty(items[length - 1], "scaleX") +
    (config.paddingRight || 0);

  items.forEach((item, i) => {
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop =
      distanceToStart + widths[i] * (gsap as any).getProperty(item, "scaleX");

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  });

  function toIndex(index: number, vars: gsap.TweenVars = {}) {
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
  tl.times = times;

  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete!();
    tl.reverse();
  }

  return tl;
}

onMounted(() => {
  nextTick(() => {
    const scrollingText = gsap.utils.toArray<HTMLElement>(".rail div");

    if (scrollingText.length > 0) {
      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
      });

      Observer.create({
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) {
            factor *= -1;
          }

          gsap
            .timeline({ defaults: { ease: "none" } })
            .to(tl, { timeScale: factor * 2.5, duration: 0.2 })
            .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
        },
      });
    } else {
      console.error("No elements found for selector .rail h4");
    }
  });
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

    @media screen and (max-width: 500px) {
      font-size: 2rem;
      line-height: 2rem;
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
}

.scrolling-image {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding-left: 1rem;
  .rail {
    display: flex;
    padding-left: 1rem;
    gap: 1rem;
  }
}

.secondSection__container--card {
  height: 23rem;
  min-width: 18rem;
  max-width: 18rem;
  border-radius: 10px;
  margin: 0 1rem;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    margin: 0 1rem;

    object-position: center;
  }
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
