<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    icon-btn
    i-carbon-sun dark:i-carbon-moon
    @click="toggleDark()"
  />
</template>
