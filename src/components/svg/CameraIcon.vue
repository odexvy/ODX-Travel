<script setup lang="ts">
import { defineProps } from 'vue'

const { svgColor, height, width } = defineProps(['svgColor', 'height', 'width'])
</script>

<style scoped>
.cls-1 {
  fill: v-bind(svgColor);
}
</style>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    x="0px"
    y="0px"
    :height="height"
    :width="width"
    :fill="svgColor"
  >
    <g data-name="Layer 3">
      <path class="cls-1" d="M44.58,9a1,1,0,0,0-.91-.61H20.9A1,1,0,0,0,20,9l-3,7.06H47.62Z" />
      <path
        class="cls-1"
        d="M56.24,18.07H39.18a17.56,17.56,0,1,1-14.34,0H7.76A4.76,4.76,0,0,0,3,22.82v28A4.76,4.76,0,0,0,7.76,55.6H56.24A4.76,4.76,0,0,0,61,50.84v-28A4.76,4.76,0,0,0,56.24,18.07Zm-3,11.62a4.11,4.11,0,1,1,4.11-4.11A4.12,4.12,0,0,1,53.21,29.69Z"
      />
      <path class="cls-1" d="M14.73,13.93a1,1,0,0,0-1-1h-4a1,1,0,0,0-1,1v2.14h6Z" />
      <path
        class="cls-1"
        d="M38.49,20a15.62,15.62,0,0,0-13,0,.27.27,0,0,1-.11,0A15.58,15.58,0,1,0,38.6,20l-.06,0,0,0Zm5,14.16A11.51,11.51,0,1,1,32,22.6,11.53,11.53,0,0,1,43.52,34.11Z"
      />
      <path class="cls-1" d="M22.5,34.11A9.51,9.51,0,1,0,32,24.6,9.52,9.52,0,0,0,22.5,34.11Z" />
      <path class="cls-1" d="M53.21,23.47a2.11,2.11,0,1,0,2.11,2.11A2.1,2.1,0,0,0,53.21,23.47Z" />
    </g>
  </svg>
</template>
