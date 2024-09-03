<template>
  <div class="Page">
    <div class="cartPage__banner">
      <nuxt-img
        loading="lazy"
        src="cartImage.png"
        alt=""
        width="100%"
        height="100%"
      />
      <div class="cartPage__banner--text-container">
        <h1>CART</h1>
      </div>
    </div>

    <CartEmptyState v-if="CartStore.productsInCart.length === 0" />

    <div class="cartPage__main-container" v-else>
      <div class="cartPage__main-container--step-count-container">
        <div>
          <div class="cartPage__main-container--step-count-container__ball">
            1
          </div>
          <p>Cart</p>
        </div>
        <div class="cartPage__main-container--step-count-container__dash"></div>
        <div>
          <div class="cartPage__main-container--step-count-container__ball">
            2
          </div>
          <p>Checkout</p>
        </div>
        <div class="cartPage__main-container--step-count-container__dash"></div>
        <div>
          <div class="cartPage__main-container--step-count-container__ball">
            3
          </div>
          <p>Payment</p>
        </div>
      </div>

      <div class="cartPage__main-container--content-container">
        <div
          class="cartPage__main-container--content-container__contents-container"
        >
          <div
            class="cartPage__main-container--content-container__contents-container--product-section"
            v-for="(cartItem, index) in CartStore.productsInCart"
            :key="index"
          >
            <CartCard :cart-item="cartItem" />
          </div>
        </div>

        <div class="cartPage__main-container--content-container__brief-section">
          <h1>Order Summary</h1>

          <div
            class="cartPage__main-container--content-container__brief-section--details-section"
          >
            <div
              class="cartPage__main-container--content-container__brief-section--details-section__detail"
            >
              <p>Sub Total</p>
              <p>${{ CartStore.totalAmountOfItemInCart }}</p>
            </div>

            <div
              class="cartPage__main-container--content-container__brief-section--details-section__detail"
            >
              <p>Discount</p>
              <p>$0</p>
            </div>

            <div
              class="cartPage__main-container--content-container__brief-section--details-section__detail"
            >
              <p>Tax</p>
              <p>$3.0</p>
            </div>

            <div
              class="cartPage__main-container--content-container__brief-section--details-section__detail"
            >
              <p>Shipping</p>
              <p>$3.0</p>
            </div>

            <div
              class="cartPage__main-container--content-container__brief-section--details-section__detail"
            >
              <p>Total</p>
              <p>$306.05</p>
            </div>

            <button
              class="cartPage__main-container--content-container__brief-section--button"
            >
              <p>Proceed to Checkout</p>
            </button>

            <hr class="line" />
            <p class="brief-text">
              Estimated delivery is within 3 working days
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCartStore from "@/stores/CartStore";
const CartStore = useCartStore();

useHead({
  title: "Cart | Cycly",
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

  background-color: white;
  padding-top: 5.5rem;
  color: #101010;
  box-sizing: border-box;
}

.cartPage {
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
      }
    }
  }

  &__main-container {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 4rem 4rem;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 10rem;

    @media screen and (max-width: 500px) {
      padding: 2rem;
    }

    &--step-count-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      @media screen and (max-width: 500px) {
        display: none;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      &__ball {
        min-height: 1.2rem;
        min-width: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: #101010;
        color: white;
        font-size: 0.6rem;
      }

      &__dash {
        width: 5rem;
        border-radius: 10px;
        border: 3px solid #101010;

        &:nth-child(4) {
          border: 3px solid #dadada;
        }
      }
    }

    &--content-container {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 1rem;
      padding-top: 2rem;
      justify-content: space-between;
      @media screen and (max-width: 991px) {
        flex-direction: column;
      }

      &__brief-section {
        height: max-content;
        width: 25rem;
        background: #f5f5f5;
        color: #101010;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 5px;
        gap: 2rem;

        @media screen and (max-width: 991px) {
          width: 100%;
        }

        h1 {
          font-size: 1.25rem;
          font-weight: 600;
          font-family: sans-semi;
        }

        &--details-section {
          display: flex;
          gap: 1rem;
          flex-direction: column;

          &__detail {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;

            p {
              &:nth-child(1) {
                font-weight: 400;
                font-family: sans-regular;
              }

              &:nth-child(2) {
                font-weight: 500;
                font-family: sans-semi;
              }
            }
          }
        }
        &--button {
          border-radius: 5px;
          margin-top: 1.5rem;
          background-color: #101010;
          color: #ffffff;
          border: none;
          padding: 1rem 0;
        }
      }

      &__contents-container {
        display: flex;
        flex-direction: column; /* Ensure items stack vertically */
        width: 50%;
        justify-content: space-between;
        padding: 2rem 0;
        position: relative;
        box-sizing: border-box;

        @media screen and (max-width: 991px) {
          width: 100%;
        }

        &--product-section {
          display: flex;
          width: 100%; /* Ensure each product section takes full width */
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }
}
.line {
  width: 100%;
  border: 0.5px solid #808080;
  opacity: 0.6;
}
.brief-text {
  text-align: center;
  font-size: 0.875rem;
  font-family: sans-regular;
}

@media screen and (max-width: 500px) {
  .cartPage {
    &__banner {
      height: 18rem;
    }
  }
}
</style>
