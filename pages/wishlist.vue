<template>
  <div class="wishlistPage">
    <div class="wishlistPage__banner">
      <nuxt-img
        loading="lazy"
        src="/images/mountainBikes.png"
        alt=""
        format="webp"
        width="100%"
        height="100%"
      />
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

useHead({
  title: "Wishlist | Cycly",
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

        @media screen and (max-width: 500px) {
          font-size: 2.5rem;
        }
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

    @media screen and (max-width: 500px) {
      padding: 2rem;
    }

    @media screen and (min-width: 767px) and (max-width: 991px) {
    }

    &--product-section {
      width: 100%;
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;

      @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
      }

      @media screen and (min-width: 767px) and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .wishlistPage {
    &__banner {
      height: 18rem;
    }
  }
}
</style>
