<template>
  <div class="skeleton-loader">
    <div class="loading-strip"></div>
    <div class="loading-strip"></div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-loader {
  background-color: #f9f6ff;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  padding-bottom: 2rem;
  padding-left: 2rem;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
}
.loading-strip {
  width: 50%;
  height: 1.5rem;
  background: linear-gradient(90deg, #e7e7e7 25%, #e0e0e0 50%, #e7e7e7 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  &:nth-child(2) {
    width: 40%;
  }
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
