<script setup lang="ts">
import TextButton from '@/components/TextButton.vue'
import IconButton from '@/components/IconButton.vue'
import { travelDatas } from '../travelDatas.ts'
import { useCurrentAccentColorFromCarouselStore } from '../stores/CurrentAccentColorFromCarousel'

const currentAccentColorFromCarousel = useCurrentAccentColorFromCarouselStore()
const data = travelDatas

function getImageUrl(name: string, ext: 'jpg' | 'png') {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}

const handleCarouselChange = (index: any) => {
  console.log(index, data[index].color)
  currentAccentColorFromCarousel.color = data[index].color
}
</script>

<template>
  <v-carousel
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
        <div class="goDownButton">
          <IconButton iconName="arrow-down-thin" :icon-color="toto.textColor" :color="toto.color" />
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <div class="content">
    <div class="test">Nos voyages</div>
    <div class="test">Qui sommes nous</div>
  </div>
</template>

<style>
.content {
  display: flex;
  height: 90vh;
  width: 100%;
}
.test {
  padding: 8px;
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.discoverButton {
  margin-top: 24px;
}
.goDownButton {
  position: absolute;
  bottom: 0;
  margin-bottom: 24px;
}
</style>
