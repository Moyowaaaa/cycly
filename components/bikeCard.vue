<template>
  <div class="bikeCard" ref="cardRef">
    <div class="bikeCard__image-container">
      <nuxt-img
        loading="lazy"
        :src="bicycle.imageName"
        :alt="`${bicycle.name} Image`"
        width="100%"
        height="100%"
      />
    </div>
    <div class="bikeCard__details-container">
      <div class="bikeCard__details-container--ratings">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-for="(star, index) in stars"
          :key="index"
        >
          <path
            d="M5.73986 16C5.84986 15.51 5.64986 14.81 5.29986 14.46L2.86986 12.03C2.10986 11.27 1.80986 10.46 2.02986 9.76C2.25986 9.06 2.96986 8.58 4.02986 8.4L7.14986 7.88C7.59986 7.8 8.14986 7.4 8.35986 6.99L10.0799 3.54C10.5799 2.55 11.2599 2 11.9999 2C12.7399 2 13.4199 2.55 13.9199 3.54L15.6399 6.99C15.7699 7.25 16.0399 7.5 16.3299 7.67L5.55986 18.44C5.41986 18.58 5.17986 18.45 5.21986 18.25L5.73986 16Z"
            :fill="star.type === 'gold' ? '#F59504' : '#808080'"
          />
          <path
            d="M18.6998 14.4599C18.3398 14.8199 18.1398 15.5099 18.2598 15.9999L18.9498 19.0099C19.2398 20.2599 19.0598 21.1999 18.4398 21.6499C18.1898 21.8299 17.8898 21.9199 17.5398 21.9199C17.0298 21.9199 16.4298 21.7299 15.7698 21.3399L12.8398 19.5999C12.3798 19.3299 11.6198 19.3299 11.1598 19.5999L8.2298 21.3399C7.1198 21.9899 6.1698 22.0999 5.5598 21.6499C5.3298 21.4799 5.1598 21.2499 5.0498 20.9499L17.2098 8.7899C17.6698 8.3299 18.3198 8.1199 18.9498 8.2299L19.9598 8.3999C21.0198 8.5799 21.7298 9.0599 21.9598 9.7599C22.1798 10.4599 21.8798 11.2699 21.1198 12.0299L18.6998 14.4599Z"
            :fill="star.type === 'gold' ? '#F59504' : '#808080'"
          />
        </svg>
      </div>
      <h1>{{ bicycle.name }}</h1>
      <p>{{ removeLastLetter(bicycle.type[0]) }}</p>
      <p>${{ bicycle.price }}</p>

      <div class="bikeCard__details-container--actions">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleWishList"
        >
          <path
            d="M9.99984 18.0416C9.7415 18.0416 9.4915 18.0083 9.28317 17.9333C6.09984 16.8416 1.0415 12.9666 1.0415 7.24158C1.0415 4.32492 3.39984 1.95825 6.29984 1.95825C7.70817 1.95825 9.02484 2.50825 9.99984 3.49159C10.9748 2.50825 12.2915 1.95825 13.6998 1.95825C16.5998 1.95825 18.9582 4.33325 18.9582 7.24158C18.9582 12.9749 13.8998 16.8416 10.7165 17.9333C10.5082 18.0083 10.2582 18.0416 9.99984 18.0416ZM6.29984 3.20825C4.0915 3.20825 2.2915 5.01658 2.2915 7.24158C2.2915 12.9333 7.7665 16.0999 9.6915 16.7583C9.8415 16.8083 10.1665 16.8083 10.3165 16.7583C12.2332 16.0999 17.7165 12.9416 17.7165 7.24158C17.7165 5.01658 15.9165 3.20825 13.7082 3.20825C12.4415 3.20825 11.2665 3.79992 10.5082 4.82492C10.2748 5.14159 9.7415 5.14159 9.50817 4.82492C8.73317 3.79159 7.5665 3.20825 6.29984 3.20825Z"
            :fill="inList ? '#F59504' : 'black'"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
          @click="addToCart"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { bike } from "../types/declarations";
import useBikeStore from "../stores/BikesStore";
import useCartStore from "@/stores/CartStore";
import useWishlistStore from "../stores/WishListStore";
import gsap from "gsap";
import { removeLastLetter } from "../utils/index";

const CartStore = useCartStore();
const WishlistStore = useWishlistStore();
const BikeStore = useBikeStore();
let productStatus = ref<boolean | null>(true);
let inList = ref<boolean | null>(null);
const cardRef = ref<HTMLDivElement | null>(null);

interface bikeDetails {
  bicycle: bike;
}

const props = defineProps<bikeDetails>();

const stars = computed(() => {
  const goldStars = props.bicycle.rating || 5;
  const greyStars = 5 - goldStars;
  return [
    ...Array(goldStars).fill({ id: "gold-" + Math.random(), type: "gold" }),
    ...Array(greyStars).fill({ id: "grey-" + Math.random(), type: "grey" }),
  ];
});

const addToCart = () => {
  if (props.bicycle.slug) {
    CartStore.addItemToCart(props.bicycle.slug, 1);
  }
};

watchEffect(() => {
  if (props.bicycle.slug) {
    const exists = ref<boolean | null>(
      WishlistStore.wishlist
        .map((item) => item.slug)
        .includes(props.bicycle.slug)
    );
    inList.value = exists.value;
  }
});

const toggleWishList = () => {
  if (props.bicycle.slug && inList.value) {
    WishlistStore.removeItemfromWishlist(props.bicycle.slug as string);
    productStatus.value = true;
  } else {
    WishlistStore.addItemToWishList(props.bicycle.slug as string);
    productStatus.value = false;
  }
};

const onHoverAnimation = (cardRef: HTMLDivElement) => {
  gsap.to(cardRef.children[0].children, {
    scale: 1.2,
    cursor: "pointer",
    ease: "power3.inOut",
    duration: 0.5,
  });
};

const onHoverOutAnimation = (cardRef: HTMLDivElement) => {
  gsap.to(cardRef.children[0].children, {
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
.bikeCard {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 32rem;
  max-height: 32rem;
  background-color: #f9f6ff;
  font-family: "dm-mono";
  border-radius: 5px;
  min-width: 100%;
  max-width: 100%;

  &__image-container {
    width: 100%;
    height: 20rem;
    max-height: 20rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &__details-container {
    height: 12rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    gap: 1rem;

    &--ratings {
      display: flex;
      gap: 0.2rem;
      align-items: center;
    }

    &--actions {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;
      width: 100%;
      align-items: center;
      justify-content: center;

      svg {
        height: 20px;
        width: 20px;
        cursor: pointer;
      }
    }

    h1 {
      font-size: 1.125rem;
      font-weight: 500;
    }
    p {
      font-size: 1.125rem;
      font-weight: 400;
    }
  }
}
</style>
