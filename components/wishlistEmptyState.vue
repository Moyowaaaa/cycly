<template>
  <div class="wishlistEmptyState">
    <div class="wishlistEmptyState__main-container">
      <h1>No bikes in wishlist :(</h1>
      <nuxt-link to="/shop">
        <button class="button">
          <span style="display: flex; align-items: center; gap: 10px"
            ><span>View Bikes</span
            ><svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L4 0.113249L4 5.88675L9 3ZM-4.37114e-08 3.5L4.5 3.5L4.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </button>
      </nuxt-link>

      <div class="wishlistEmptyState__image-container">
        <img src="../assets/emptyImage2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wishlistEmptyState {
  color: black;
  font-family: sans-light;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 10rem;
  height: 40rem;
  position: relative;

  &__main-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  &__image-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;

    img {
      height: 110%;
      object-fit: contain;
      width: 120%;
      object-position: right;
      position: absolute;
      top: 0rem;
    }
  }
}

.button {
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 5px;
  width: max-content;
  background-color: #101010;
  color: white;
  border: none;
  outline: none;
  display: inline-block;
  position: relative;
  font-family: sans-regular;

  z-index: 100;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.button {
  border: 1px solid #000;
  overflow: hidden;
  color: #fff;
}

.button span {
  display: block;
  position: relative;
}

.button > span {
  overflow: hidden;
}

.button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.button:hover > span > span {
  animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

@keyframes MoveUpInitial {
  to {
    transform: translate3d(0, -105%, 0);
  }
}

@keyframes MoveUpEnd {
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.button::before {
  content: "";
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
</style>
