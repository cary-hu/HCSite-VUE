<template>
  <header text-xl px8 shadow-sm select-none>
    <h1 text-2xl mx-5>
      HC Site - Docs
    </h1>
    <nav flex="grow" text-xl>
      <router-link to="/">
        <div i-carbon:home />Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
      <router-link to="/compose">
        Compose
      </router-link>
    </nav>
    <div flex-auto />
    <ThemeToggler />
  </header>
</template>

<style lang="less">
  header {
    line-height: 20px;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    nav {
      display: flex;
      align-items: center;
      gap: 8px;
      a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: lighter;
        &:hover {
          color: inherit;
        }
      }
    }
  }
</style>
