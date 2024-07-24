<template>
  <div class="ourCollection">
    <div class="ourCollection__container">
      <div class="ourCollection__container--title-section">
        <h1>OUR COLLECTION</h1>
      </div>

      <div class="ourCollection__container--card-section">
        <LazyCollectionCard
          v-for="(collection, index) in collections"
          :key="index"
          :title="collection.title"
          :image="collection.image"
          :backgroundColor="collection.backgroundColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { collectionType } from "../types/declarations";
import mountainBikesImage from "../assets/images/mountainBike.png";
import cityBikeImage from "../assets/images/cityBike.png";
import roadBikeImage from "../assets/images/roadBike.png";
import electricBikeImage from "../assets/images/electricBike.png";

const collections = ref<collectionType[]>([
  {
    title: "City Bikes",
    image: cityBikeImage,
    backgroundColor: "#9747FF",
  },
  {
    title: "Mountain Bikes",
    image: mountainBikesImage,
    backgroundColor: "#F57804",
  },
  {
    title: "Road Bikes",
    image: roadBikeImage,
    backgroundColor: "#6BF3F3",
  },
  {
    title: "Electric Bikes",
    image: electricBikeImage,
    backgroundColor: "#FFC0CB",
  },
]);
</script>

<style scoped lang="scss">
.ourCollection {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  font-family: "sans-regular";
  height: max-content;
  background-color: #ffffff;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 112rem;
    margin: 0 auto;
    padding: 6rem 4rem;

    &--title-section {
      font-family: sans-bold;
      font-size: 5rem;
      max-width: 35rem;
      line-height: 5rem;
      color: #101010;
    }

    &--card-section {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }
}
</style>
