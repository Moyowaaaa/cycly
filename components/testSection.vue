<template>
  <div>
    <div class="testSection">
      <h1 class="text">EXPLORE NATURE</h1>
      <h1 class="text2">PUSH YOUR LIMITS</h1>
      <h1 class="text3">EXPERIENCE THE THRILL</h1>
      <h1 class="text4">OF THE GREAT OUTDOORS</h1>

      <div class="testSection__image-container" id="image-container">
        <img
          src="../assets/images/marqueeImage.png"
          alt=""
          id="image-container-image"
        />
      </div>
    </div>

    <div class="secondSection">
      <div class="secondSection__container marquee__inner">
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>
        <!-- -------- -->
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>
        <!-- Original content -->
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>
        <!-- Duplicate content -->
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>

        <!-- ---- -->
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>

        <!-- ---- -->
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage1.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage2.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage3.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage4.png" alt="" />
        </div>
        <div class="secondSection__container--card">
          <img src="../assets/images/showcaseImage5.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      marquee.play();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  marquee.play();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".testSection",
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

  // tl.from(".text", {
  //   xPercent: -100,
  //   duration: 2,
  //   ease: "power3.inOut",
  //   opacity: 0,
  // });

  // tl.from(
  //   ".text2",
  //   {
  //     xPercent: 100,
  //     duration: 2,
  //     ease: "power3.inOut",
  //     opacity: 0,
  //   },
  //   "-=2"
  // );

  // gsap.from(".text2", {
  //   xPercent: 200,
  //   duration: 2,
  //   ease: "power3.inOut",
  //   opacity: 0,

  //   scrollTrigger: {
  //     trigger: ".testSection",
  //     start: "top 500px",
  //     end: "top 200px",
  //     //   pin: [".text"],
  //     markers: true,
  //     scrub: 1,
  //   },
  // });
});
</script>

<style scoped lang="scss">
.testSection {
  width: 100%;
  height: max-content;
  max-height: max-content;
  min-height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0 12rem;
  position: relative;
  background: linear-gradient(0deg, #151515 0%, #202020 50%, #151515 100%);

  @media screen and (min-width: 1020px) and (max-width: 1920px) {
    padding: 4rem 0 15rem;

    bottom: -2rem;
  }

  h1 {
    width: max-content;
    font-size: 8rem;
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

.secondSection {
  width: 100%;
  height: 50rem;
  max-height: 50rem;
  min-height: 50rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0 12rem;
  position: relative;
  background-color: #ffffff;

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

// .marquee {
//       text-transform: uppercase;
//       overflow: hidden;

//       &__wrap {
//         &:hover {
//           .marquee__inner {
//             animation-play-state: paused;

//             &:hover {
//               .slide-up {
//                 transform: translateY(0);

//                 &::before {
//                   transform: translateY(0);
//                 }
//               }
//             }
//           }
//         }
//       }

//       &__inner {
//         height: 100%;
//         width: fit-content;
//         align-items: center;
//         display: flex;
//         position: relative;
//         animation: marquee 25s linear infinite;
//         will-change: transform;
//         padding-top: 2.4rem;
//         padding-bottom: 1rem;

//         @include media(">phone") {
//           padding-top: 5.8rem;
//           padding-bottom: 2.3rem;
//         }

//         span {
//           white-space: nowrap;
//           padding-left: 2rem;
//           padding-right: 2rem;
//         }

//         .inner-span {
//           text-transform: uppercase;
//           @extend %title-160;
//           color: $col-boulder;
//           position: relative;
//           overflow: hidden;

//           .slide-up {
//             position: absolute;
//             top: 0;
//             left: 0;
//             overflow: hidden;
//             transform: translateY(100%);
//             transition: transform 275ms ease;
//             display: none;

//             @media (any-pointer: fine) {
//               display: inline-block;
//             }

//             &::before {
//               display: inline-block;
//               content: attr(data-content);
//               white-space: nowrap;
//               color: $col-orange;
//               transform: translateY(-100%);
//               transition: transform 275ms ease;
//             }
//           }
//         }
//       }

//       @keyframes marquee {
//         100% {
//           transform: translate3d(-50%, 0, 0);
//         }
//       }
//     }
</style>
