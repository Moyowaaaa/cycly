<template>
  <nuxt-img
    loading="eager"
    :src="computedImageSrc"
    :alt="props.alt || 'image'"
    width="100%"
    height="100%"
    quality="80"
    format="webp"
    :style="{ objectFit: sizeType }"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Props {
  image: string | undefined;
  sizeType?: "cover" | "contain";
  alt?: string;
}

const props = defineProps<Props>();
const imageExtensions = ["png", "jpg", "webp"];
const computedImageSrc = ref("");

watchEffect(async () => {
  if (!props.image) return;

  for (const ext of imageExtensions) {
    const imgSrc = `/images/${props.image}.${ext}`;
    const exists = await imageExists(imgSrc);
    if (exists) {
      computedImageSrc.value = imgSrc;
      break;
    }
  }
});

function imageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
    console.log(src);
  });
}
</script>

<style scoped>
div {
  width: 100%;
  height: 20rem;
  max-height: 20rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>
