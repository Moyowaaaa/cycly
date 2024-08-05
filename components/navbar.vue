<template>
  <div class="navbar" :class="{ whiteNav: !isHomeRoute }">
    <div class="navbar__container" ref="navbarRef">
      <div class="navbar__container--logo-container" @click="onGoHome">
        <nuxt-img loading="lazy" src="logo.png" alt="logo" />
      </div>

      <div class="navbar__container--links-container">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="router.push('/wishlist')"
        >
          <path
            d="M9.99984 18.0416C9.7415 18.0416 9.4915 18.0083 9.28317 17.9333C6.09984 16.8416 1.0415 12.9666 1.0415 7.24158C1.0415 4.32492 3.39984 1.95825 6.29984 1.95825C7.70817 1.95825 9.02484 2.50825 9.99984 3.49159C10.9748 2.50825 12.2915 1.95825 13.6998 1.95825C16.5998 1.95825 18.9582 4.33325 18.9582 7.24158C18.9582 12.9749 13.8998 16.8416 10.7165 17.9333C10.5082 18.0083 10.2582 18.0416 9.99984 18.0416ZM6.29984 3.20825C4.0915 3.20825 2.2915 5.01658 2.2915 7.24158C2.2915 12.9333 7.7665 16.0999 9.6915 16.7583C9.8415 16.8083 10.1665 16.8083 10.3165 16.7583C12.2332 16.0999 17.7165 12.9416 17.7165 7.24158C17.7165 5.01658 15.9165 3.20825 13.7082 3.20825C12.4415 3.20825 11.2665 3.79992 10.5082 4.82492C10.2748 5.14159 9.7415 5.14159 9.50817 4.82492C8.73317 3.79159 7.5665 3.20825 6.29984 3.20825Z"
            :fill="route.name !== 'index' ? 'black' : 'white'"
          />
        </svg>

        <p style="margin-left: -1rem; min-width: 1rem">
          <span v-if="itemsinWishlist.length > 0">
            ( {{ itemsinWishlist.length }} )</span
          >
        </p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1331 9.68341C10.1081 9.68341 10.0915 9.68341 10.0665 9.68341C10.0248 9.67508 9.96647 9.67508 9.91647 9.68341C7.4998 9.60841 5.6748 7.70841 5.6748 5.36675C5.6748 2.98341 7.61647 1.04175 9.9998 1.04175C12.3831 1.04175 14.3248 2.98341 14.3248 5.36675C14.3165 7.70841 12.4831 9.60841 10.1581 9.68341C10.1498 9.68341 10.1415 9.68341 10.1331 9.68341ZM9.9998 2.29175C8.30814 2.29175 6.92481 3.67508 6.92481 5.36675C6.92481 7.03341 8.2248 8.37508 9.88314 8.43341C9.9248 8.42508 10.0415 8.42508 10.1498 8.43341C11.7831 8.35841 13.0665 7.01675 13.0748 5.36675C13.0748 3.67508 11.6915 2.29175 9.9998 2.29175Z"
            :fill="route.name !== 'index' ? 'black' : 'white'"
          />
          <path
            d="M10.1413 18.7916C8.50801 18.7916 6.86634 18.3749 5.62467 17.5416C4.46634 16.7749 3.83301 15.7249 3.83301 14.5833C3.83301 13.4416 4.46634 12.3833 5.62467 11.6083C8.12467 9.94992 12.1747 9.94992 14.658 11.6083C15.808 12.3749 16.4497 13.4249 16.4497 14.5666C16.4497 15.7083 15.8163 16.7666 14.658 17.5416C13.408 18.3749 11.7747 18.7916 10.1413 18.7916ZM6.31634 12.6583C5.51634 13.1916 5.08301 13.8749 5.08301 14.5916C5.08301 15.2999 5.52467 15.9833 6.31634 16.5083C8.39134 17.8999 11.8913 17.8999 13.9663 16.5083C14.7663 15.9749 15.1997 15.2916 15.1997 14.5749C15.1997 13.8666 14.758 13.1833 13.9663 12.6583C11.8913 11.2749 8.39134 11.2749 6.31634 12.6583Z"
            :fill="route.name !== 'index' ? 'black' : 'white'"
          />
        </svg>

        <svg
          width="1"
          height="21"
          viewBox="0 0 1 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="21"
            x2="0.500001"
            y2="-2.18557e-08"
            :stroke="route.name !== 'index' ? 'black' : 'white'"
          />
        </svg>

        <div
          class="navbar__container--links-container__additional-links"
          :class="{ navActive: !isHomeRoute }"
        >
          <NuxtLink to="/shop">
            <p>Shop</p>
          </NuxtLink>
          <NuxtLink to="/cart">
            <p>
              Cart
              <span v-if="CartStore.itemCount > 0"
                >( {{ CartStore.itemsInCart }} )</span
              >
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import useCartStore from "@/stores/CartStore";
import useWishlistStore from "../stores/WishListStore";

const route = useRoute();
const router = useRouter();
const CartStore = useCartStore();
const tl: any = inject("timeline");
const isHomeRoute = ref(false);
const { wishlist, itemsinWishlist } = storeToRefs(useWishlistStore());

const navbarRef = ref<HTMLDivElement | null>(null);

watchEffect(() => {
  if (route.name === "index") {
    isHomeRoute.value = true;
    document?.querySelector(".homePage")?.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    isHomeRoute.value = false;
    document?.querySelector(".homePage")?.scrollIntoView({
      behavior: "smooth",
    });
  }
});
onMounted(() => {
  if (navbarRef.value) {
    gsap.set(
      [
        navbarRef.value.children[0].children,
        navbarRef.value.children[1].children,
      ],
      {
        opacity: 0,
        y: 100,
      }
    );

    tl.to(
      [
        navbarRef.value.children[0].children,
        navbarRef.value.children[1].children,
      ],
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        delay: 1,
        ease: "power3.inOut",
      },
      "-=1"
    );
  }
});

const onGoHome = () => {
  router.push("/");
  document?.querySelector(".homePage")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style scoped lang="scss">
.navbar {
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  font-family: "sans-regular";
  max-height: 5.5rem;
  display: flex;
  align-items: center;

  top: 0;
  z-index: 99;
  height: max-content;

  &__container {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--logo-container {
      max-height: 5rem;
      max-width: 5rem;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 0;
      }
    }

    &--links-container {
      display: flex;
      gap: 1rem;
      align-items: center;
      height: max-content;
      overflow: hidden;

      svg {
        opacity: 0;
        cursor: pointer;
      }

      &__additional-links {
        font-family: "dm-mono";
        padding-left: 2rem;
        align-items: center;
        display: flex;
        gap: 1rem;
        opacity: 0;
      }
    }
  }
}

.navActive {
  color: #101010;
}
.whiteNav {
  background-color: white;
  color: #101010;
}
</style>
