<template>
  <div class="title-section" ref="titleSectionRef">
    <div class="title-section__container">
      <div class="title-section__container--left-column">
        <h1>CYCLE OF LIFE.</h1>

        <div id="button-container" ref="buttonContainerRef">
          <nuxt-link to="/shop">
            <button class="title-section__container--left-column__button">
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

      <div class="title-section__container--right-column">
        <p>Discover the joy of cycling with our premium range of bicycles.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
const titleSectionRef = ref<HTMLDivElement | null>(null);
const buttonContainerRef = ref<HTMLDivElement | null>(null);
const tl: any = inject("timeline");

onMounted(() => {
  if (titleSectionRef.value && buttonContainerRef.value) {
    gsap.set([titleSectionRef.value.children[0].children[0].children[0]], {
      opacity: 1.1,
      y: 100,
    });

    console.log(buttonContainerRef.value.children[0]);

    gsap.set(buttonContainerRef.value.children[0], {
      opacity: 0,
    });

    tl.to(
      [
        titleSectionRef.value.children[0].children[0].children[0],
        // buttonContainerRef.value.children[0],
        titleSectionRef.value.children[0].children[1].children,
      ],
      {
        opacity: 1,
        y: 0,
        scale: 1,
        // stagger: 0.2,
        duration: 1.2,
        delay: 1,
        ease: "power3.inOut",
      },
      "-=1"
    );

    gsap.to(buttonContainerRef.value.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      delay: 1.2,
      ease: "power3.inOut",
    });

    gsap.to(titleSectionRef.value.children[0].children[0].children[0], {
      scale: 0.8,
      duration: 1.2,
      delay: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: titleSectionRef.value.children[0].children[0].children,
        scrub: 1.5,

        start: "99% 100%",
        // end: "  top 70%",
      },
    });

    gsap.to(buttonContainerRef.value.children[0], {
      y: -100,
      duration: 1.2,
      delay: 2,

      ease: "power3.inOut",
      scrollTrigger: {
        trigger: buttonContainerRef.value.children[0],
        scrub: 1.5,

        start: "95% 100%",
        // end: "  top 70%",
      },
    });

    gsap.to(titleSectionRef.value.children[0].children[1].children, {
      y: -100,
      duration: 1.2,
      delay: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: titleSectionRef.value.children[0].children[1].children,
        scrub: 1.5,
        start: "80% 100%",
        // end: "  top 70%",
      },
    });
  }
});
</script>

<style scoped lang="scss">
.title-section {
  min-height: 100vh;
  height: 100vh;
  // position: absolute;
  width: 100%;
  padding: 1rem 0rem;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  background-image: url("https://res.cloudinary.com/dyap7epew/image/upload/v1722255246/cycly/titleBike.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__container {
    display: flex;
    // position: absolute;
    width: 100%;
    height: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 2rem 4rem;

    //small latptops

    @media (min-width: 900px) and (max-width: 1250px) {
      padding: 2rem;
      max-width: 120rem;
    }

    &--left-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;

      h1 {
        font-family: sans-bold;
        font-size: 5rem;
        max-width: 35rem;
        line-height: 5rem;
        color: #d9d9d9;
        opacity: 0;
        scale: 1;
      }

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
        opacity: 0;

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

    &--right-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
      height: max-content;
      overflow-y: hidden;
      align-self: flex-end;
      margin-bottom: 3rem;

      p {
        max-width: 30rem;
        font-size: 1.875rem;
        line-height: 1.875rem;
        scale: 1;
        opacity: 0;
      }
    }
  }
}

#button-container {
  max-height: max-content;
  overflow: hidden;
  width: max-content;
  padding-top: 1rem;
}

.title-section__container--left-column__button {
  border: 1px solid #000;
  overflow: hidden;
  color: #fff;
}

.title-section__container--left-column__button span {
  display: block;
  position: relative;
}

.title-section__container--left-column__button > span {
  overflow: hidden;
}

.title-section__container--left-column__button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.title-section__container--left-column__button:hover > span > span {
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

.title-section__container--left-column__button::before {
  content: "";
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.title-section__container--left-column__button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
</style>
