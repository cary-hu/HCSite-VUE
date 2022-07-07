<script setup lang="ts">
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less" src="./style/main.less">
</style>
