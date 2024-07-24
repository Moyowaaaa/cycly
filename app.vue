<template>
  <div>
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Interactions } from "@/interactions";

onMounted(() => {
  new Interactions();
});
</script>

<style scoped lang="scss"></style>
