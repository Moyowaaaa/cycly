<template>
  <div class="Page">
    <div class="shopPage__banner">
      <nuxt-img
        loading="eager"
        :src="`/images/${filteredBackgrounds}.jpg`"
        alt=""
        width="100%"
        height="100%"
        quality="80"
        :placeholder="15"
        format="webp"
      />

      <div class="shopPage__banner--text-container">
        <h1 v-if="selectedBikeType">{{ selectedBikeType }}</h1>
        <h1 v-else>Bikes</h1>
      </div>
    </div>
    <div class="shopPage__bikes-container">
      <div class="shopPage__bikes-container--filter-section">
        <h1>Collection</h1>

        <div class="shopPage__bikes-container--filter-section__filters">
          <p
            v-for="(type, index) in types"
            :key="index"
            @click="onSelectType(type)"
            :class="{ active: selectedBikeType === type }"
          >
            {{ type }}
          </p>
        </div>

        <hr class="line" />
      </div>

      <div class="shopPage__bikes-container--store-section">
        <BikeCard
          v-for="(bike, index) in filteredBikes"
          :key="index"
          :bicycle="bike"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useBikeStore from "../stores/BikesStore";
import type { bike, bikeTypes } from "../types/declarations";

const route = useRoute();
const router = useRouter();
const type = route.query.type;
const BikesStore = useBikeStore();
const { bikes } = storeToRefs(BikesStore);

const types: bikeTypes[] = [
  "City Bikes",
  "Mountain Bikes",
  "Road Bikes",
  "Electric Bikes",
];

const selectedBikeType = ref<bikeTypes | null>((type as bikeTypes) || null);

const onSelectType = (type: bikeTypes) => {
  if (selectedBikeType.value === type) {
    selectedBikeType.value = null;
    router.push({ query: { ...route.query, type: undefined } });
  } else {
    selectedBikeType.value = type;
    router.push({ query: { ...route.query, type: type } });
  }
};

const filteredBikes = computed(() => {
  if (selectedBikeType.value === null) {
    return bikes.value;
  }
  return bikes.value.filter((bike) =>
    bike.type.some((type) => selectedBikeType.value === type)
  );
});

const filteredBackgrounds = computed(() => {
  if (!selectedBikeType.value) {
    return "bikesImage";
  } else if (selectedBikeType.value === "City Bikes") {
    return "roadBikesImage2";
  } else if (selectedBikeType.value === "Road Bikes") {
    return "cityBikesImage";
  } else if (selectedBikeType.value === "Electric Bikes") {
    return "electricBikesImage";
  } else if (selectedBikeType.value === "Mountain Bikes") {
    return "mountainBikesImage";
  }
});

useHead({
  title: "Shop | Cycly",
  meta: [
    { hid: "description", name: "description", content: "Cycly" },
    {
      hid: "og:description",
      name: "og:description",
      content: "Cycly Bike Store",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Cycly",
    },
    { hid: "og:title", name: "og:title", content: "Cycly" },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Cycly",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Cycly",
    },
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "https://res.cloudinary.com/dyap7epew/image/upload/f_auto,q_auto/v1/projects/dvtawwshuetenrqgrvz3",
    },
  ],
});
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
    overflow: hidden;

    img {
      height: 100%;

      width: 100%;
      object-fit: cover;
      scale: 1;
      // object-position: 20%;
    }

    &--text-container {
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

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

    @media screen and (max-width: 500px) {
      padding: 2rem;
    }

    &--filter-section {
      min-width: 20rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      height: max-content;

      @media screen and (max-width: 500px) {
        display: none;
      }

      @media screen and (min-width: 767px) and (max-width: 991px) {
        display: none;
      }

      @media (min-width: 900px) and (max-width: 1300px) {
        // border: 2px solid red;
        min-width: 11rem;
      }

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
        padding-bottom: 8rem;
        cursor: pointer;
        width: max-content;

        @media screen and (min-width: 767px) and (max-width: 991px) {
          flex-direction: row;
        }

        .active {
          font-weight: 700;
        }
      }
    }
    &--store-section {
      width: 100%;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
      }

      @media screen and (min-width: 767px) and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
      }
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

@media (min-width: 900px) and (max-width: 1300px) {
  .shopPage {
    &__bikes-container {
      max-width: 150rem;
      // border: 2px solid blue;
      padding: 2rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .Page {
    position: relative;
    min-height: max-content;
  }

  .shopPage {
    &__banner {
      width: 100%;
      height: 15rem;

      &--text-container {
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
}
</style>
