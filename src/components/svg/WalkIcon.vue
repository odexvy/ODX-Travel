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
    xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
    xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/"
    xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    xml:space="preserve"
    :height="height"
    :width="width"
  >
    <g i:extraneous="self">
      <g>
        <path
          class="cls-1"
          d="M36.5,67l8.1,8.1l-7,18.9c-0.8,2.1-2.8,3.4-4.9,3.4c-0.6,0-1.2-0.1-1.8-0.3c-2.7-1-4.1-4-3.1-6.7L36.5,67z"
        />
        <path
          class="cls-1"
          d="M21.4,46.3l4.8-9.2c1.3-2.4,3.2-4.4,5.5-5.8c11.1-6.6,12.5-6.5,13.9-6.4l7.5,0.5c2.3,0.1,3.9,0.7,11.6,12     c0.3,0.4,0.7,0.7,1.3,0.8l9.2,1.4c2.5,0.4,4.2,2.7,3.8,5.2c-0.4,2.5-2.7,4.2-5.2,3.8l-9.2-1.4c-3-0.5-5.7-2.1-7.4-4.6     c-0.4-0.6-0.7-1.1-1.1-1.6l-5.9,18.7l8.2,8.2c1.2,1.2,2.2,2.8,2.8,4.4l6.3,18.4c1,2.7-0.5,5.7-3.2,6.6c-0.6,0.2-1.1,0.3-1.7,0.3     c-2.2,0-4.2-1.4-5-3.5l-6.3-18.4c-0.1-0.2-0.2-0.3-0.3-0.5L36.4,60.5c-2.1-2.1-2.9-5-2.3-7.8l3.2-14.2c-0.3,0.2-0.6,0.4-1,0.6     c-0.9,0.5-1.6,1.3-2.1,2.2l-4.8,9.2c-0.8,1.5-2.4,2.4-4,2.4c-0.7,0-1.4-0.2-2.1-0.5C21.1,51.2,20.3,48.5,21.4,46.3z"
        />
        <ellipse
          class="cls-1"
          transform="matrix(0.1082 -0.9941 0.9941 0.1082 32.8567 61.7876)"
          cx="50.9"
          cy="12.6"
          rx="10.1"
          ry="10.1"
        />
      </g>
    </g>
  </svg>
</template>
