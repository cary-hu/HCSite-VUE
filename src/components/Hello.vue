<script setup lang="ts">
const props = defineProps<{
  name: string
}>();
const uppercase = computed(() => props.name.toUpperCase());
</script>

<template>
  <div text="green 3xl" class="font-sans p-3">
    Hello, {{ uppercase }}
  </div>
  <div i-carbon-bee text="5xl yellow" />
</template>
