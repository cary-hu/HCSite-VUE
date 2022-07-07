<template>
  <header flex="~ gap2" text-xl px8 py6 shadow-sm select-none>
    <h1 text-2xl>
      HC Site - Docs
    </h1>
    <nav flex="grow" mx-3 gap2 text-2xl>
      <router-link to="/">
        <div i-carbon:home />Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </nav>
    <div flex-auto />
    <DarkSwitcher />
    <ThemeToggler />
  </header>
</template>

<style>
  header {
    line-height: 20px;
  }
</style>
