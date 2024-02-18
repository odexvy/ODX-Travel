<script setup lang="ts">
import { getImageURL } from '@/helpers/getImageURL'
import { isMobile } from '@/helpers/isMobile'
import { useCurrentAccentColorFromCarouselStore } from '@/stores/CurrentAccentColorFromCarousel'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentAccentColorFromCarousel = useCurrentAccentColorFromCarouselStore()

const data = route.query

onMounted(() => {
  currentAccentColorFromCarousel.carouselColor.color = data.color as string
})
</script>

<template>
  <div
    :style="{
      position: 'fixed',
      top: 0,
      backgroundImage: 'url(' + getImageURL(data.image as string, 'jpg') + ')',
      height: '100vh',
      width: '100vw'
    }"
  ></div>
  <div class="aboutContainer" :style="{ width: isMobile() ? '100vw' : '96vw' }">
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
    <h1>Vuetify</h1>
  </div>
</template>

<style>
.aboutContainer {
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 96px;
  width: 96vw;
  background-color: #fff;
}
</style>
