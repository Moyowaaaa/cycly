<template>
  <div class="ourCollection">
    <div class="ourCollection__container">
      <div class="ourCollection__container--title-section">
        <h1>OUR COLLECTION</h1>
      </div>

      <div class="ourCollection__container--card-section">
        <CollectionCard
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

const collections = ref<collectionType[]>([
  {
    title: "City Bikes",
    image: "cityBike",
    backgroundColor: "#9747FF",
  },
  {
    title: "Mountain Bikes",
    image: "mountainBike",
    backgroundColor: "#F57804",
  },
  {
    title: "Road Bikes",
    image: "roadBike",
    backgroundColor: "#6BF3F3",
  },
  {
    title: "Electric Bikes",
    image: "electricBike",
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
  box-sizing: border-box;

  background-color: #ffffff;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 112rem;
    margin: 0 auto;
    padding: 6rem 4rem;
    box-sizing: border-box;

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

  @media screen and (max-width: 500px) {
    padding: 4rem 0;
    // border: 2px solid blue;

    &__container {
      padding: 0;

      &--title-section {
        font-size: 2.5rem;
        line-height: 2.5rem;
        max-width: 100%;
        text-align: center;
      }

      &--card-section {
        gap: 1rem;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  @media screen and (min-width: 767px) and (max-width: 991px) {
    padding: 1rem 0;

    &__container {
      &--card-section {
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
</style>
