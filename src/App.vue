<template>
  <div class="appContainer" :class="{ scrolled: isScrolled }">
    <header :class="{ scrolled: isScrolled }">
      <ODXLogo
        :svgColor="currentAccentColorFromCarousel.carouselColor.color"
        width="72"
        height="72"
      />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <div class="headerContent">
        <IconBadge iconName="cart" iconColor="#000" notif="1" />
        <IconButton iconName="cart" iconColor="#000" />
      </div>
    </header>
    <div class="contentContainer">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import ODXLogo from './components/ODXLogo.vue'
import { useCurrentAccentColorFromCarouselStore } from './stores/CurrentAccentColorFromCarousel'
import IconBadge from './components/IconBadge.vue'
import IconButton from './components/IconButton.vue'

const currentAccentColorFromCarousel = useCurrentAccentColorFromCarouselStore()

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-top: 0px;
  transition: padding-top 0.3s ease;
}
.appContainer.scrolled {
  padding-top: 88px;
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
  padding: 8px;
  transition: background-color 0.3s ease;
  justify-content: space-between;
}

header.scrolled {
  background-color: #000;
}

.headerContent {
  display: flex;
  gap: 16px;
  padding-right: 8px;
  align-items: center;
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
