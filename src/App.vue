<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

header {
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
}

.logo {
}

nav {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  text-align: center;
  padding-left: 24px;
  gap: 8px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
}

nav a:first-of-type {
  border: 0;
}

.content {
}

@media (min-width: 1024px) {
}
</style>
