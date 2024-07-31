<template>
  <div
    class="collectionCard"
    :style="{ backgroundColor: backgroundColor }"
    ref="cardRef"
  >
    <div class="collectionCard__container">
      <h2>{{ title }}</h2>
    </div>
    <nuxt-img :src="image" :alt="`${title} Image`" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cardRef = ref<HTMLDivElement | null>(null);
interface CollectionCardProps {
  title: string;
  image?: string;
  backgroundColor: string;
}

const props = defineProps<CollectionCardProps>();

console.log(props.image);

const onHoverAnimation = (cardRef: HTMLDivElement) => {
  gsap.to(cardRef.children[0].children, {
    x: 20,
    ease: "power3.inOut",
    duration: 0.5,
  });
  gsap.to(cardRef.children[1], {
    scale: 2,
    ease: "power3.inOut",
    duration: 0.5,
  });
};

const onHoverOutAnimation = (cardRef: HTMLDivElement) => {
  console.log(cardRef.children);
  gsap.to(cardRef.children[0].children, {
    x: 0,
    ease: "power3.inOut",
    duration: 0.5,
  });
  gsap.to(cardRef.children[1], {
    scale: 1,
    ease: "power3.inOut",
    duration: 0.5,
  });
};

onMounted(() => {
  cardRef.value?.addEventListener("mouseover", () => {
    if (cardRef.value) {
      onHoverAnimation(cardRef.value);
    }
  });
  cardRef.value?.addEventListener("mouseout", () => {
    if (cardRef.value) {
      onHoverOutAnimation(cardRef.value);
    }
  });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".collectionCard",
  //     start: "top 85%",
  //     end: "top 40%",
  //     // pin: [".testSection"],
  //     markers: true,
  //     scrub: 3,
  //     toggleActions: "none pause none none",
  //   },
  // });
  // if (cardRef.value) {
  //   gsap.set(cardRef.value?.children[1], { y: "50%" });
  //   // gsap.set(cardRef.value?.children[0], { opacity: 0 });
  //   tl.to(cardRef.value?.children[1], {
  //     y: 0,
  //   }).from(
  //     cardRef.value?.children[0].children,
  //     {
  //       yPercent: 200,
  //       opacity: 0,
  //     },
  //     "-=0.5"
  //   );
  // }
});
</script>

<style scoped lang="scss">
.collectionCard {
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 20rem;
  //   width: 22%;
  height: 30rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;
    max-height: max-content;
    overflow: hidden;

    h2 {
      font-size: 3.152rem;
      line-height: 3.152rem;
      font-family: sans-medium;
      color: #101010;
      max-width: 20%;
      font-weight: 700;
    }
  }

  img {
    align-self: center;
    position: absolute;
    bottom: 0;
    max-width: 100%;
    height: auto;
  }
}
</style>