<template>
  <div
    class="collectionCard"
    :style="{ backgroundColor: backgroundColor }"
    ref="cardRef"
    @click="redirectWithQuery(title)"
  >
    <div class="collectionCard__container">
      <h2>{{ title }}</h2>
    </div>
    <nuxt-img loading="lazy" :src="image" :alt="`${title} Image`" />
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const router = useRouter();

gsap.registerPlugin(ScrollTrigger);

const cardRef = ref<HTMLDivElement | null>(null);
interface CollectionCardProps {
  title: string;
  image?: string;
  backgroundColor: string;
}

defineProps<CollectionCardProps>();

const redirectWithQuery = (title: string) => {
  router.push({
    name: "shop",
    query: {
      type: title,
    },
  });
  document?.querySelector(".Page")?.scrollIntoView({
    behavior: "smooth",
  });
};

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

  @media screen and (max-width: 500px) {
    min-height: 50vh;
    max-height: 50vh;
    max-width: 90%;
    min-width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 900px) and (max-width: 1250px) {
    min-width: 15rem;
  }
  //   width: 22%;
  min-height: 30rem;
  max-height: 30rem;
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
