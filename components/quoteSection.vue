<template>
  <div class="quoteSection">
    <div class="quoteSection__container">
      <div class="quoteSection__container--quotes-container" ref="sectionRef">
        <nuxt-img src="quote.svg" alt="" />

        <div class="quoteSection__container--quotes-container__text-container">
          <p>
            A good service I wish I could buy all the bikes. I recommend them
            100%
          </p>
        </div>

        <div
          class="quoteSection__container--quotes-container__authorText-container"
        >
          <p>Olurotimi Israel</p>
          <p>CEO REBRAND</p>
        </div>
      </div>
    </div>

    <div class="quoteSection__image-container">
      <nuxt-img src="quoteBike.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
const sectionRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const tl = gsap.timeline();
  if (sectionRef.value) {
    gsap.fromTo(
      sectionRef.value.children[0],
      { y: 0, opacity: 0 },
      {
        opacity: 1,
        delay: 0.1,
        duration: 0.4,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        scrollTrigger: {
          trigger: sectionRef.value,
          scrub: true,
          start: "center 85%",
          end: "center 40%",
        },
      }
    );

    gsap.from(sectionRef.value.children[1].children, {
      opacity: 0,
      y: 100,
      // stagger: 0.5,
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sectionRef.value,
        scrub: true,
        start: "top 85%",
        end: "  top 40%",
      },
    });

    gsap.from(sectionRef.value.children[2].children, {
      opacity: 0,
      y: 100,
      // stagger: 0.5,
      duration: 0.5,
      delay: 0.2,

      ease: "power3.inOut",
      scrollTrigger: {
        trigger: sectionRef.value,
        scrub: true,
        start: "top 85%",
        end: "top 40%",
      },
    });
  }
});
</script>

<style scoped lang="scss">
.quoteSection {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  font-family: "sans-regular";
  height: 62vh;

  background-color: #ffffff;
  position: relative;
  background-color: #151515;
  color: #dddddd !important;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 4rem;
    height: 100%;
    display: flex;
    justify-content: center;

    &--quotes-container {
      font-family: "dm-mono";
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 2rem;
      opacity: 1;

      img {
        height: 4.5rem;
        width: 5rem;
      }

      &__text-container {
        max-height: max-content;
        overflow: hidden;

        p {
          font-size: 1.5rem;
          max-width: 40rem;
          line-height: 1.8rem;
          color: #dddddd;
        }
      }

      &__authorText-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: max-content;
        overflow: hidden;

        p {
          &:nth-child(1) {
            font-size: 1.4rem;
            line-height: 1.4rem;
            color: #ffffff;
          }
          &:nth-child(2) {
            font-size: 1.125rem;
            color: #bcbcbc;
          }
        }
      }
    }
  }

  &__image-container {
    height: 62vh;
    min-width: 30rem;
    max-height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
