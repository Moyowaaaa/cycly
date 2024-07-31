<template>
  <div class="cartCard">
    <div class="cartCard__product-section">
      <nuxt-img :src="cartItem.imageName" alt="" />
      <div class="cartCard__product-section--details-section">
        <div class="cartCard__product-section--details-section__name-section">
          <h1>{{ cartItem.name }}</h1>
          <p v-for="(type, index) in cartItem.type" :key="index">{{ type }}</p>
        </div>

        <div class="cartCard__product-section--details-section__price-section">
          <h1>${{ cartItem.price }}</h1>
          <div
            class="cartCard__product-section--details-section__price-section--quantity-section"
          >
            <div @click="CartStore.increaseItem(cartItem.slug)">+</div>
            <p>{{ cartItem.quantity }}</p>
            <div @click="CartStore.decreaseItem(cartItem.slug)">-</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cartCard__remove-section"
      @click="CartStore.removeItemFromCart(cartItem.slug)"
    >
      <nuxt-img src="trashIcon.svg" alt="" />
      <h1>Remove</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCartStore from "../stores/CartStore";
import type { bike } from "../types/declarations";

const CartStore = useCartStore();

const props = defineProps(["cartItem"]);
console.log(props.cartItem);
</script>

<style scoped lang="scss">
.cartCard {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1.5rem;

  &__product-section {
    width: 90%;
    display: flex;
    align-items: end;
    gap: 2rem;

    img {
      max-width: 14rem;
      min-width: 14rem;
      object-fit: cover;
      border-radius: 5px;
      min-height: 8rem;
      max-height: 8rem;
    }

    &--details-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      &__name-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h1 {
          font-family: "dm-mono";
          font-weight: 500;
          font-size: 1.5rem;
        }

        p {
          font-family: "dm-mono";
          font-weight: 400;
          color: #535353;
        }
      }

      &__price-section {
        display: flex;
        position: relative;
        width: 100%;
        justify-content: space-between;

        h1 {
          font-size: 1.125rem;
          font-family: "dm-mono";
          font-weight: 500;
        }
        div {
          font-family: "dm-mono";
          cursor: pointer;

          div {
            padding: 0.5rem;
            border: 1px solid #101010;
          }
          display: flex;
          gap: 1rem;
          align-items: center;
        }
      }
    }
  }
}

.cartCard__remove-section {
  border-top: 1px solid #808080;
  padding-top: 1rem;
  width: 90%;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 90%;
  font-size: 0.8rem;
  color: #535353;
  cursor: pointer;

  img {
    min-width: 10px;
  }
}
</style>
