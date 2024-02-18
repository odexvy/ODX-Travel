<script setup lang="ts">
import IconButton from './IconButton.vue'

const { color, iconColor, iconName, notif } = defineProps([
  'color',
  'iconColor',
  'iconName',
  'notif'
])
</script>

<template>
  <v-badge :content="notif" color="#db3b1f">
    <IconButton :color="color" :icon-color="iconColor" :icon-name="iconName" />
  </v-badge>
</template>

<style scoped></style>
