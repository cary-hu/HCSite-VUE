<script setup lang="ts">
</script>

<template>
  <Header />
  <router-link to="/">
    Go to Home
  </router-link>
  <router-link to="/about">
    Go to About
  </router-link>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<style lang="less" src="./style/main.less">
</style>
