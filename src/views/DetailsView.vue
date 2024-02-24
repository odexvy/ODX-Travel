<script setup lang="ts">
import { getImageURL } from '@/helpers/getImageURL'
import { isMobile } from '@/helpers/isMobile'
import { useSelectedTravel } from '@/stores/selectedTravel'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { selectedTravel } = useSelectedTravel()
</script>

<template>
  <div class="mainDetailView">
    <div class="aboutContainer">
      <h1>{{ selectedTravel.title }}</h1>
    </div>
    <div
      class="picture"
      :style="{
        backgroundImage: 'url(' + getImageURL(selectedTravel.image as string, 'jpg') + ')',
        display: isMobile() ? 'none' : 'block'
      }"
    >
      <h1
        :style="{
          color: selectedTravel.color
        }"
      >
        {{ selectedTravel.gps.latitude }}°N, {{ selectedTravel.gps.longitude }}°
      </h1>
    </div>
  </div>
</template>

<style>
.mainDetailView {
  display: flex;
  width: 100vw;
  min-height: calc(100vh - 88px);
}
.aboutContainer {
  background-color: #fff;
  flex: 1;
}
.picture {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 16px 8px;
  text-align: end;
}
</style>
