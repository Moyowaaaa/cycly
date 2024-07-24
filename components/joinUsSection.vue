<template>
  <div class="joinUsSection">
    <div class="joinUsSection__container">
      <h1>Join the Cycle Revolution</h1>

      <div class="joinUsSection__container--text-container">
        Join the e-bike revolution with ReCycle. Our sustainable e-bikes save
        you money and reduce your carbon footprint. Choose your model and join
        the revolution today!
      </div>

      <button class="joinUsSection__container--button">
        <span style="display: flex; align-items: center; gap: 10px"
          ><span>Shop</span>
          <img src="../assets/images/rightArrow.svg" alt="" />
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.joinUsSection {
  width: 100%;
  min-height: 70vh;
  max-height: 70vh;
  height: 70vh;
  background-image: url("../assets/images/joinUsBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 600;
      font-family: sans-medium;
      line-height: 3rem;
    }

    &--text-container {
      font-family: "dm-mono";
      font-size: 1.125rem;
      line-height: 1.688rem;
      max-width: 50rem;
      text-align: center;
    }

    &--button {
      padding: 1.125rem 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: 5px;
      width: max-content;
      background-color: #f0f0f0;
      color: #101010;
      border: none;
      outline: none;
      display: inline-block;
      position: relative;
      font-family: sans-medium;
      cursor: pointer;

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
}

.joinUsSection__container--button {
  overflow: hidden;
  color: #fff;
}

.joinUsSection__container--button span {
  display: block;
  position: relative;
}

.joinUsSection__container--button > span {
  overflow: hidden;
}

.joinUsSection__container--button > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.joinUsSection__container--button:hover > span > span {
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

.joinUsSection__container--button::before {
  content: "";
  background: #f0f0f0;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.joinUsSection__container--button:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
</style>
