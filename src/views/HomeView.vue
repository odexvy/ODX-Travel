<script setup lang="ts">
import { travelDatas } from '../travelDatas.js'

function getImageUrl(name: string, ext: 'jpg' | 'png') {
  return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<template>
  <v-carousel :show-arrows="false" cycle hide-delimiters height="100vh">
    <v-carousel-item
      v-for="(toto, i) in travelDatas"
      :key="i"
      :src="getImageUrl(toto.image, 'jpg')"
      cover
    >
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
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <div class="content">Nos voyages</div>
  <div class="content">Qui sommes nous</div>
</template>

<style>
.content {
  padding: 8px;
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
