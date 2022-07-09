<script setup lang="ts">
</script>

<template>
  <Header />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="less" src="./style/main.less">
</style>
