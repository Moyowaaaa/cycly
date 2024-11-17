<template>
  <Transition name="fade">
    <div class="toast-component" v-if="statusvisible">
      <div class="toast-component__container">
        {{ status }}
      </div>
      <div
        class="toast-component__color-bar"
        :style="{ border: `2px solid ${statusColor} ` }"
      ></div>
    </div>
  </Transition>
</template>

<script setup>
import useToastStore from "@/stores/ToastStore";

const status = ref("");
const statusColor = ref("");
const statusvisible = ref(false);

watchEffect(() => {
  const { message, show, color } = useToastStore();
  (status.value = message),
    (statusColor.value = color),
    (statusvisible.value = show);
});
</script>

<style lang="scss" scoped>
.toast-component {
  position: fixed;
  top: 6rem;
  z-index: 30;
  right: 2rem;
  min-width: 20rem;
  border-radius: 0.2rem;
  width: max-content;
  height: max-content;
  background: white;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  color: #101010;
  &__container {
    width: 20rem;
    padding-left: 1rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  &__color-bar {
    width: 100%;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
  }
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
