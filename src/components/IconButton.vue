<script setup lang="ts">
const { color, iconColor, iconName } = defineProps(['color', 'iconColor', 'iconName'])

const iconFinalPath = 'mdi-' + iconName
</script>

<template>
  <v-btn icon rounded="xl" :color="color">
    <v-icon :icon="iconFinalPath" :color="iconColor"></v-icon
  ></v-btn>
</template>

<style scoped></style>
