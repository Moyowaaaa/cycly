<template>
  <div class="defaultLayout">
    <Navbar />
    <div class="defaultLayout__container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.defaultLayout {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  //   border: 2px solid blue;
  font-family: "sans-regular";
}
</style>
