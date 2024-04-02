<script setup props="props">
import { ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPolyline, LIcon } from '@vue-leaflet/vue-leaflet'

const { coordinates: initialCoordinates } = defineProps(['coordinates'])
const coordinates = [...initialCoordinates]
const center = [...coordinates[0]]
const zoom = ref(6)

const markerClicked = (markerNumber) => {
  console.log(`Marker ${markerNumber} clicked`)
}
</script>

<template>
  <main>
    <l-map
      ref="map"
      v-model:zoom="zoom"
      v-model:center="center"
      :useGlobalLeaflet="false"
      style="border-radius: 1rem"
    >
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      ></l-tile-layer>

      <l-marker
        v-for="(coord, index) in coordinates"
        :key="index"
        :lat-lng="coord"
        @click="markerClicked(index + 1)"
        style="color: blue"
      ></l-marker>

      <l-polyline :lat-lngs="coordinates"></l-polyline>
    </l-map>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;
}
</style>
