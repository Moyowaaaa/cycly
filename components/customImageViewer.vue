<template>
  <div>
    <skeleton-loader v-if="loading" />

    <nuxt-img
      v-show="!loading"
      loading="eager"
      :src="computedImageSrc"
      :alt="props.alt || 'image'"
      width="100%"
      height="100%"
      quality="80"
      format="webp"
      :style="{ objectFit: sizeType }"
      @load="loading = false"
      @error="loading = false"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string | undefined;
  sizeType?: "cover" | "contain";
  alt?: string;
}

const props = defineProps<Props>();
const imageExtensions = ["png", "jpg", "webp"];
const computedImageSrc = ref("");
const loading = ref(true);

watchEffect(async () => {
  loading.value = true;
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
    z-index: 10000 !important;
  }
}
</style>
