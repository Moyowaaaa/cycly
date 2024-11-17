<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container--content-container">
        <div
          class="footer__container--content-container__logo-container"
          @click="onGoHome"
        >
          <nuxt-img
            loading="lazy"
            src="whiteLogo.png"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>

        <div class="footer__container--content-container__text-container">
          <p>Join the e-bike revolution with Cycle.</p>
        </div>

        <div class="footer__container--content-container__links-container">
          <nuxt-link to="/shop">
            <button
              class="footer__container--content-container__links-container--button"
            >
              <span style="display: flex; align-items: center; gap: 10px"
                ><span>Shop</span>
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3L4 0.113249L4 5.88675L9 3ZM-4.37114e-08 3.5L4.5 3.5L4.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
                    fill="#101010"
                  />
                </svg>
              </span>
            </button>
          </nuxt-link>
        </div>

        <div class="footer__container--content-container__heroText">
          <h1 class="footer__container--content-container__heroText--text">
            CYCLE OF LIFE.
          </h1>
        </div>
      </div>
      <div class="footer__container--image-container">
        <div class="footer__container--image-container__image-content">
          <nuxt-img
            loading="lazy"
            src="cityBike.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div class="footer__container--bottom-section">
          <div class="credits">
            <a href="https://behance.net/israeladeniyi8" target="_blank"
              ><p class="link">Israel</p></a
            >
            x
            <a href="https://github.com/moyowaaaa" target="_blank">
              <p class="link">Moyowa</p>
            </a>
          </div>
          <div class="footer__container--bottom-section__copy-container">
            &copy;&nbsp;Cycle&nbsp; <span>{{ year }}</span>
          </div>

          <div>Designooasis</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { intersectionObserver } from "../animations/useIntersectionObserver";
import gsap from "gsap";
import Splitting from "splitting";

let year = ref<number>();
const router = useRouter();
const isImageVisible = ref(false);

let cleanup: (() => void) | null = null;

onMounted(() => {
  if (process.client) {
    const largeTextContainer = document.querySelector(
      ".footer__container--content-container__heroText"
    );
    const largeText = document.querySelector(
      ".footer__container--content-container__heroText--text"
    );
    const image = document.querySelector(
      ".footer__container--image-container__image-content img"
    ) as Element;
    const footerTexts = document.querySelector(
      ".footer__container--bottom-section"
    ) as Element;

    const result = Splitting({ target: largeText, by: "chars" });

    const date = new Date();
    year.value = date.getFullYear();

    if (image) {
      cleanup = intersectionObserver(
        image,
        { threshold: 0.02 },
        (isIntersecting) => {
          isImageVisible.value = isIntersecting;
          if (isIntersecting) {
            gsap.fromTo(
              image,
              { yPercent: 10, opacity: 0 },
              {
                duration: 1.2,
                yPercent: 0,
                opacity: 1,
                delay: 0.2,
                ease: "power4.inOut",
              }
            );
          } else {
            gsap.to(image, { opacity: 0, duration: 0.8 });
          }
        }
      );
    }

    if (footerTexts) {
      cleanup = intersectionObserver(
        footerTexts,
        { threshold: 0.02 },
        (isIntersecting) => {
          if (isIntersecting) {
            gsap.fromTo(
              footerTexts.children,
              { yPercent: 10, opacity: 0 },
              {
                duration: 1.2,
                stagger: 0.2,
                yPercent: 0,
                opacity: 1,
                delay: 0.2,
                ease: "power4.inOut",
              }
            );
          } else {
            gsap.to(image, { opacity: 0, duration: 0.8 });
          }
        }
      );
    }

    if (largeTextContainer) {
      cleanup = intersectionObserver(
        largeTextContainer,
        { threshold: 0.2 },
        (isIntersecting) => {
          if (isIntersecting) {
            result[0].chars.forEach((a: gsap.TweenTarget, i: number) => {
              gsap.to(a, {
                opacity: 1, // Animate to full opacity
                duration: 0.2,
                ease: "power3.inOut",
                delay: i * gsap.utils.random(0.1, 0.2),
              });
            });
          } else {
            result[0].chars.forEach((a: gsap.TweenTarget) => {
              gsap.to(a, {
                opacity: 0.2,
                duration: 0.1,
                ease: "power3.inOut",
              });
            });
          }
        }
      );
    }
  }
});

onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});

const onGoHome = () => {
  router.push("/");
  document?.querySelector(".homePage")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  min-height: 100vh;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
  width: 100%;
  background: linear-gradient(0deg, #151515 0%, #202020 50%, #151515 100%);
  z-index: 109;
  color: #fdfdfd;

  &__container {
    position: fixed;
    min-height: 100vh;
    height: max-content;
    bottom: 0;
    width: 100%;

    &--content-container {
      max-width: 112rem;
      margin: 0 auto;
      padding: 2rem 4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &__logo-container {
        height: 2rem;
        width: 5rem;
        z-index: 100;
        cursor: pointer;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      &__text-container {
        color: #fdfdfd;
        font-weight: 400;
        font-size: 0.875rem;
        max-width: 12rem;
      }

      &__links-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;
        border-bottom: 0.5px solid #ffffff;

        &--button {
          padding: 1.125rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 5px;
          width: max-content;
          background-color: #f0f0f0;
          color: #101010;
          border: none;
          outline: none;
          display: inline-block;
          position: relative;
          font-family: sans-medium;
          z-index: 200;
          cursor: pointer;

          &::before,
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }

        &--links {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-size: 0.875rem;
        }
      }

      &__heroText {
        margin-top: 4rem;
        font-family: sans-bold;
        font-size: 9rem;
        text-align: center;
        color: #d9d9d9;
      }

      @media screen and (max-width: 500px) {
        &__heroText {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }

        &__text-container {
          max-width: 100%;
        }
      }

      @media screen and (min-width: 767px) and (max-width: 991px) {
        &__heroText {
          font-size: 5rem;
          line-height: 5rem;
        }
      }
    }
    &--image-container {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      &__image-content {
        width: 45rem;
        height: 30rem;
        max-height: 30rem;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
      //   margin-top: 4rem;

      //   img {
      //     height: 100%;
      //     width: 100%;
      //     object-fit: contain;
      //   }
    }

    &--bottom-section {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: 112rem;
      margin: 0 auto;
      padding: 0.8rem 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.875rem;

      &__copy-container {
        align-self: center;
      }

      @media screen and (max-width: 500px) {
        padding: 1rem;

        &__copy-container {
          align-self: flex-end;
        }
      }
    }
  }
}
.footer__container--content-container__links-container--button {
  overflow: hidden;
  color: #fff;
}

.footer__container--content-container__links-container--button span {
  display: block;
  position: relative;
}

.footer__container--content-container__links-container--button > span {
  overflow: hidden;
}

.footer__container--content-container__links-container--button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.footer__container--content-container__links-container--button:hover
  > span
  > span {
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

.footer__container--content-container__links-container--button::before {
  content: "";
  background: #f0f0f0;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.footer__container--content-container__links-container--button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}

//small laptops
@media (min-width: 900px) and (max-width: 1250px) {
  .footer {
    &__container {
      &--content-container {
        max-width: 120rem;
        margin: 0 auto;
        padding: 2rem;
      }
    }
  }
}

.credits {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

@media screen and (max-width: 500px) {
  .footer {
    min-height: 100vh;

    &__container {
      &--content-container {
        padding: 1rem;
      }
    }
  }
}
</style>
