<script setup lang="ts">
import backgroundImageData from '../data.json'

const data = backgroundImageData

function getImageUrl(name: string, ext: 'jpg' | 'png') {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <v-carousel hide-delimiters height="100vh">
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
        <div class="text-h1" :style="{ color: toto.color, fontWeight: 'bold' }">
          {{ toto.subTitle }}
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<style></style>
