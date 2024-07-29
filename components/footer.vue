<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container--content-container">
        <div
          class="footer__container--content-container__logo-container"
          @click="onGoHome"
        >
          <nuxt-img src="whiteLogo.png" alt="logo" />
        </div>

        <div class="footer__container--content-container__text-container">
          <p>Join the e-bike revolution with Cycle.</p>
        </div>

        <div class="footer__container--content-container__links-container">
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

          <div
            class="footer__container--content-container__links-container--links"
          >
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>

        <div class="footer__container--content-container__heroText">
          <h1 class="flicker">CYCLE OF LIFE.</h1>
        </div>
      </div>
      <div class="footer__container--image-container">
        <div class="footer__container--image-container__image-content">
          <nuxt-img src="cityBike.png" alt="" />
        </div>
        <div class="footer__container--bottom-section">
          <p>Israel x Moyowa</p>
          <div class="footer__container--bottom-section__copy-container">
            &copy;&nbsp;Cycle&nbsp; <span>{{ year }}</span>
          </div>

          <div style="visibility: hidden">ooo00000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

let year = ref<any>();
const router = useRouter();

onMounted(() => {
  const date = new Date();
  year.value = date.getFullYear();
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

  &__container {
    position: fixed;
    height: 100vh;

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
        animation: reveal 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
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
</style>
