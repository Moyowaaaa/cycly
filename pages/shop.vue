<template>
  <div class="Page">
    <div class="shopPage__banner">
      <!-- <nuxt-img src="cartImage.png" alt="" /> -->
      <img src="../assets/storeBannerImage.png" alt="" />

      <div class="shopPage__banner--text-container">
        <h1>Bikes</h1>
      </div>
    </div>
    <div class="shopPage__bikes-container">
      <div class="shopPage__bikes-container--filter-section">
        <h1>Collection</h1>

        <div class="shopPage__bikes-container--filter-section__filters">
          <p>City Bikes</p>
          <p>Mountain Bikes</p>
          <p>Road Bikes</p>
          <p>Electric Bikes</p>
        </div>

        <hr class="line" />
      </div>

      <div class="shopPage__bikes-container--store-section">
        <BikeCard v-for="(bike, index) in bikes" :key="index" :bicycle="bike" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useBikeStore from "../stores/BikesStore";
const BikesStore = useBikeStore();
const { bikes } = storeToRefs(BikesStore);
console.log({ bikes });
</script>

<style scoped lang="scss">
.Page {
  position: relative;
  min-height: 100rem;
  background-color: white;
  padding-top: 5.5rem;
  color: #101010;
}

.shopPage {
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
        color: #f6f6f6;
      }
    }
  }

  &__bikes-container {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 4rem 4rem;
    display: flex;
    gap: 2rem;
    padding-bottom: 10rem;

    &--filter-section {
      min-width: 20rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      height: max-content;

      h1 {
        font-size: 1.375rem;
        font-weight: 500;
        font-family: "dm-mono";
      }

      &__filters {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-weight: 400;
        font-family: "dm-mono";
        padding-bottom: 10rem;
        cursor: pointer;
      }
    }
    &--store-section {
      width: 100%;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
  }
}

.line {
  width: 70%;
  position: absolute;
  left: 0;
  bottom: 0;

  border: 0.5px solid #808080;
  opacity: 0.6;
  align-self: flex-start;
}
</style>
