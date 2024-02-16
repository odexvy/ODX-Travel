<script setup lang="ts">
const { color, text, textColor } = defineProps(['color', 'text', 'textColor'])
</script>

<template>
  <v-btn rounded="xl" :color="color" :style="{ fontWeight: 'bold', color: textColor }">{{
    text
  }}</v-btn>
</template>

<style scoped></style>
