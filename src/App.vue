<script setup lang="ts">
import { RouterView } from 'vue-router'
import ODXLogo from './components/icons/ODXLogo.vue'
</script>

<template>
  <div class="appContainer">
    <header>
      <ODXLogo svgColor="#1ad" width="72" height="72" />
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="54" height="54" /> -->
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </header>
    <div class="contentContainer">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  /* backdrop-filter: blur(100px); */
  padding: 8px;
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

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
