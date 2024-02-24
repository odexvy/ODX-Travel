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
  <div>
    <v-badge v-if="notif !== 0" :content="notif" color="#db3b1f">
      <IconButton :color="color" :icon-color="iconColor" :icon-name="iconName" />
    </v-badge>
    <IconButton v-else :color="color" :icon-color="iconColor" :icon-name="iconName" />
  </div>
</template>

<style scoped></style>
