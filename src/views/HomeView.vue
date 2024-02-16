<script setup lang="ts">
import TextButton from '@/components/TextButton.vue'
import IconButton from '@/components/IconButton.vue'
import { travelDatas } from '../travelDatas.ts'
import { useCurrentAccentColorFromCarouselStore } from '../stores/CurrentAccentColorFromCarousel'
import { ref } from 'vue'

const currentAccentColorFromCarousel = useCurrentAccentColorFromCarouselStore()
const data = travelDatas
const contentSection = ref()

const getImageUrl = (name: string, ext: 'jpg' | 'png') => {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}

const scrollTo = () => {
  if (window.scrollY === 0) {
    contentSection.value.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}

const isOnTop = () => {
  console.log(window.scrollY)
  return window.scrollY === 0
}

const handleCarouselChange = (index: any) => {
  currentAccentColorFromCarousel.carouselColor.color = data[index].color
  currentAccentColorFromCarousel.carouselColor.textColor = data[index].textColor
}
</script>

<template>
  <v-carousel
    ref="carouselSection"
    :show-arrows="false"
    cycle
    hide-delimiters
    height="100vh"
    @update:model-value="handleCarouselChange($event)"
  >
    <v-carousel-item v-for="(toto, i) in data" :key="i" :src="getImageUrl(toto.image, 'jpg')" cover>
      <v-row
        class="d-flex fill-height justify-center align-center flex-column"
        :style="{ gap: 24 }"
      >
        <div
          class="text-h1"
          :style="{
            color: toto.color,
            fontWeight: 'bold',
            fontSize: '12vw !important',
            lineHeight: '12vw !important'
          }"
        >
          {{ toto.title.toUpperCase() }}
        </div>
        <div
          class="text-h2"
          :style="{
            color: toto.color,
            fontWeight: 'bold',
            fontSize: '7vw !important',
            lineHeight: '7vw !important'
          }"
        >
          {{ toto.subTitle }}
        </div>
        <div class="discoverButton">
          <TextButton text="Découvrir" :text-color="toto.textColor" :color="toto.color" />
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <div class="goDownButton">
    <IconButton
      @click="scrollTo()"
      :iconName="isOnTop() ? 'arrow-down-thin' : 'arrow-up-thin'"
      :icon-color="currentAccentColorFromCarousel.carouselColor.textColor"
      :color="currentAccentColorFromCarousel.carouselColor.color"
    />
  </div>
  <div class="content" ref="contentSection">
    <h1 class="test">Nos voyages</h1>
    <h1 class="test">Qui sommes nous</h1>
  </div>
</template>

<style>
.content {
  display: flex;
  height: 90vh;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1240px;
}
.test {
}
.discoverButton {
  margin-top: 24px;
}
.goDownButton {
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
  z-index: 2000;
}
</style>
