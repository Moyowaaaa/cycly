<template>
  <div class="wishlistPage">
    <div class="wishlistPage__banner">
      <nuxt-img src="showcaseImage8.png" alt="" />
      <div class="wishlistPage__banner--text-container">
        <h1>WISH-LIST</h1>
      </div>
    </div>
    <WishlistEmptyState v-if="wishlist.length === 0" />
    <div class="wishlistPage__container" v-else>
      <div class="wishlistPage__container--product-section">
        <BikeCard
          v-for="(bike, index) in itemsinWishlist"
          :key="index"
          :bicycle="bike"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useWishlistStore from "../stores/WishListStore";
import { storeToRefs } from "pinia";
const { wishlist, itemsinWishlist } = storeToRefs(useWishlistStore());

console.log({ wishlist });
</script>

<style scoped lang="scss">
.wishlistPage {
  position: relative;

  background-color: white;
  padding-top: 5.5rem;
  color: #101010;
  box-sizing: border-box;
}

.wishlistPage {
  &__banner {
    width: 100%;
    height: 20rem;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &--text-container {
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-weight: 700;
        font-family: sans-bold;
        font-size: 5rem;
        color: white;
      }
    }
  }

  &__container {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    &--product-section {
      width: 100%;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
    }
  }
}
</style>
