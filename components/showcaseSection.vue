<template>
  <div>
    <div class="topSection">
      <h1 class="text">EXPLORE NATURE</h1>
      <h1 class="text2">PUSH YOUR LIMITS</h1>
      <h1 class="text3">EXPERIENCE THE THRILL</h1>
      <h1 class="text4">OF THE GREAT OUTDOORS</h1>

      <div class="topSection__image-container" id="image-container">
        <nuxt-img
          loading="lazy"
          src="marqueeImage.png"
          alt=""
          id="image-container-image"
          width="100%"
          height="100%"
        />
      </div>
    </div>

    <MarqueeComponent />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

onMounted(() => {
  mm.add("(min-width: 800px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".topSection",
        start: "top 85%",
        end: "top 20%",
        // pin: [".testSection"],
        // markers: true,
        scrub: 3,
        toggleActions: "none pause none none",
      },
    });
    tl.fromTo(
      ".text",
      {
        xPercent: 100,
        ease: "power3.inOut",
        opacity: 0,
      },
      {
        xPercent: 5,
        duration: 10,
        ease: "power3.inOut",
        opacity: 1,
      }
    )
      .fromTo(
        ".text2",
        {
          xPercent: -100,
          ease: "power3.inOut",
          opacity: 0,
        },
        {
          xPercent: 40,
          duration: 10,
          ease: "power3.inOut",
          opacity: 1,
        },
        "-=10"
      )
      .fromTo(
        ".text3",
        {
          xPercent: 100,
          ease: "power3.inOut",
          opacity: 0,
        },
        {
          xPercent: 8,
          duration: 10,
          ease: "power3.inOut",
          textAlign: "center",
          opacity: 1,
        },
        "-=10"
      )
      .fromTo(
        ".text4",
        {
          xPercent: -100,
          ease: "power3.inOut",
          opacity: 0,
        },
        {
          xPercent: 0,
          duration: 10,
          ease: "power3.inOut",
          opacity: 1,
        },
        "-=10"
      )
      .from("#image-container-image", {
        yPercent: 100,
        duration: 5,
        opacity: 1,
        ease: "power3.inOut",
        delay: 2,
      });
  });
});
</script>

<style scoped lang="scss">
.topSection {
  width: 100%;
  height: max-content;
  max-height: max-content;
  min-height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -2rem;
  padding: 4rem 0 12rem;
  position: relative;
  background: linear-gradient(0deg, #151515 0%, #202020 50%, #151515 100%);

  @media screen and (max-width: 500px) {
    padding: 2rem 0 2rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1920px) {
    padding: 4rem 0 15rem;

    bottom: -2rem;
  }

  h1 {
    width: max-content;
    font-size: 8rem;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
      line-height: 2rem;
      text-align: center;
      width: 100%;
      font-weight: bold;
    }

    @media screen and (min-width: 1020px) {
      font-size: calc(100vw / 200 * 16);
      line-height: calc(100vw / 220 * 16);
    }

    line-height: 7rem;
  }

  &__image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;

    img {
      width: 70rem;
      max-width: 70rem;

      height: 40rem;
      position: absolute;
      bottom: 0;

      @media screen and (max-width: 500px) {
        display: none;
      }
      @media screen and (min-width: 1020px) and (max-width: 1920px) {
        height: 35rem;
        width: 50rem;
        max-width: 50rem;
        bottom: -2rem;
      }

      object-fit: cover;
    }
  }
}
</style>
