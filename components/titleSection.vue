<template>
  <div class="title-section">
    <div class="title-section__container">
      <div class="title-section__container--left-column">
        <h1>CYCLE OF LIFE.</h1>

        <button class="title-section__container--left-column__button">
          <span style="display: flex; align-items: center; gap: 10px"
            ><span>Shop</span
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
      </div>

      <div class="title-section__container--right-column">
        <p>Discover the joy of cycling with our premium range of bicycles.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title-section {
  min-height: 100vh;
  height: 100vh;
  // position: absolute;
  width: 100%;
  padding: 1rem 0rem;
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  background-image: url("../assets/images/titleBike.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__container {
    display: flex;
    // position: absolute;
    width: 100%;
    height: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 2rem 4rem;

    &--left-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;

      h1 {
        font-family: sans-bold;
        font-size: 5rem;
        max-width: 35rem;
        line-height: 5rem;
        color: #d9d9d9;
      }

      button {
        padding: 1.125rem 2.5rem;
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
        font-family: sans-medium;

        &::before,
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    &--right-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
      padding-bottom: 4rem;

      p {
        max-width: 30rem;
        font-size: 1.875rem;
        line-height: 1.875rem;
      }
    }
  }
}

.title-section__container--left-column__button {
  border: 1px solid #000;
  overflow: hidden;
  color: #fff;
}

.title-section__container--left-column__button span {
  display: block;
  position: relative;
}

.title-section__container--left-column__button > span {
  overflow: hidden;
}

.title-section__container--left-column__button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.title-section__container--left-column__button:hover > span > span {
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

.title-section__container--left-column__button::before {
  content: "";
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.title-section__container--left-column__button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
</style>
